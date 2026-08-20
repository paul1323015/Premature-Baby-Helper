(function(){
  'use strict';
  const SNAPSHOT_KEY = 'baby_snapshot';
  const PREV_KEY = 'baby_snapshot_before_restore';
  const MAX_AUTOSAVE_INTERVAL = 60 * 1000; // 60s

  function nowIso(){ return new Date().toISOString(); }

  // Backup localStorage
  function getAllLocalStorage(){
    const data = {};
    for(let i=0;i<localStorage.length;i++){
      const key = localStorage.key(i);
      try { data[key] = JSON.parse(localStorage.getItem(key)); }
      catch(e){ data[key] = localStorage.getItem(key); }
    }
    return data;
  }

  // Backup IndexedDB (for notebook and other indexed data)
  async function getAllIndexedDB(){
    try{
      const dbs = await window.indexedDB.databases();
      const idbData = {};
      
      for(const dbInfo of dbs){
        const dbName = dbInfo.name;
        const db = await new Promise((resolve, reject)=>{
          const req = window.indexedDB.open(dbName);
          req.onsuccess = ()=> resolve(req.result);
          req.onerror = ()=> reject(req.error);
        });
        
        idbData[dbName] = {};
        
        for(const storeName of db.objectStoreNames){
          idbData[dbName][storeName] = [];
          
          const tx = db.transaction(storeName, 'readonly');
          const store = tx.objectStore(storeName);
          
          await new Promise((resolve, reject)=>{
            const req = store.getAll();
            req.onsuccess = ()=> {
              idbData[dbName][storeName] = req.result;
              resolve();
            };
            req.onerror = ()=> reject(req.error);
          });
        }
        
        db.close();
      }
      
      return idbData;
    }catch(e){
      console.warn('[local-snapshot] IndexedDB backup failed', e);
      return {};
    }
  }

  // Restore IndexedDB from backup
  async function restoreIndexedDB(idbData){
    try{
      for(const dbName in idbData){
        const db = await new Promise((resolve, reject)=>{
          const req = window.indexedDB.open(dbName);
          req.onsuccess = ()=> resolve(req.result);
          req.onerror = ()=> reject(req.error);
        });
        
        for(const storeName in idbData[dbName]){
          const records = idbData[dbName][storeName];
          
          const tx = db.transaction(storeName, 'readwrite');
          const store = tx.objectStore(storeName);
          
          // Clear and restore
          await new Promise((resolve, reject)=>{
            const clearReq = store.clear();
            clearReq.onsuccess = ()=> {
              try{
                records.forEach(record => store.put(record));
              }catch(e){ console.warn('[local-snapshot] store.put failed for some record', e); }
              resolve();
            };
            clearReq.onerror = ()=> reject(clearReq.error);
          });
        }
        
        db.close();
      }
      console.debug('[local-snapshot] IndexedDB restored successfully');
      return true;
    }catch(e){
      console.error('[local-snapshot] IndexedDB restore failed', e);
      return false;
    }
  }

  function saveSnapshot(note){
    (async ()=>{
      try{
        const idbData = await getAllIndexedDB();
        const snapshot = {
          timestamp: nowIso(),
          note: note || null,
          data: getAllLocalStorage(),
          indexedDB: idbData
        };
        localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snapshot));
        console.debug('[local-snapshot] saved snapshot with localStorage + IndexedDB', snapshot.timestamp);
        return true;
      }catch(e){
        console.warn('[local-snapshot] save failed', e);
        return false;
      }
    })();
  }

  function restoreSnapshot(){
    const raw = localStorage.getItem(SNAPSHOT_KEY);
    if(!raw){ alert('沒有可還原的本地快照。'); return false; }
    let snapshot;
    try{ snapshot = JSON.parse(raw); }
    catch(e){ alert('本地快照資料損壞，無法還原。'); return false; }

    if(!confirm('確定要回到上一個已儲存的版本嗎？此操作會覆蓋目前在此裝置的所有本地資料。')) return false;

    // backup current localStorage to allow undo
    try{
      const current = {
        timestamp: nowIso(),
        data: getAllLocalStorage()
      };
      localStorage.setItem(PREV_KEY, JSON.stringify(current));
    }catch(e){ console.warn('[local-snapshot] backup before restore failed', e); }

    try{
      // clear and restore
      localStorage.clear();
      const entries = snapshot.data || {};
      Object.keys(entries).forEach(k => {
        const v = entries[k];
        try{ localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); }
        catch(e){ console.warn('[local-snapshot] set key failed', k, e); }
      });
      alert('已還原至最近本地快照。請重新整理頁面以讓變更生效。');
      console.debug('[local-snapshot] restored snapshot', snapshot.timestamp);
      return true;
    }catch(e){
      console.error('[local-snapshot] restore failed', e);
      alert('還原失敗，請查看控制台。');
      return false;
    }
  }

  // Create and manage modal-internal button (injected into backup modal)
  function initModalButton(){
    console.debug('[local-snapshot] initModalButton called');
    
    // Continuous monitor: every 200ms check if modal exists and button is present
    // Re-inject if needed (handles React re-renders)
    const continuousMonitor = setInterval(()=>{
      try{
        // Find the modal div containing "資料備份與還原"
        const modalDiv = Array.from(document.querySelectorAll('div')).find(d => 
          (d.innerText || d.textContent || '').includes('資料備份與還原')
        );
        
        if(!modalDiv) return; // Modal not visible
        
        // Check if button already exists
        let btn = modalDiv.querySelector('#local-snapshot-modal-btn');
        let dlBtn = modalDiv.querySelector('#local-snapshot-download-btn');
        
        if(!btn){
          // Button missing - need to inject it (create a small wrapper and two buttons: download + restore)
          // Find or create button container at the end of modal content
          const existingButtons = modalDiv.querySelectorAll('button');
          let insertPoint = modalDiv;
          
          if(existingButtons.length > 0){
            // Insert after last existing button
            insertPoint = existingButtons[existingButtons.length - 1].parentNode;
          }
          
          // Create wrapper
          const wrapper = document.createElement('div');
          wrapper.style.display = 'flex';
          wrapper.style.flexDirection = 'column';
          wrapper.style.gap = '8px';
          wrapper.style.marginTop = '12px';
          wrapper.style.width = '100%';

          // Download snapshot button
          dlBtn = document.createElement('button');
          dlBtn.id = 'local-snapshot-download-btn';
          dlBtn.innerText = '下載快照檔案';
          dlBtn.style.padding = '10px 16px';
          dlBtn.style.borderRadius = '6px';
          dlBtn.style.border = '1px solid #2b6cb0';
          dlBtn.style.background = '#2b6cb0';
          dlBtn.style.color = '#fff';
          dlBtn.style.cursor = 'pointer';
          dlBtn.style.fontSize = '14px';
          dlBtn.style.fontWeight = '600';
          dlBtn.style.width = '100%';
          dlBtn.onclick = (e)=>{
            e.preventDefault(); e.stopPropagation();
            console.debug('[local-snapshot] download button clicked');
            if(window.LocalSnapshot && window.LocalSnapshot.downloadSnapshot) window.LocalSnapshot.downloadSnapshot();
          };

          // Import snapshot button
          const importBtn = document.createElement('button');
          importBtn.id = 'local-snapshot-import-btn';
          importBtn.innerText = '匯入快照檔案';
          importBtn.style.padding = '10px 16px';
          importBtn.style.borderRadius = '6px';
          importBtn.style.border = '1px solid #38a169';
          importBtn.style.background = '#38a169';
          importBtn.style.color = '#fff';
          importBtn.style.cursor = 'pointer';
          importBtn.style.fontSize = '14px';
          importBtn.style.fontWeight = '600';
          importBtn.style.width = '100%';
          importBtn.onclick = (e)=>{
            e.preventDefault(); e.stopPropagation();
            console.debug('[local-snapshot] import button clicked');
            // Create hidden file input
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json,application/json';
            input.style.display = 'none';
            input.onchange = async (ev)=>{
              const file = ev.target.files && ev.target.files[0];
              if(!file) return;
              try{
                const text = await new Promise((res, rej)=>{
                  const fr = new FileReader();
                  fr.onload = ()=> res(fr.result);
                  fr.onerror = ()=> rej(fr.error);
                  fr.readAsText(file, 'utf-8');
                });
                let parsed;
                try{ parsed = JSON.parse(text); }catch(err){ alert('檔案格式錯誤，無法解析 JSON'); return; }

                // Basic validation
                const localKeys = parsed && parsed.data ? Object.keys(parsed.data).length : 0;
                const idbKeys = parsed && parsed.indexedDB ? Object.keys(parsed.indexedDB).length : 0;
                const ts = parsed && parsed.timestamp ? parsed.timestamp : '—';
                const confirmMsg = `將匯入快照：\n時間：${ts}\nlocalStorage keys：${localKeys}\nIndexedDB 個數：${idbKeys}\n\n確定要匯入並覆蓋目前本地資料嗎？`;
                if(!confirm(confirmMsg)) return;

                // Perform backup of current state
                try{
                  const currentIdb = await getAllIndexedDB();
                  const current = { timestamp: nowIso(), data: getAllLocalStorage(), indexedDB: currentIdb };
                  localStorage.setItem(PREV_KEY, JSON.stringify(current));
                }catch(e){ console.warn('[local-snapshot] backup before import failed', e); }

                // Restore localStorage
                try{
                  localStorage.clear();
                  const entries = parsed.data || {};
                  Object.keys(entries).forEach(k => {
                    const v = entries[k];
                    try{ localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); }
                    catch(e){ console.warn('[local-snapshot] set key failed during import', k, e); }
                  });
                }catch(e){ console.error('[local-snapshot] localStorage restore during import failed', e); alert('匯入失敗（localStorage）'); return; }

                // Restore IndexedDB
                if(parsed.indexedDB){
                  const ok = await restoreIndexedDB(parsed.indexedDB);
                  if(!ok){ alert('匯入時，還原 IndexedDB 遇到錯誤，請查看控制台。'); return; }
                }

                alert('匯入完成，頁面將重新整理以套用變更');
                window.location.reload();
              }catch(e){ console.error('[local-snapshot] import failed', e); alert('匯入發生錯誤，請查看控制台'); }
            };
            document.body.appendChild(input);
            input.click();
            setTimeout(()=> input.remove(), 5000);
          };

          // Restore button
          btn = document.createElement('button');
          btn.id = 'local-snapshot-modal-btn';
          btn.innerText = '還原上一版';
          btn.style.padding = '10px 16px';
          btn.style.borderRadius = '6px';
          btn.style.border = '1px solid #f0ad4e';
          btn.style.background = '#fff3e0';
          btn.style.color = '#333';
          btn.style.cursor = 'pointer';
          btn.style.fontSize = '14px';
          btn.style.fontWeight = '500';
          btn.style.width = '100%';
          btn.onclick = (e)=> {
            e.preventDefault();
            e.stopPropagation();
            console.debug('[local-snapshot] restore button clicked');
            if(window.LocalSnapshot) window.LocalSnapshot.restoreSnapshot();
          };

          try{
            wrapper.appendChild(dlBtn);
            wrapper.appendChild(importBtn);
            wrapper.appendChild(btn);
            insertPoint.appendChild(wrapper);
            console.debug('[local-snapshot] modal buttons injected at:', insertPoint.tagName);
          }catch(e){
            console.warn('[local-snapshot] failed to inject buttons', e);
          }
        }
      }catch(e){ 
        console.warn('[local-snapshot] modal monitor error', e); 
      }
    }, 200);
    
    console.debug('[local-snapshot] continuous modal monitor started');
  }

  // Auto-save triggers
  function setupAutoSave(){
    console.debug('[local-snapshot] setupAutoSave called, readyState:', document.readyState);
    
    // save on visibility change to hidden
    document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState==='hidden') saveSnapshot('visibilitychange-hidden'); });
    // save on window blur
    window.addEventListener('blur', ()=> saveSnapshot('window-blur'));
    // save before unload
    window.addEventListener('beforeunload', ()=> saveSnapshot('beforeunload'));
    // periodic save
    setInterval(()=> saveSnapshot('interval'), MAX_AUTOSAVE_INTERVAL);
    
    // Initialize modal button - only once
    console.debug('[local-snapshot] initializing modal button');
    initModalButton();
    
    console.debug('[local-snapshot] setupAutoSave completed');
  }

  // Import snapshot from uploaded .json file
  async function importSnapshotFromFile(file){
    try{
      const text = await new Promise((res, rej)=>{
        const fr = new FileReader();
        fr.onload = ()=> res(fr.result);
        fr.onerror = ()=> rej(fr.error);
        fr.readAsText(file, 'utf-8');
      });
      const parsed = JSON.parse(text);
      return parsed;
    }catch(e){
      console.error('[local-snapshot] importSnapshotFromFile failed', e);
      throw e;
    }
  }

  // Download snapshot as a .json file
  async function downloadSnapshot(){
    try{
      const idbData = await getAllIndexedDB();
      const snapshot = {
        timestamp: nowIso(),
        note: 'export',
        data: getAllLocalStorage(),
        indexedDB: idbData
      };
      const text = JSON.stringify(snapshot, null, 2);
      const blob = new Blob([text], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `baby-snapshot-${nowIso().replace(/[:.]/g,'-')}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      console.debug('[local-snapshot] snapshot downloaded');
      return true;
    }catch(e){
      console.error('[local-snapshot] downloadSnapshot failed', e);
      return false;
    }
  }

  // Expose minimal API
  window.LocalSnapshot = {
    saveSnapshot,
    restoreSnapshot,
    downloadSnapshot,
    importSnapshot: async (file) => {
      if(!file){
        alert('未選擇檔案');
        return false;
      }
      try{
        const parsed = await importSnapshotFromFile(file);
        // Basic validation
        if(!parsed || typeof parsed !== 'object') { alert('無效的快照檔案'); return false; }
        const localKeys = parsed.data ? Object.keys(parsed.data).length : 0;
        const idbKeys = parsed.indexedDB ? Object.keys(parsed.indexedDB).length : 0;
        const ts = parsed.timestamp || '—';
        const confirmMsg = `將匯入快照：\n時間：${ts}\nlocalStorage keys：${localKeys}\nIndexedDB 個數：${idbKeys}\n\n確定要匯入並覆蓋目前本地資料嗎？`;
        if(!confirm(confirmMsg)) return false;

        // backup current state
        try{
          const currentIdb = await getAllIndexedDB();
          const current = { timestamp: nowIso(), data: getAllLocalStorage(), indexedDB: currentIdb };
          localStorage.setItem(PREV_KEY, JSON.stringify(current));
        }catch(e){ console.warn('[local-snapshot] backup before import failed', e); }

        // restore localStorage
        try{
          localStorage.clear();
          const entries = parsed.data || {};
          Object.keys(entries).forEach(k => {
            const v = entries[k];
            try{ localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); }
            catch(e){ console.warn('[local-snapshot] set key failed during import', k, e); }
          });
        }catch(e){ console.error('[local-snapshot] localStorage restore during import failed', e); alert('匯入失敗（localStorage）'); return false; }

        // restore IndexedDB
        if(parsed.indexedDB){
          const ok = await restoreIndexedDB(parsed.indexedDB);
          if(!ok){ alert('匯入時，還原 IndexedDB 遇到錯誤，請查看控制台。'); return false; }
        }

        alert('匯入完成，頁面將重新整理以套用變更');
        window.location.reload();
        return true;
      }catch(e){ console.error('[local-snapshot] import via API failed', e); alert('匯入失敗，請查看控制台'); return false; }
    },
    getSnapshot: ()=> JSON.parse(localStorage.getItem(SNAPSHOT_KEY) || 'null')
  };

  // initialize on DOMContentLoaded to avoid blocking initial parsing
  console.debug('[local-snapshot] script loaded, readyState:', document.readyState);
  try{ 
    if (document.readyState === 'loading') {
      console.debug('[local-snapshot] waiting for DOMContentLoaded');
      document.addEventListener('DOMContentLoaded', setupAutoSave);
    } else {
      console.debug('[local-snapshot] document already ready, calling setupAutoSave');
      setupAutoSave();
    }
    // Also try on load event for extra safety
    window.addEventListener('load', ()=> {
      console.debug('[local-snapshot] load event fired, calling setupAutoSave again');
      setupAutoSave();
    });
  }catch(e){ console.error('[local-snapshot] init failed', e); }

})();
