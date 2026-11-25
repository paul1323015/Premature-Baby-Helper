
    const Icon = ({ name, className = "w-5 h-5", ...props }) => {
      const icons = {
        sun: <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />,
        edit: <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />,
        mic: <g><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" /></g>,
        waveform: <g><path d="M3 10v4m4-8v12m4-15v18m4-14v10m4-7v4" /></g>,
        heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
        calendar: <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />,
        droplet: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 15.1 5 17 5 15a7 7 0 0 0 7 7z" />,
        clock: <g><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></g>,
        moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
        plus: <path d="M5 12h14m-7-7v14" />,
        check: <path d="M20 6 9 17l-5-5" />,
        x: <g><path d="M18 6 6 18" /><path d="M6 6l12 12" /></g>,
        send: <g><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></g>,
        trendingUp: <g><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></g>,
        eye: <g><path d="M2 12c2.5-4.5 5.8-7 10-7c4.2 0 7.5 2.5 10 7c-2.5 4.5-5.8 7-10 7c-4.2 0-7.5-2.5-10-7Z" /><circle cx="12" cy="12" r="3" /></g>,
        stethoscope: <g><path d="M4.8 2.3A.3.3 0 0 0 4.5 2.6V8A6 6 0 0 0 16.5 8V2.6a.3.3 0 0 0-.3-.3h-1.4a.3.3 0 0 0-.3.3V8a4 4 0 0 1-8 0V2.6a.3.3 0 0 0-.3-.3z" /><path d="M12 14v4a2 2 0 0 0 2 2h2a3 3 0 0 0 3-3V11" /></g>,
        sparkles: <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />,
        user: <g><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></g>,
        info: <g><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></g>,
        download: <g><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></g>,
        settings: <g><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.42 1.42-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2v-.48A1.7 1.7 0 0 0 12.34 18a1.7 1.7 0 0 0-1.88.34l-.06.06-1.42-1.42.06-.06A1.7 1.7 0 0 0 9.38 15a1.7 1.7 0 0 0-1.56-1.04H7.34v-2h.48A1.7 1.7 0 0 0 9.38 10.9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.42-1.42.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 13.38 6.38V5.9h2v.48A1.7 1.7 0 0 0 16.42 7.94a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.42 1.42-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.94 11.94h.48v2h-.48A1.7 1.7 0 0 0 19.4 15z" /></g>,
        upload: <g><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></g>,
        database: <g><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></g>,
        hardDrive: <g><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 14h18M7 17h.01M11 17h.01" /></g>,
        copy: <g><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></g>,
        trash: <g><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></g>,
        alertTriangle: <g><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></g>,
        refresh: <g><path d="M21.5 2v6h-6" /><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" /></g>,
        book: <g><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="15" y2="11" /></g>,
        tag: <g><path d="M12 2H2v10l11 11 10-10L12 2z" /><circle cx="7" cy="7" r="1.5" /></g>
      };

      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          {...props}
        >
          {icons[name] || <circle cx="12" cy="12" r="10" />}
        </svg>
      );
    };

    const WHO_GROWTH_DATA = {
      boy: {
        weight: [
          [-2, 1.2, 1.5, 2.0, 2.5, 3.0],
          [0, 2.5, 2.9, 3.3, 3.9, 4.4],
          [1, 3.4, 3.9, 4.5, 5.1, 5.8],
          [2, 4.3, 4.9, 5.6, 6.3, 7.1],
          [3, 5.0, 5.7, 6.4, 7.2, 8.0],
          [4, 5.6, 6.2, 7.0, 7.8, 8.7],
          [5, 6.0, 6.7, 7.5, 8.4, 9.3],
          [6, 6.4, 7.1, 7.9, 8.8, 9.8],
          [8, 6.9, 7.7, 8.6, 9.6, 10.7],
          [10, 7.4, 8.2, 9.2, 10.2, 11.4],
          [12, 7.8, 8.6, 9.6, 10.8, 12.0],
          [18, 8.8, 9.8, 10.9, 12.2, 13.7],
          [24, 9.7, 10.8, 12.2, 13.6, 15.3]
        ],
        height: [
          [-2, 38, 40, 43, 46, 48],
          [0, 46.3, 48.0, 49.9, 51.8, 53.4],
          [1, 50.8, 52.8, 54.7, 56.7, 58.6],
          [2, 54.4, 56.4, 58.4, 60.4, 62.4],
          [3, 57.3, 59.3, 61.4, 63.5, 65.5],
          [4, 59.7, 61.8, 63.9, 66.0, 68.0],
          [5, 61.7, 63.8, 65.9, 68.0, 70.1],
          [6, 63.3, 65.5, 67.6, 69.8, 71.9],
          [8, 66.2, 68.4, 70.6, 72.8, 75.0],
          [10, 68.7, 71.0, 73.3, 75.6, 77.9],
          [12, 71.0, 73.4, 75.7, 78.1, 80.5],
          [18, 76.9, 79.6, 82.3, 85.0, 87.7],
          [24, 81.7, 84.6, 87.8, 90.9, 93.9]
        ],
        head: [
          [-2, 27, 28.5, 30.5, 32.5, 34],
          [0, 31.9, 33.1, 34.5, 35.8, 37.0],
          [1, 34.9, 36.1, 37.3, 38.6, 39.7],
          [2, 36.9, 38.0, 39.1, 40.3, 41.3],
          [3, 38.3, 39.4, 40.5, 41.6, 42.6],
          [4, 39.4, 40.5, 41.6, 42.7, 43.7],
          [5, 40.3, 41.4, 42.5, 43.6, 44.6],
          [6, 41.0, 42.1, 43.3, 44.4, 45.4],
          [8, 42.2, 43.3, 44.5, 45.6, 46.6],
          [10, 43.1, 44.2, 45.4, 46.5, 47.6],
          [12, 43.8, 45.0, 46.1, 47.3, 48.3],
          [18, 45.3, 46.5, 47.7, 48.9, 50.0],
          [24, 46.3, 47.5, 48.7, 50.0, 51.1]
        ]
      },
      girl: {
        weight: [
          [-2, 1.1, 1.4, 1.9, 2.4, 2.9],
          [0, 2.4, 2.8, 3.2, 3.7, 4.2],
          [1, 3.2, 3.6, 4.2, 4.8, 5.5],
          [2, 3.9, 4.5, 5.1, 5.8, 6.6],
          [3, 4.5, 5.2, 5.8, 6.6, 7.5],
          [4, 5.0, 5.7, 6.4, 7.3, 8.2],
          [5, 5.4, 6.1, 6.9, 7.8, 8.8],
          [6, 5.7, 6.5, 7.3, 8.2, 9.3],
          [8, 6.3, 7.0, 7.9, 9.0, 10.2],
          [10, 6.7, 7.5, 8.5, 9.6, 10.9],
          [12, 7.0, 7.9, 8.9, 10.1, 11.5],
          [18, 8.1, 9.1, 10.2, 11.5, 13.0],
          [24, 9.0, 10.2, 11.5, 13.0, 14.8]
        ],
        height: [
          [-2, 37, 39, 42, 45, 47],
          [0, 45.4, 47.3, 49.1, 51.0, 52.7],
          [1, 49.8, 51.7, 53.7, 55.6, 57.6],
          [2, 53.0, 55.0, 57.1, 59.1, 61.1],
          [3, 55.6, 57.7, 59.8, 61.9, 64.0],
          [4, 57.8, 59.9, 62.1, 64.2, 66.4],
          [5, 59.6, 61.8, 64.0, 66.2, 68.5],
          [6, 61.2, 63.5, 65.7, 68.0, 70.3],
          [8, 64.0, 66.3, 68.7, 71.0, 73.4],
          [10, 66.4, 68.8, 71.2, 73.6, 76.1],
          [12, 68.5, 71.0, 73.5, 76.0, 78.5],
          [18, 74.9, 77.8, 80.7, 83.6, 86.5],
          [24, 80.0, 83.2, 86.4, 89.6, 92.9]
        ],
        head: [
          [-2, 26.5, 28, 30, 32, 33.5],
          [0, 31.5, 32.7, 33.9, 35.1, 36.2],
          [1, 34.2, 35.4, 36.5, 37.7, 38.8],
          [2, 36.0, 37.1, 38.3, 39.4, 40.5],
          [3, 37.3, 38.4, 39.5, 40.6, 41.7],
          [4, 38.3, 39.4, 40.6, 41.7, 42.8],
          [5, 39.2, 40.3, 41.5, 42.6, 43.7],
          [6, 39.9, 41.0, 42.2, 43.3, 44.4],
          [8, 41.0, 42.2, 43.4, 44.5, 45.6],
          [10, 41.9, 43.1, 44.3, 45.4, 46.5],
          [12, 42.6, 43.8, 45.0, 46.2, 47.3],
          [18, 44.2, 45.4, 46.6, 47.8, 48.9],
          [24, 45.2, 46.4, 47.6, 48.9, 50.0]
        ]
      }
    };

    const formatLocalDateTime = (date = new Date()) => {
      const pad = (value) => String(value).padStart(2, '0');
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
      return `${year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;
    };

    const formatLocalDateTimeForFileName = (date = new Date()) => {
      const pad = (value) => String(value).padStart(2, '0');
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
      return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
    };

    const getLocalDateString = (date = new Date()) => {
      const pad = (value) => String(value).padStart(2, '0');
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    };

    const parseDateOnly = (value) => {
      if (!value || typeof value !== 'string') return null;
      const trimmed = value.trim();
      const directMatch = trimmed.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
      if (directMatch) {
        return new Date(Number(directMatch[1]), Number(directMatch[2]) - 1, Number(directMatch[3]));
      }
      const compactMatch = trimmed.match(/^(\d{4})(\d{2})(\d{2})$/);
      if (compactMatch) {
        return new Date(Number(compactMatch[1]), Number(compactMatch[2]) - 1, Number(compactMatch[3]));
      }
      const parsed = new Date(trimmed);
      return isNaN(parsed.getTime()) ? null : parsed;
    };

    const formatAgeText = (value, prefix = '矯正', isDays = false) => {
      const totalDays = isDays ? value : Math.round(Math.abs(value) * 30.4375);
      const absDays = Math.abs(totalDays);
      if (absDays > 24 * 30.4375) return '已滿 2 歲';
      if (totalDays < 0) {
        return `預產期前 ${Math.max(0, Math.floor(absDays))} 天`;
      }
      const wholeMonths = Math.floor(absDays / 30.4375);
      const remainingDays = Math.floor(absDays % 30.4375);
      return `${prefix} ${wholeMonths} 個月 ${remainingDays} 天`;
    };

    const sanitizeDateStr = (str) => {
      if (!str || typeof str !== 'string') return getLocalDateString();
      let cleaned = str.trim();
      
      if (/^\d{6}-\d{2}-\d{2}$/.test(cleaned)) {
        const year = cleaned.slice(0, 4);
        const month = cleaned.slice(4, 6);
        const day = cleaned.slice(10, 12);
        cleaned = `${year}-${month}-${day}`;
      } else if (/^\d{6}/.test(cleaned)) {
        const year = cleaned.slice(0, 4);
        cleaned = year + cleaned.slice(6);
      }

      const dateObj = parseDateOnly(cleaned);
      if (!dateObj) {
        return getLocalDateString();
      }

      const yr = dateObj.getFullYear();
      if (yr > 2035 || yr < 2010) {
        const now = new Date();
        dateObj.setFullYear(now.getFullYear());
      }

      return getLocalDateString(dateObj);
    };

    const getCalendarAgeParts = (startDate, endDate) => {
      if (!startDate || !endDate || endDate < startDate) return { months: 0, days: 0 };
      let months = (endDate.getFullYear() - startDate.getFullYear()) * 12
        + endDate.getMonth() - startDate.getMonth();
      const getAnchorDate = (monthCount) => {
        const anchor = new Date(startDate.getFullYear(), startDate.getMonth() + monthCount, 1);
        const lastDay = new Date(anchor.getFullYear(), anchor.getMonth() + 1, 0).getDate();
        anchor.setDate(Math.min(startDate.getDate(), lastDay));
        return anchor;
      };
      let anchorDate = getAnchorDate(months);
      if (endDate < anchorDate) {
        months -= 1;
        anchorDate = getAnchorDate(months);
      }
      return {
        months: Math.max(0, months),
        days: Math.max(0, Math.floor((endDate - anchorDate) / (1000 * 60 * 60 * 24)))
      };
    };

    // Helper: calculate ages for a given measurement date
    const getAgesForDate = (measurementDateStr, birthDateStr, dueDateStr) => {
      const MS_PER_DAY = 1000 * 60 * 60 * 24;
      const measurementClean = measurementDateStr ? sanitizeDateStr(measurementDateStr) : getLocalDateString();
      const measurementDate = parseDateOnly(measurementClean);
      const birthClean = birthDateStr ? sanitizeDateStr(birthDateStr) : null;
      const dueClean = dueDateStr ? sanitizeDateStr(dueDateStr) : null;
      const birthDate = birthClean ? parseDateOnly(birthClean) : null;
      const dueDate = dueClean ? parseDateOnly(dueClean) : null;

      // Chronological age (measurement - birth)
      let chronoDays = 0;
      if (birthDate && measurementDate) {
        chronoDays = Math.floor((measurementDate - birthDate) / MS_PER_DAY);
        if (chronoDays < 0) chronoDays = 0;
      }

      // Corrected age (measurement - due)
      let correctedDays = 0;
      if (dueDate && measurementDate) {
        correctedDays = Math.floor((measurementDate - dueDate) / MS_PER_DAY);
      } else {
        correctedDays = chronoDays; // fallback
      }

      const chronoMonths = chronoDays / 30.4375;
      const correctedMonths = correctedDays / 30.4375;
      const chronoAgeParts = birthDate && measurementDate && chronoDays >= 0
        ? getCalendarAgeParts(birthDate, measurementDate)
        : { months: 0, days: 0 };
      const correctedAgeParts = dueDate && measurementDate && correctedDays >= 0
        ? getCalendarAgeParts(dueDate, measurementDate)
        : { months: 0, days: 0 };

      let correctedText = '';
      if (dueDate && correctedDays < 0) {
        const remainingWeeks = Math.ceil(Math.abs(correctedDays) / 7);
        correctedText = `尚未滿預產期 (差約 ${remainingWeeks} 週)`;
      } else if (correctedMonths > 24) {
        correctedText = '已滿 2 歲（建議參考常規兒童生長曲線）';
      } else {
        correctedText = `矯正 ${correctedAgeParts.months} 個月 ${correctedAgeParts.days} 天`;
      }

      return {
        measurementStr: measurementClean,
        measurementDate,
        chronoDays,
        chronoMonths,
        correctedDays,
        correctedMonths,
        chronoText: `實際 ${chronoAgeParts.months} 個月 ${chronoAgeParts.days} 天`,
        correctedText,
        isSet: !!birthDate && !!dueDate,
        inconsistent: typeof chronoDays === 'number' && typeof correctedDays === 'number' && chronoDays < correctedDays
      };
    };

    const calculateAges = (birthDateStr, dueDateStr) => {
      if (!birthDateStr || !dueDateStr) {
        return {
          chronoText: '出生日期未設定',
          correctedText: '請點擊「自訂/修改」設定生日與預產期',
          chronoMonths: 0,
          correctedMonths: 0,
          isSet: false
        };
      }

      const todayStr = getLocalDateString();
      const ages = getAgesForDate(todayStr, birthDateStr, dueDateStr);
      return {
        chronoText: ages.chronoText,
        correctedText: ages.correctedText,
        chronoMonths: ages.chronoMonths,
        correctedMonths: ages.correctedMonths,
        isSet: true
      };
    };

    const getAgeInDaysFromDates = (measurementDateStr, baseDateStr) => {
      const cleanM = sanitizeDateStr(measurementDateStr);
      const cleanBase = baseDateStr ? sanitizeDateStr(baseDateStr) : cleanM;
      const mDate = parseDateOnly(cleanM);
      const baseDate = parseDateOnly(cleanBase);
      if (!mDate || !baseDate) return 0;
      return Math.floor((mDate - baseDate) / (1000 * 60 * 60 * 24));
    };

    const getAgeInMonthsFromDates = (measurementDateStr, baseDateStr) => {
      return getAgeInDaysFromDates(measurementDateStr, baseDateStr) / 30.4375;
    };

    const getCorrectedAgeAtDate = (measurementDateStr, birthDateStr, dueDateStr) => {
      const ages = getAgesForDate(measurementDateStr, birthDateStr, dueDateStr);
      return ages.correctedMonths;
    };

    const getChronoAgeAtDate = (measurementDateStr, birthDateStr) => {
      const ages = getAgesForDate(measurementDateStr, birthDateStr, null);
      return ages.chronoMonths;
    };

    const PretermGrowthChart = ({ metric, gender, babyInfo, growthHistory, onAddGrowthRecord, onUpdateGrowthRecord, onDeleteGrowthRecord, onToggleGrowthRecordPlot, showPercentiles, setShowPercentiles, showZeroBaseline, setShowZeroBaseline, useChronoAxis, setUseChronoAxis, showToast }) => {
      const [showRecordModal, setShowRecordModal] = React.useState(false);
      const [editingRecordId, setEditingRecordId] = React.useState(null);
      const [recDate, setRecDate] = React.useState(getLocalDateString());
      const [recTime, setRecTime] = React.useState('');
      const [recWeight, setRecWeight] = React.useState(babyInfo.currentWeight || '');
      const [recHeight, setRecHeight] = React.useState(babyInfo.currentHeight || '');
      const [recHead, setRecHead] = React.useState(babyInfo.currentHead || '');

      const metricConfig = {
        weight: { label: '體重', unit: 'kg', minY: GrowthChartScale.METRIC_DOMAINS.weight.min, maxY: GrowthChartScale.METRIC_DOMAINS.weight.max, yTicks: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
        height: { label: '身長', unit: 'cm', minY: 35, maxY: 95, yTicks: [35, 45, 55, 65, 75, 85, 95] },
        head: { label: '頭圍', unit: 'cm', minY: 25, maxY: 52, yTicks: [25, 30, 35, 40, 45, 50] },
      }[metric];

      const refData = (WHO_GROWTH_DATA[gender] || WHO_GROWTH_DATA.boy)[metric];

      const width = 600;
      const height = 340;
      const padding = { top: 25, right: 35, bottom: 55, left: 45 };

      const MS_PER_DAY = 1000 * 60 * 60 * 24;
      const normalizeMetricValue = (value, metricName = metric) => {
        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) return null;
        // some weight entries were stored in grams; convert large numbers to kg
        return metricName === 'weight' && parsedValue > 30 ? parsedValue / 1000 : parsedValue;
      };
      const babyPoints = growthHistory.filter(item => item.plotOnChart !== false).map(item => {
        // parse numeric value; if empty or invalid, skip plotting
        const val = normalizeMetricValue(item[metric]);
        if (val === null) return null;

        // Parse dates explicitly to avoid sanitize fallback to "today"
        const measurementStr = sanitizeDateStr(item.date);
        const measurementDate = parseDateOnly(measurementStr);

        const birthStr = babyInfo.birthDate ? sanitizeDateStr(babyInfo.birthDate) : null;
        const dueStr = babyInfo.dueDate ? sanitizeDateStr(babyInfo.dueDate) : null;
        const birthDate = birthStr ? parseDateOnly(birthStr) : null;
        const dueDate = dueStr ? parseDateOnly(dueStr) : null;

        if (!measurementDate) return null; // invalid measurement date

        // Use centralized helper to compute ages for this measurement date
        const ages = getAgesForDate(measurementStr, babyInfo.birthDate, babyInfo.dueDate);
        const chronoAgeDays = ages.chronoDays;
        const correctedAgeDays = ages.correctedDays;
        const chronoAgeM = ages.chronoMonths;
        const correctedAgeM = ages.correctedMonths;

        if (ages.inconsistent) {
          // Log inconsistency but DO NOT swap values; keep computed results and surface warning in console
          console.warn('Age inconsistency detected for measurement', measurementStr, '— chronoDays < correctedDays. Please verify birthDate/dueDate inputs.');
        }

        const targetAgeDays = useChronoAxis ? chronoAgeDays : correctedAgeDays;
        const targetAgeM = targetAgeDays / 30.4375;

        return {
          id: item.id,
          date: measurementStr,
          correctedMonths: correctedAgeM,
          chronoMonths: chronoAgeM,
          correctedDays: correctedAgeDays,
          chronoDays: chronoAgeDays,
          plotMonths: targetAgeM,
          value: val,
          isOver2Years: targetAgeM > 24
        };
      }).filter(p => p !== null && !isNaN(p.value));

      const babyMonths = babyPoints.map(p => p.plotMonths);
      const minBabyMonth = babyMonths.length > 0 ? Math.min(...babyMonths) : 0;
      const maxBabyMonth = babyMonths.length > 0 ? Math.max(...babyMonths) : 12;

      const minX = Math.min(-2, Math.floor(minBabyMonth - 0.5));
      const maxX = Math.max(36, Math.ceil(Math.min(36, maxBabyMonth + 1)));

      const xScale = (month) => padding.left + ((month - minX) / (maxX - minX)) * (width - padding.left - padding.right);
      const yScale = (val) => GrowthChartScale.mapValueToY(val, { min: metricConfig.minY, max: metricConfig.maxY }, height, padding);

      // Determine whether the 0-month baseline (出生 or 預產期) is within the plotted X range
      const zeroInRange = 0 >= minX && 0 <= maxX;
      const zeroX = xScale(0);

      babyPoints.forEach(p => {
        p.x = xScale(p.plotMonths);
        p.y = yScale(p.value);
      });

      // Debug enable check: show debug button only when ?debug=true or localStorage.debug === 'true'
      let debugEnabled = false;
      try {
        if (typeof window !== 'undefined') {
          const qp = new URLSearchParams(window.location.search);
          debugEnabled = qp.get('debug') === 'true' || localStorage.getItem('debug') === 'true';
        }
      } catch (e) {
        debugEnabled = false;
      }

      // Prepare debug rows for optional manual export (button-triggered)
      const debugRows = babyPoints.map(p => ({
        Date: p.date,
        'Chrono Days': p.chronoDays,
        'Chrono Months': Number(p.chronoMonths.toFixed(3)),
        'Corrected Days': p.correctedDays,
        'Corrected Months': Number(p.correctedMonths.toFixed(3)),
        'Plot Months': Number(p.plotMonths.toFixed(3)),
        'Pixel X': Number(p.x.toFixed(1))
      }));

      babyPoints.sort((a, b) => a.plotMonths - b.plotMonths);

      const percentileIndices = [1, 2, 3, 4, 5];
      const percentileLabels = ['3%', '15%', '50%', '85%', '97%'];
      const percentileColors = ['#cbd5e1', '#94a3b8', '#3b82f6', '#94a3b8', '#cbd5e1'];

      const monthTicks = [];
      const step = (maxX - minX) > 16 ? 2 : 1;
      for (let m = minX; m <= maxX; m += step) {
        monthTicks.push(m);
      }
      if (monthTicks[monthTicks.length - 1] !== maxX) {
        monthTicks.push(maxX);
      }

      const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!recDate) return;

        const cleanDate = sanitizeDateStr(recDate);
        if (editingRecordId !== null) {
          const editingRecord = growthHistory.find(item => item.id === editingRecordId);
          if (!editingRecord) return;
          onUpdateGrowthRecord({
            ...editingRecord,
            date: cleanDate,
            time: recTime,
            weight: recWeight,
            height: recHeight,
            head: recHead
          });
          setEditingRecordId(null);
          setShowRecordModal(false);
          return;
        }

        onAddGrowthRecord({
          id: Date.now(),
          date: cleanDate,
          time: recTime,
          weight: recWeight,
          height: recHeight,
          head: recHead,
          plotOnChart: window.confirm('是否要將這筆測量資料繪製在生長圖表上？')
        });
        setShowRecordModal(false);
      };

      const handleSetRecordDateTimeToNow = () => {
        const now = new Date();
        const pad = (value) => String(value).padStart(2, '0');
        setRecDate(getLocalDateString(now));
        setRecTime(`${pad(now.getHours())}:${pad(now.getMinutes())}`);
      };

      return (
        <div className="space-y-3">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed flex flex-col gap-2 shadow-sm sm:flex-row sm:items-start">
            <div className="flex items-start gap-2 flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <span className="font-bold block text-amber-800">⚡️ 生長曲線設定：</span>
                <span className="block">預設以【預產期】為 0 個月對齊矯正月齡；如需查看實際出生月齡，可點擊上方按鈕切換觀看。</span>
                {useChronoAxis && (
                  <span className="block text-amber-700 font-bold">⚠️ 實際月齡模式僅供月齡趨勢查看，不作 WHO 百分位判讀。</span>
                )}
                {!useChronoAxis && (
                  <span className="block text-amber-700 font-bold">⚠️ 矯正月齡模式較適合早產兒生長趨勢參考；百分位結果僅供參考，實際判讀請諮詢兒科或新生兒科醫師。</span>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                const nextUseChronoAxis = !useChronoAxis;
                const saved = setUseChronoAxis(nextUseChronoAxis);
                showToast(saved
                  ? nextUseChronoAxis
                    ? '✅ 生長曲線已改以實際月齡顯示；此模式僅供趨勢查看，不作 WHO 百分位判讀。'
                    : '✅ 生長曲線已改以矯正月齡顯示；百分位結果僅供參考，請諮詢醫師判讀。'
                  : '⚠️ 月齡模式已切換，但設定無法儲存。');
              }}
              className="w-full px-2.5 py-2 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-lg text-[11px] sm:text-xs font-bold transition-colors border border-amber-300 shadow-sm sm:w-auto"
              title={useChronoAxis ? '目前顯示：實際月齡。點擊切換為 矯正月齡。' : '目前顯示：矯正月齡。點擊切換為 實際月齡。'}
            >
              {useChronoAxis ? '顯示：實際月齡（點擊切換為 矯正月齡）' : '顯示：矯正月齡（點擊切換為 實際月齡）'}
            </button>
          </div>

          <div className="relative bg-white rounded-2xl border p-3 shadow-inner overflow-hidden">
            <div className="flex flex-col gap-2 mb-2 px-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5 flex-wrap">
                <span>{gender === 'boy' ? '👦 男寶' : '👧 女寶'} WHO {metricConfig.label}生長曲線圖</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    const nextShowPercentiles = !showPercentiles;
                    const saved = setShowPercentiles(nextShowPercentiles);
                    showToast(saved
                      ? `✅ 百分位曲線已${nextShowPercentiles ? '顯示' : '隱藏'}`
                      : '⚠️ 百分位曲線已切換，但設定無法儲存。');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold flex items-center gap-1.5 transition-colors border shadow-sm ${
                    showPercentiles
                      ? 'bg-amber-100 border-amber-300 text-amber-900 hover:bg-amber-200'
                      : 'bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200'
                  }`}
                  title="切換顯示/隱藏背景 WHO 百分位參考虛線"
                >
                  <span className={`w-2 h-2 rounded-full ${showPercentiles ? 'bg-amber-500' : 'bg-slate-400'}`}></span>
                  <span className="whitespace-nowrap">百分位曲線：{showPercentiles ? '顯示' : '隱藏'}</span>
                </button>
                <button
                  onClick={() => {
                    const nextShowZeroBaseline = !showZeroBaseline;
                    const saved = setShowZeroBaseline(nextShowZeroBaseline);
                    showToast(saved
                      ? `✅ 基準線已${nextShowZeroBaseline ? '顯示' : '隱藏'}`
                      : '⚠️ 基準線已切換，但設定無法儲存。');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold flex items-center gap-1.5 transition-colors border shadow-sm ${
                    showZeroBaseline
                      ? 'bg-amber-100 border-amber-300 text-amber-900 hover:bg-amber-200'
                      : 'bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200'
                  }`}
                  title="切換顯示/隱藏 0 個月基準線與標示"
                >
                  <span className={`w-2 h-2 rounded-full ${showZeroBaseline ? 'bg-amber-500' : 'bg-slate-400'}`}></span>
                  <span className="whitespace-nowrap">基準線：{showZeroBaseline ? '顯示' : '隱藏'}</span>
                </button>
                {debugEnabled && (
                  <button
                    onClick={() => {
                      try {
                        console.groupCollapsed(`PretermGrowthChart Debug - X axis = ${useChronoAxis ? 'Chronological (實際)' : 'Corrected (矯正)'} mode`);
                        console.table(debugRows);
                        console.groupEnd();
                      } catch (e) {}
                    }}
                    className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
                    title="在 Console 中輸出 Debug 表格（只於按下時執行）"
                  >
                    <span>輸出 Debug</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    setEditingRecordId(null);
                    setRecDate(getLocalDateString());
                    setRecTime('');
                    setRecWeight(babyInfo.currentWeight || '');
                    setRecHeight(babyInfo.currentHeight || '');
                    setRecHead(babyInfo.currentHead || '');
                    setShowRecordModal(true);
                  }}
                  className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[11px] sm:text-xs font-bold flex items-center gap-1 shadow-sm transition-colors"
                >
                  <Icon name="plus" className="w-3.5 h-3.5" />
                  <span className="whitespace-nowrap">新增測量點</span>
                </button>
              </div>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto text-xs select-none">
              {metricConfig.yTicks.map((yVal) => (
                <g key={`y-${yVal}`}>
                  <line x1={padding.left} y1={yScale(yVal)} x2={width - padding.right} y2={yScale(yVal)} stroke="#f1f5f9" strokeWidth="1" />
                  <text x={padding.left - 6} y={yScale(yVal) + 4} textAnchor="end" className="fill-slate-400 font-mono text-[10px]">{yVal} {metricConfig.unit}</text>
                </g>
              ))}

              {monthTicks.map((mVal) => {
                const xPos = xScale(mVal);
                const isZero = mVal === 0;
                const emphasizeZero = isZero && showZeroBaseline;
                return (
                  <g key={`x-${mVal}`}>
                    <line x1={xPos} y1={padding.top} x2={xPos} y2={height - padding.bottom} stroke={emphasizeZero ? "#f59e0b" : "#f1f5f9"} strokeWidth={emphasizeZero ? "2" : "1"} strokeDasharray={emphasizeZero ? "3,3" : "none"} />
                    <line x1={xPos} y1={height - padding.bottom} x2={xPos} y2={height - padding.bottom + 5} stroke={emphasizeZero ? "#d97706" : "#cbd5e1"} strokeWidth={emphasizeZero ? "2" : "1"} />
                    <text x={xPos} y={height - padding.bottom + 17} textAnchor="middle" className={`font-mono text-[9px] ${emphasizeZero ? 'fill-amber-600 font-extrabold text-[10px]' : 'fill-slate-500 font-medium'}`}>
                      {isZero ? '0個月' : `${mVal}個`}
                    </text>
                  </g>
                );
              })}

              {/* Emphasize the 0-month baseline (出生/預產期) with a prominent reference line and labels */}
              {zeroInRange && showZeroBaseline && (
                <g key="zero-ref">
                  <line x1={zeroX} y1={padding.top} x2={zeroX} y2={height - padding.bottom} stroke="#d97706" strokeWidth="3" strokeDasharray="6,3" opacity="0.95" />
                  <circle cx={zeroX} cy={height - padding.bottom} r="5" className="fill-amber-600 stroke-white stroke-1" />
                  <text x={zeroX} y={padding.top - 6} textAnchor="middle" className="fill-amber-700 font-bold text-[10px]">基準 0 個月</text>
                </g>
              )}

              <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="#94a3b8" strokeWidth="1.5" />
              <text x={width - padding.right} y={padding.top - 8} textAnchor="end" className="fill-slate-600 font-bold text-[10px]">
                X 軸：{useChronoAxis ? '實際月齡' : '矯正月齡'}（月）
              </text>
              <text x={12} y={height / 2} textAnchor="middle" transform={`rotate(-90 12 ${height / 2})`} className="fill-slate-600 font-bold text-[10px]">
                Y 軸：{metricConfig.label}（{metricConfig.unit}）
              </text>

              {showPercentiles && percentileIndices.map((pIndex, i) => {
                const pathD = refData.map((d, idx) => `${idx === 0 ? 'M' : 'L'} ${xScale(d[0])} ${yScale(d[pIndex])}`).join(' ');
                const lastPt = refData[refData.length - 1];
                return (
                  <g key={`p-${i}`}>
                    <path d={pathD} fill="none" stroke={percentileColors[i]} strokeWidth={pIndex === 3 ? "2" : "1"} strokeDasharray={pIndex === 3 ? "none" : "2,2"} />
                    {lastPt[0] <= maxX && (
                      <text x={xScale(lastPt[0]) + 4} y={yScale(lastPt[pIndex]) + 3} className="fill-slate-400 text-[8px] font-bold">{percentileLabels[i]}</text>
                    )}
                  </g>
                );
              })}

              {babyPoints.map((p, i) => {
                const ages = getAgesForDate(p.date, babyInfo.birthDate, babyInfo.dueDate);
                const correctedAgeCalculatedLabel = ages.correctedText;
                const actualAgeCalculatedLabel = ages.chronoText;
                const labelText = useChronoAxis ? actualAgeCalculatedLabel : correctedAgeCalculatedLabel;
                const compactLabel = labelText
                  .replace(/^矯正\s*/, '')
                  .replace(/^實際\s*/, '')
                  .replace(/個月/g, '月')
                  .replace(/天/g, '天');
                // Move the small orange date label above the bottom axis to avoid overlapping ticks
                const labelY = height - padding.bottom - 10;
                const labelRectX = p.x - 28;
                const labelRectWidth = 56;

                return (
                  <g key={`vline-${p.id || i}`}>
                    <line x1={p.x} y1={p.y} x2={p.x} y2={height - padding.bottom} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
                    <circle cx={p.x} cy={height - padding.bottom} r="4" className="fill-amber-500 stroke-white stroke-2" />
                    <rect x={labelRectX} y={labelY - 9} width={labelRectWidth} height="13" rx="4" className="fill-amber-500 shadow-sm" />
                    <text x={p.x} y={labelY - 1} textAnchor="middle" className="fill-white font-extrabold text-[7.5px] font-mono">{compactLabel}</text>
                  </g>
                );
              })}

              {babyPoints.length > 1 && (
                <path d={babyPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')} fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
              )}

              {babyPoints.map((p, i) => (
                <g key={`pt-${p.id || i}`} className="group cursor-pointer">
                  <circle cx={p.x} cy={p.y} r="7" className="fill-amber-500 stroke-white stroke-2 shadow-lg hover:r-9 transition-all" />
                  <rect x={p.x - 26} y={p.y - 22} width="52" height="15" rx="4" className="fill-slate-900/80 shadow" />
                  <text x={p.x} y={p.y - 11} textAnchor="middle" className="fill-amber-300 font-extrabold text-[10px]">{p.value} {metricConfig.unit}</text>
                </g>
              ))}

              <text x={width / 2} y={height - 8} textAnchor="middle" className="fill-amber-700 text-[11px] font-bold">
                {useChronoAxis ? '實際出生月齡刻度' : '矯正月齡刻度（以預產期為 0 個月對齊 X 軸）'}
              </text>
            </svg>

            {babyPoints.length === 0 && (
              <div className="p-3 text-center text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl my-2">
                ⚠️ 目前歷史列表中無【{metricConfig.label}】數據點，點擊上方「新增測量點」登記{metricConfig.label}。
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl border p-3 shadow-sm space-y-2">
            <h4 className="font-bold text-xs text-slate-700 flex justify-between items-center">
              <span>歷史測量列表</span>
              <span className="text-[11px] text-slate-400 font-normal">共 {growthHistory.length} 筆紀錄</span>
            </h4>
            {growthHistory.length === 0 ? (
              <div className="p-3 text-center text-xs text-slate-400 border rounded-xl bg-slate-50">
                尚無紀錄，點擊上方「新增測量點」登記身高、體重與頭圍。
              </div>
            ) : (
              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1 text-xs">
                {growthHistory.map((rec) => {
                  const cleanDate = sanitizeDateStr(rec.date);
                  const ages = getAgesForDate(cleanDate, babyInfo.birthDate, babyInfo.dueDate);

                  return (
                    <div key={rec.id} className="p-2 border rounded-xl flex items-center justify-between bg-slate-50/70 hover:bg-amber-50/50 transition-colors">
                      <div>
                        <div className="font-bold text-slate-800 flex items-center gap-2">
                          <span>{cleanDate}{rec.time ? ` ${rec.time}` : ''}</span>
                          <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold">
                            {ages.isSet ? `${ages.correctedText} / ${ages.chronoText}` : '尚未設定生日與預產期'}
                          </span>
                          {ages.inconsistent && (
                            <span className="ml-2 inline-flex items-center gap-1 text-red-600 font-bold text-[11px]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"/></svg>
                              資料異常
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 space-x-2">
                          {rec.weight && <span>體重: <b className="text-slate-700">{normalizeMetricValue(rec.weight, 'weight') ?? rec.weight} kg</b></span>}
                          {rec.height && <span>身長: <b className="text-slate-700">{rec.height} cm</b></span>}
                          {rec.head && <span>頭圍: <b className="text-slate-700">{rec.head} cm</b></span>}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setEditingRecordId(rec.id);
                          setRecDate(cleanDate);
                          setRecTime(rec.time || '');
                          setRecWeight(rec.weight || '');
                          setRecHeight(rec.height || '');
                          setRecHead(rec.head || '');
                          setShowRecordModal(true);
                        }}
                        className="p-1 text-slate-400 hover:text-amber-600 transition-colors"
                        title="編輯紀錄"
                        aria-label="編輯紀錄"
                      >
                        <Icon name="edit" className="w-4 h-4" />
                      </button>
                      <button onClick={() => onToggleGrowthRecordPlot(rec.id)} className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-colors ${rec.plotOnChart === false ? 'bg-slate-200 text-slate-500' : 'bg-amber-100 text-amber-700'}`} title={rec.plotOnChart === false ? '繪製此測量點' : '隱藏此測量點'}>
                        {rec.plotOnChart === false ? '繪製此點' : '隱藏此點'}
                      </button>
                      <button onClick={() => onDeleteGrowthRecord(rec.id)} className="p-1 text-slate-400 hover:text-red-500 transition-colors" title="刪除紀錄">
                        <Icon name="trash" className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {showRecordModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700">{editingRecordId !== null ? '編輯生長數據紀錄' : '新增生長數據紀錄'}</h3>
                  <button onClick={() => { setShowRecordModal(false); setEditingRecordId(null); }} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-bold">測量日期</label>
                      <button
                        type="button"
                        onClick={handleSetRecordDateTimeToNow}
                        className="text-amber-600 hover:text-amber-800 font-bold"
                        title="將日期與時間更新為目前時間，儲存後才會套用"
                      >
                        設為現在
                      </button>
                    </div>
                    <input
                      type="date"
                      required
                      min="2020-01-01"
                      max="2030-12-31"
                      value={recDate}
                      onChange={(e) => setRecDate(e.target.value)}
                      className="w-full p-2 border rounded-xl"
                    />
                    {babyInfo.dueDate && (
                      <div className="text-[11px] text-amber-600 mt-1 font-medium">
                        對應矯正月齡：{getAgesForDate(recDate, babyInfo.birthDate, babyInfo.dueDate).correctedText}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="font-bold block mb-1">測量時間（選填）</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="例如：15:38"
                      pattern="(?:[01][0-9]|2[0-3]):[0-5][0-9]"
                      title="請輸入 24 小時制時間，例如 15:38"
                      value={recTime}
                      onChange={(e) => setRecTime(e.target.value)}
                      className="w-full p-2 border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="font-bold block mb-1">體重(kg)</label>
                      <input type="number" min="0" step="0.01" placeholder="3.2" value={recWeight} onChange={(e) => setRecWeight(e.target.value !== '' && Number(e.target.value) < 0 ? '0' : e.target.value)} className="w-full p-2 border rounded-xl" />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">身長(cm)</label>
                      <input type="number" min="0" step="0.1" placeholder="48" value={recHeight} onChange={(e) => setRecHeight(e.target.value !== '' && Number(e.target.value) < 0 ? '0' : e.target.value)} className="w-full p-2 border rounded-xl" />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">頭圍(cm)</label>
                      <input type="number" min="0" step="0.1" placeholder="34" value={recHead} onChange={(e) => setRecHead(e.target.value !== '' && Number(e.target.value) < 0 ? '0' : e.target.value)} className="w-full p-2 border rounded-xl" />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => { setShowRecordModal(false); setEditingRecordId(null); }} className="flex-1 py-2 text-xs border rounded-xl text-slate-500 font-bold">取消</button>
                    <button type="submit" className="flex-1 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md">{editingRecordId !== null ? '儲存修改' : '儲存數據'}</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    };

    function App() {
      const defaultNoteCategories = ['回診提問', '成長大事記', '其他備忘'];
      const [isNightMode, setIsNightMode] = React.useState(() => {
        try {
          return localStorage.getItem('sun_baby_night_mode_v1') === 'true';
        } catch (error) {
          console.error('Failed to read night mode preference:', error);
          return false;
        }
      });
      const [activeTab, setActiveTab] = React.useState('dashboard');
      const [showHelpModal, setShowHelpModal] = React.useState(false);
      const [showBackupModal, setShowBackupModal] = React.useState(false);
      const [showDataMgmtModal, setShowDataMgmtModal] = React.useState(false);
      const [showStorageManagerModal, setShowStorageManagerModal] = React.useState(false);
      const [storageUsage, setStorageUsage] = React.useState({ bytes: 0, percent: 0 });
      const storageWarningLevelRef = React.useRef(0);
      const [showNotesModal, setShowNotesModal] = React.useState(false);
      const [isExporting, setIsExporting] = React.useState(false);
      const [showPdfSettingsModal, setShowPdfSettingsModal] = React.useState(false);
      const [showPdfPasswordModal, setShowPdfPasswordModal] = React.useState(false);
      const [pdfPassword, setPdfPassword] = React.useState('');
      const [pdfPasswordConfirm, setPdfPasswordConfirm] = React.useState('');
      const [showPdfPassword, setShowPdfPassword] = React.useState(false);
      const [showPdfPasswordConfirm, setShowPdfPasswordConfirm] = React.useState(false);
      const [pdfPasswordError, setPdfPasswordError] = React.useState('');
      const DEFAULT_PDF_EXPORT_OPTIONS = {
        profile: true,
        growthRecords: true,
        growthChart: true,
        careLogs: true,
        doctor: true,
        notes: true,
        encryptPdf: false,
        showExportTime: true,
        range: 'all',
        startDate: '',
        endDate: ''
      };
      const normalizePdfExportOptions = options => {
        const normalized = {
          ...DEFAULT_PDF_EXPORT_OPTIONS,
          ...Object.fromEntries(Object.entries(options)
            .filter(([key]) => Object.prototype.hasOwnProperty.call(DEFAULT_PDF_EXPORT_OPTIONS, key)))
        };
        if (typeof options.growth === 'boolean') {
          if (!Object.prototype.hasOwnProperty.call(options, 'growthRecords')) normalized.growthRecords = options.growth;
          if (!Object.prototype.hasOwnProperty.call(options, 'growthChart')) normalized.growthChart = options.growth;
        }
        return normalized;
      };
      const [pdfExportOptions, setPdfExportOptions] = React.useState(() => {
        try {
          const saved = localStorage.getItem('sun_baby_pdf_export_options_v1');
          if (!saved) return DEFAULT_PDF_EXPORT_OPTIONS;
          const parsed = JSON.parse(saved);
          if (!parsed || typeof parsed !== 'object') return DEFAULT_PDF_EXPORT_OPTIONS;
          return normalizePdfExportOptions(parsed);
        } catch (error) {
          console.error('Failed to load PDF export settings:', error);
          return DEFAULT_PDF_EXPORT_OPTIONS;
        }
      });

      const [pdfExportDraft, setPdfExportDraft] = React.useState({ ...pdfExportOptions });

      const loadSavedPdfExportOptions = () => {
        try {
          const saved = localStorage.getItem('sun_baby_pdf_export_options_v1');
          if (!saved) return { ...DEFAULT_PDF_EXPORT_OPTIONS };
          const parsed = JSON.parse(saved);
          if (!parsed || typeof parsed !== 'object') return { ...DEFAULT_PDF_EXPORT_OPTIONS };
          return normalizePdfExportOptions(parsed);
        } catch (error) {
          console.error('Failed to reload PDF export settings:', error);
          return { ...DEFAULT_PDF_EXPORT_OPTIONS };
        }
      };

      const openPdfSettingsModal = () => {
        const savedOptions = loadSavedPdfExportOptions();
        setPdfExportOptions(savedOptions);
        setPdfExportDraft({ ...savedOptions });
        setShowPdfSettingsModal(true);
      };

      const closePdfSettingsModal = () => {
        const savedOptions = loadSavedPdfExportOptions();
        setPdfExportOptions(savedOptions);
        setPdfExportDraft({ ...savedOptions });
        setShowPdfSettingsModal(false);
      };

      const [toastMsg, setToastMsg] = React.useState('');
      const [isInfoToast, setIsInfoToast] = React.useState(false);
      const toastTimeoutRef = React.useRef(null);

      const showToast = (msg, type = 'default') => {
              setIsInfoToast(type === 'info');
              setToastMsg(msg);
              if (toastTimeoutRef.current !== null) {
                clearTimeout(toastTimeoutRef.current);
              }
              toastTimeoutRef.current = setTimeout(() => {
                setToastMsg('');
                toastTimeoutRef.current = null;
              }, 3000);
            };

      React.useEffect(() => () => {
        if (toastTimeoutRef.current !== null) {
          clearTimeout(toastTimeoutRef.current);
        }
      }, []);

      const [selectedMetric, setSelectedMetric] = React.useState('weight');
      const [selectedGender, setSelectedGender] = React.useState('boy');
      const DEFAULT_GROWTH_CHART_OPTIONS = {
        showPercentiles: true,
        showZeroBaseline: true,
        useChronoAxis: false
      };
      const [growthChartOptions, setGrowthChartOptions] = React.useState(() => {
        try {
          const saved = localStorage.getItem('sun_baby_growth_chart_options_v1');
          if (!saved) return DEFAULT_GROWTH_CHART_OPTIONS;
          const parsed = JSON.parse(saved);
          if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return DEFAULT_GROWTH_CHART_OPTIONS;
          return {
            showPercentiles: typeof parsed.showPercentiles === 'boolean' ? parsed.showPercentiles : true,
            showZeroBaseline: typeof parsed.showZeroBaseline === 'boolean' ? parsed.showZeroBaseline : true,
            useChronoAxis: typeof parsed.useChronoAxis === 'boolean' ? parsed.useChronoAxis : false
          };
        } catch (error) {
          console.error('Failed to load growth chart settings:', error);
          return DEFAULT_GROWTH_CHART_OPTIONS;
        }
      });
      const { showPercentiles, showZeroBaseline, useChronoAxis } = growthChartOptions;
      const saveGrowthChartOptions = options => {
        try {
          localStorage.setItem('sun_baby_growth_chart_options_v1', JSON.stringify(options));
          return true;
        } catch (error) {
          console.error('Failed to save growth chart settings:', error);
          return false;
        }
      };
      const setShowPercentiles = value => {
        const nextOptions = { ...growthChartOptions, showPercentiles: value };
        setGrowthChartOptions(nextOptions);
        return saveGrowthChartOptions(nextOptions);
      };
      const setShowZeroBaseline = value => {
        const nextOptions = { ...growthChartOptions, showZeroBaseline: value };
        setGrowthChartOptions(nextOptions);
        return saveGrowthChartOptions(nextOptions);
      };
      const setUseChronoAxis = value => {
        const nextOptions = { ...growthChartOptions, useChronoAxis: value };
        setGrowthChartOptions(nextOptions);
        return saveGrowthChartOptions(nextOptions);
      };

      const [babyInfo, setBabyInfo] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_profile_v5');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (parsed.birthDate) parsed.birthDate = sanitizeDateStr(parsed.birthDate);
            if (parsed.dueDate) parsed.dueDate = sanitizeDateStr(parsed.dueDate);

            // Validate birthDate <= dueDate. If reversed, attempt to fix by swapping and persist the correction.
            try {
              const pb = parsed.birthDate ? parseDateOnly(parsed.birthDate) : null;
              const pd = parsed.dueDate ? parseDateOnly(parsed.dueDate) : null;
              if (pb && pd && pb.getTime() > pd.getTime()) {
                // Detected inconsistent stored profile where birthDate is later than dueDate.
                // Swap to correct order assuming values were entered reversed.
                const corrected = { ...parsed, birthDate: parsed.dueDate, dueDate: parsed.birthDate };
                try {
                  localStorage.setItem('sun_baby_profile_v5', JSON.stringify(corrected));
                  // set a transient flag so we can notify user after mount
                  if (typeof window !== 'undefined') window.__sun_profile_fix_notice = '🔧 已自動修正寶寶出生日期與預產期的順序（偵測到顛倒）';
                } catch (e) {}
                return corrected;
              }
            } catch (e) {
              // ignore parse errors and fall back to parsed
            }

            return parsed;
          } catch (e) {}
        }
        return {
          name: '',
          gender: 'boy',
          gestationalWeeks: '',
          birthWeight: '',
          birthDate: '',
          dueDate: '',
          currentWeight: '',
          currentHeight: '',
          currentHead: '',
          targetDailyMilk: '',
        };
      });

      const [growthHistory, setGrowthHistory] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_growth_history_v1');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
              return parsed.map(item => ({
                ...item,
                date: sanitizeDateStr(item.date)
              }));
            }
          } catch (e) {}
        }
        return [];
      });

      const [logs, setLogs] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_logs_v1');
        if (saved) {
          try { return JSON.parse(saved); } catch (e) {}
        }
        return [];
      });
      const [careLogStartDate, setCareLogStartDate] = React.useState('');
      const [careLogEndDate, setCareLogEndDate] = React.useState('');
      const [careLogCategory, setCareLogCategory] = React.useState('all');
      const careLogTypeLabels = { feeding: '餵奶', diaper: '尿布', solidFood: '副食品', vaccination: '疫苗' };
      const careLogTypeIcons = { feeding: '🍼', diaper: '👶', solidFood: '🥣', vaccination: '💉' };
      const formatCareLogDetail = log => {
        const detail = log.detail || '';
        if (log.type === 'solidFood' || log.type === 'vaccination') {
          return detail.replace(/^(?:🥣|💉)\s*/, '') || '—';
        }
        if (log.type === 'feeding' || log.type === 'diaper') return detail;
        return detail || '—';
      };

      const isValidCareReminder = reminder => (
        reminder
        && typeof reminder.id === 'string'
        && typeof reminder.title === 'string'
        && typeof reminder.dueAt === 'string'
        && Number.isFinite(new Date(reminder.dueAt).getTime())
      );
      const getCareReminderRepeatInterval = reminder => (
        Number.isInteger(reminder.repeatIntervalMinutes)
        && reminder.repeatIntervalMinutes >= 1
        && reminder.repeatIntervalMinutes <= 1440
          ? reminder.repeatIntervalMinutes
          : null
      );
      const getCareReminderNotificationTime = reminder => {
        const nextRepeatAt = new Date(reminder.nextRepeatToastAt || '').getTime();
        return getCareReminderRepeatInterval(reminder) !== null && Number.isFinite(nextRepeatAt)
          ? nextRepeatAt
          : new Date(reminder.dueAt).getTime();
      };
      const [careReminders, setCareReminders] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_care_reminders_v1');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) return parsed.filter(isValidCareReminder);
          } catch (e) {}
        }
        return [];
      });
      const [showReminderForm, setShowReminderForm] = React.useState(false);
      const [reminderTitle, setReminderTitle] = React.useState('');
      const [editingReminderId, setEditingReminderId] = React.useState(null);
      const [repeatReminder, setRepeatReminder] = React.useState(false);
      const [repeatIntervalValue, setRepeatIntervalValue] = React.useState('1');
      const [repeatIntervalUnit, setRepeatIntervalUnit] = React.useState('hours');
      const resetReminderRepeatSettings = () => {
        setRepeatReminder(false);
        setRepeatIntervalValue('1');
        setRepeatIntervalUnit('hours');
      };
      const formatReminderDateTimeInput = date => {
        const pad = value => String(value).padStart(2, '0');
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
      };
      const getReminderDefaultDateTime = () => {
        const date = new Date(Date.now() + 60 * 60 * 1000);
        return formatReminderDateTimeInput(date);
      };
      const [reminderDateTime, setReminderDateTime] = React.useState(getReminderDefaultDateTime);
      const [reminderNow, setReminderNow] = React.useState(Date.now());
      const notifiedReminderIdsRef = React.useRef(new Set());
      const repeatedReminderToastTimesRef = React.useRef(new Map());

      const [vaccinationLogs, setVaccinationLogs] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_vaccination_logs_v1');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) return parsed;
          } catch (e) {}
        }
        return [];
      });
      const [solidFoodLogs, setSolidFoodLogs] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_solid_food_logs_v1');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) return parsed;
          } catch (e) {}
        }
        return [];
      });
      const getSolidFoodRecordForLog = log => log.type === 'solidFood' ? solidFoodLogs.find(record => (
        record.id === log.sourceId
        || (record.date === log.date && log.detail?.includes(record.foodName))
      )) : null;
      const getVaccinationRecordForLog = log => log.type === 'vaccination' ? vaccinationLogs.find(record => (
        record.id === log.sourceId
        || (record.date === log.date && log.detail?.includes(record.vaccineName))
      )) : null;
      const formatCareLogSupplement = log => {
        const solidFoodRecord = getSolidFoodRecordForLog(log);
        const vaccinationRecord = getVaccinationRecordForLog(log);
        const details = [];
        if (solidFoodRecord) {
          const allergySeverity = solidFoodRecord.allergySeverity === 'mild'
            ? '輕微'
            : solidFoodRecord.allergySeverity === 'severe' ? '嚴重' : '';
          const reactions = Array.isArray(solidFoodRecord.reactions)
            ? solidFoodRecord.reactions.join('、')
            : solidFoodRecord.reactions || '';
          if (allergySeverity) details.push(`過敏等級：${allergySeverity}`);
          if (reactions) details.push(`反應：${reactions}`);
        }
        if (vaccinationRecord) {
          if (vaccinationRecord.location) details.push(`接種地點：${vaccinationRecord.location}`);
          const sideEffects = Array.isArray(vaccinationRecord.sideEffects)
            ? vaccinationRecord.sideEffects.join('、')
            : vaccinationRecord.sideEffects || '';
          if (sideEffects) details.push(`副作用：${sideEffects}`);
        }
        const notes = log.notes || solidFoodRecord?.notes || vaccinationRecord?.notes;
        if (notes) details.push(`備註：${notes}`);
        return details.join('\n');
      };
      const parseVaccinationDose = dose => {
        const value = String(dose || '').trim();
        const match = value.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
        if (!match) return { dose: value, doseUnit: 'custom', customDoseUnit: '' };
        const doseUnit = match[2].trim();
        const normalizedDoseUnit = doseUnit.toLowerCase();
        const knownDoseUnits = {
          ml: 'mL',
          mg: 'mg',
          'μg': 'mcg',
          'µg': 'mcg',
          mcg: 'mcg',
          iu: 'IU',
          '滴': '滴'
        };
        const matchedDoseUnit = knownDoseUnits[normalizedDoseUnit];
        return {
          dose: match[1],
          doseUnit: matchedDoseUnit || 'custom',
          customDoseUnit: matchedDoseUnit ? '' : doseUnit
        };
      };
      const vaccinationDoseUnitOptions = [
        { value: 'mL', label: 'mL（毫升）' },
        { value: 'mg', label: 'mg（毫克）' },
        { value: 'mcg', label: 'mcg（微克）' },
        { value: 'IU', label: 'IU（國際單位）' },
        { value: '滴', label: '滴' },
        { value: 'custom', label: '自訂' }
      ];
      const formatVaccinationDose = form => {
        const dose = String(form.dose || '').trim();
        if (!dose) return '';
        const doseUnit = form.doseUnit === 'custom' ? String(form.customDoseUnit || '').trim() : form.doseUnit;
        return doseUnit ? `${dose} ${doseUnit}` : dose;
      };
      const formatCareLogAmount = log => {
        const solidFoodRecord = getSolidFoodRecordForLog(log);
        const vaccinationRecord = getVaccinationRecordForLog(log);
        if (vaccinationRecord && Object.prototype.hasOwnProperty.call(vaccinationRecord, 'dose')) {
          return String(vaccinationRecord.dose || '').replace(/[μµ]g/gi, 'mcg');
        }
        if (log.amount) return String(log.amount);
        if (solidFoodRecord?.amount) return `${solidFoodRecord.amount}ml/湯匙`;
        if (vaccinationRecord?.doseNumber) return `${vaccinationRecord.doseNumber} 劑`;
        const legacyDose = String(log.detail || '').match(/第\s*(\d+)\s*劑/);
        return legacyDose ? `${legacyDose[1]} 劑` : '';
      };

      const [doctorNotes, setDoctorNotes] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_doctor_notes_v1');
        if (saved) {
          try { return JSON.parse(saved); } catch (e) {}
        }
        return [];
      });
      const [doctorNoteFilterStartDate, setDoctorNoteFilterStartDate] = React.useState('');
      const [doctorNoteFilterEndDate, setDoctorNoteFilterEndDate] = React.useState('');
      const [doctorNoteFilterCategory, setDoctorNoteFilterCategory] = React.useState('all');
      const [doctorNoteSearchQuery, setDoctorNoteSearchQuery] = React.useState('');
      const [doctorVisitSummary, setDoctorVisitSummary] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_doctor_visit_summary_v1');
        return typeof saved === 'string' ? saved : '';
      });
      const [doctorVisitSummaryDraft, setDoctorVisitSummaryDraft] = React.useState(doctorVisitSummary);
      const [isEditingDoctorVisitSummary, setIsEditingDoctorVisitSummary] = React.useState(false);

      const [notes, setNotes] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_notes_v1');
        if (saved) {
          try { return JSON.parse(saved); } catch (e) {}
        }
        return [];
      });
      const [noteCategories, setNoteCategories] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_note_categories_v1');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
              return [...new Set([
                ...parsed,
                ...notes.map(note => note.category || note.tag)
              ].filter(category => typeof category === 'string' && category.trim() && category !== '全部' && category !== '未分類'))];
            }
          } catch (e) {}
        }
        return [...new Set([
          ...defaultNoteCategories,
          ...notes.map(note => note.category || note.tag)
        ].filter(category => typeof category === 'string' && category.trim() && category !== '全部' && category !== '未分類'))];
      });

      // Notebook Form & Editing States
      const [noteCategory, setNoteCategory] = React.useState(() => noteCategories.includes('回診提問') ? '回診提問' : '未分類');
      const [isCustomNoteCategory, setIsCustomNoteCategory] = React.useState(false);
      const [showNoteCategoryManager, setShowNoteCategoryManager] = React.useState(false);
      const [newNoteCategory, setNewNoteCategory] = React.useState('');
      const [editingNoteCategory, setEditingNoteCategory] = React.useState(null);
      const [editedNoteCategory, setEditedNoteCategory] = React.useState('');
      const [noteTitle, setNoteTitle] = React.useState('');
      const [noteContent, setNoteContent] = React.useState('');
      const [noteVoiceField, setNoteVoiceField] = React.useState(null);
      const [noteVoiceTargetField, setNoteVoiceTargetField] = React.useState('content');
      const [noteMicTestStatus, setNoteMicTestStatus] = React.useState('idle');
      const [noteMicTestAudioUrl, setNoteMicTestAudioUrl] = React.useState('');
      const [noteMicTestError, setNoteMicTestError] = React.useState('');
      const newNoteCategoryInputRef = React.useRef(null);
      const noteCategoryInputRef = React.useRef(null);
      const noteTitleInputRef = React.useRef(null);
      const noteContentInputRef = React.useRef(null);
      const noteSearchInputRef = React.useRef(null);
      const noteVoiceRecognitionRef = React.useRef(null);
      const noteVoiceFieldRef = React.useRef(null);
      const noteVoiceTargetFieldRef = React.useRef('content');
      const noteVoiceSelectionRef = React.useRef(null);
      const noteMicTestStreamRef = React.useRef(null);
      const noteMicTestRecorderRef = React.useRef(null);
      const noteMicTestTimeoutRef = React.useRef(null);
      const noteMicTestChunksRef = React.useRef([]);
      const noteMicTestAudioUrlRef = React.useRef('');
      const noteMicTestRequestIdRef = React.useRef(0);
      const [filterNoteCategory, setFilterNoteCategory] = React.useState('全部');
      const [noteSearchQuery, setNoteSearchQuery] = React.useState('');
      const [editingNoteId, setEditingNoteId] = React.useState(null);

      const defaultMilestones = [
        { id: 1, text: '俯臥（趴著）時能短暫抬起頭部 45 度 (矯正 1-2 個月)', done: false },
        { id: 2, text: '眼神能跟隨視線移動或關注黑白卡 10 秒 (矯正 1-2 個月)', done: false },
        { id: 3, text: '聽到大人溫柔說話會停止哭泣或發出咕嚕聲 (矯正 2 個月)', done: false },
        { id: 4, text: '手掌能由緊握逐漸放鬆，雙手偶爾碰觸 (矯正 2-3 個月)', done: false },
      ];
      const [milestones, setMilestones] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_milestones_v1');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) return parsed;
          } catch (e) {}
        }
        return defaultMilestones;
      });
      const [showMilestoneModal, setShowMilestoneModal] = React.useState(false);
      const [editingMilestoneId, setEditingMilestoneId] = React.useState(null);
      const [milestoneText, setMilestoneText] = React.useState('');

      const [showEditProfileModal, setShowEditProfileModal] = React.useState(false);
      const [editFormData, setEditFormData] = React.useState({ ...babyInfo });
      const [pastedJson, setPastedJson] = React.useState('');
      const LEGACY_BACKUP_STORAGE_KEYS = [
        'sun_baby_recent_auto_backups_v1',
        'sun_baby_advanced_restore_enabled_v1',
        'sun_baby_emergency_snapshot_v1'
      ];
      const APP_STORAGE_KEYS = [
        'sun_baby_profile_v5',
        'sun_baby_growth_history_v1',
        'sun_baby_logs_v1',
        'sun_baby_care_reminders_v1',
        'sun_baby_vaccination_logs_v1',
        'sun_baby_solid_food_logs_v1',
        'sun_baby_doctor_notes_v1',
        'sun_baby_doctor_visit_summary_v1',
        'sun_baby_notes_v1',
        'sun_baby_note_categories_v1',
        'sun_baby_milestones_v1',
        'sun_baby_night_mode_v1',
        'sun_baby_pdf_export_options_v1',
        'sun_baby_growth_chart_options_v1',
        ...LEGACY_BACKUP_STORAGE_KEYS
      ];
      const STORAGE_LIMIT_BYTES = 5 * 1024 * 1024;
      const STORAGE_WARNING_BYTES = Math.round(STORAGE_LIMIT_BYTES * 0.8);

      const calculateStorageUsage = () => {
        let bytes = 0;
        for (let index = 0; index < localStorage.length; index += 1) {
          const key = localStorage.key(index);
          if (!key) continue;
          const value = localStorage.getItem(key) || '';
          bytes += key.length + value.length;
        }
        const percent = Math.min(100, (bytes / STORAGE_LIMIT_BYTES) * 100);
        return { bytes, percent: percent > 0 && percent < 0.01 ? '< 0.01' : percent.toFixed(2) };
      };

      const formatStorageUsage = (bytes) => `${(bytes / 1024).toFixed(2)} KB`;

      const refreshStorageUsage = () => {
        const usage = calculateStorageUsage();
        setStorageUsage(usage);
        return usage;
      };

      const handleRefreshStorageUsage = () => {
        console.log("LocalStorage 重新計算中...");
        const usage = refreshStorageUsage();
        const size = Number((usage.bytes / 1024).toFixed(2));
        console.log("計算完成，當前大小為：", size);
        showToast(`✅ 已重新計算，本機儲存空間目前使用約 ${formatStorageUsage(usage.bytes)}。`);
        return usage;
      };

      const ensureStorageCapacityForNewData = () => {
        const usage = refreshStorageUsage();
        if (usage.bytes < STORAGE_LIMIT_BYTES) return true;
        setShowStorageManagerModal(true);
        showToast('⚠️ 儲存空間已滿，新增資料已暫停');
        return false;
      };

      const [showStorageRecoveryModal, setShowStorageRecoveryModal] = React.useState(false);
      const [storageRecoveryMeta, setStorageRecoveryMeta] = React.useState({
        title: '儲存空間不足',
        message: '本地儲存空間不足，資料還原已暫停，請先清理或另行備份。',
        backupData: null
      });

      React.useEffect(() => {
        LEGACY_BACKUP_STORAGE_KEYS.forEach((key) => {
          try { localStorage.removeItem(key); } catch (error) { console.error('Failed to remove legacy storage key:', key, error); }
        });
      }, []);

      React.useEffect(() => {
        const usage = refreshStorageUsage();
        const nextLevel = usage.bytes >= STORAGE_LIMIT_BYTES ? 2 : usage.bytes >= STORAGE_WARNING_BYTES ? 1 : 0;
        if (nextLevel > storageWarningLevelRef.current && nextLevel > 0) {
          setShowStorageManagerModal(true);
        }
        storageWarningLevelRef.current = nextLevel;
      }, [babyInfo, growthHistory, logs, doctorNotes, doctorVisitSummary, notes, noteCategories, milestones]);

      const clearAppStorageData = () => {
        APP_STORAGE_KEYS.forEach((key) => {
          try { localStorage.removeItem(key); } catch (error) { console.error('Failed to remove key:', key, error); }
        });
        setIsNightMode(false);
        setPdfExportOptions(DEFAULT_PDF_EXPORT_OPTIONS);
        setPdfExportDraft(DEFAULT_PDF_EXPORT_OPTIONS);
        setGrowthChartOptions(DEFAULT_GROWTH_CHART_OPTIONS);
      };

      const safeSetStorageItem = (key, value) => {
        try {
          localStorage.setItem(key, value);
          return true;
        } catch (error) {
          console.error('Storage quota exceeded while saving', key, error);
          setStorageRecoveryMeta({
            title: '本機儲存空間不足',
            message: '目前空間不足，資料已暫停儲存以避免頁面當機。請先清理本機資料，或先下載備份檔案再繼續。',
            backupData: createBackupPayload()
          });
          setShowStorageRecoveryModal(true);
          return false;
        }
      };

      const handleStorageRecoveryChoice = (choice) => {
        setShowStorageRecoveryModal(false);

        if (choice === 'clear') {
          clearAppStorageData();
          showToast('🧹 已清理本機儲存空間，請重新嘗試。');
          return;
        }

        const backupData = createBackupPayload();
        const fileName = `巴掌小太陽_緊急備份_${(babyInfo.name || '寶寶').replace(/[\\/:*?\"<>|]/g, '').trim() || '寶寶'}_${formatLocalDateTimeForFileName()}.json`;
        downloadBackupPayload('緊急備份', fileName);
        showToast('💾 已下載緊急備份，請先保留備份後再重新操作。');
      };

      React.useEffect(() => {
        if (babyInfo.gender) setSelectedGender(babyInfo.gender);
      }, [babyInfo.gender]);

      // If initializer set a transient fix notice, show it once after mount
      React.useEffect(() => {
        try {
          if (typeof window !== 'undefined' && window.__sun_profile_fix_notice) {
            showToast(window.__sun_profile_fix_notice);
            try { delete window.__sun_profile_fix_notice; } catch (e) { window.__sun_profile_fix_notice = null; }
          }
        } catch (e) {}
      }, []);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_profile_v5', JSON.stringify(babyInfo));
      }, [babyInfo]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_growth_history_v1', JSON.stringify(growthHistory));
      }, [growthHistory]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_logs_v1', JSON.stringify(logs));
      }, [logs]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_care_reminders_v1', JSON.stringify(careReminders));
      }, [careReminders]);

      React.useEffect(() => {
        const refreshReminderNow = () => setReminderNow(Date.now());
        const handleVisibilityChange = () => {
          if (document.visibilityState === 'visible') refreshReminderNow();
        };
        const timer = setInterval(refreshReminderNow, 30000);
        window.addEventListener('focus', refreshReminderNow);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
          clearInterval(timer);
          window.removeEventListener('focus', refreshReminderNow);
          document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
      }, []);

      React.useEffect(() => {
        const dueReminders = careReminders.filter(reminder => {
          const notificationTime = getCareReminderNotificationTime(reminder);
          const repeatInterval = getCareReminderRepeatInterval(reminder);
          const alreadyNotified = repeatInterval !== null
            ? repeatedReminderToastTimesRef.current.get(reminder.id) === notificationTime
            : notifiedReminderIdsRef.current.has(reminder.id);
          return notificationTime <= reminderNow && !alreadyNotified;
        });
        dueReminders.forEach(reminder => {
          const repeatInterval = getCareReminderRepeatInterval(reminder);
          let nextRepeatToastAt = null;
          if (repeatInterval === null) {
            notifiedReminderIdsRef.current.add(reminder.id);
          } else {
            const notificationTime = getCareReminderNotificationTime(reminder);
            repeatedReminderToastTimesRef.current.set(reminder.id, notificationTime);
            nextRepeatToastAt = new Date(Date.now() + repeatInterval * 60 * 1000).toISOString();
            setCareReminders(prevReminders => prevReminders.map(item => (
              item.id === reminder.id ? { ...item, nextRepeatToastAt } : item
            )));
          }
          if (repeatInterval !== null) {
            showToast(`☀️ 照護提醒：${reminder.title || '照護提醒'}。下一次提醒時間：${formatReminderDateTimeInput(new Date(nextRepeatToastAt)).replace('T', ' ')}`);
          } else {
            showToast(`☀️ 照護提醒：${reminder.title || '照護提醒'}`);
          }
        });
      }, [careReminders, reminderNow]);

      React.useEffect(() => {
        const nextDueAt = careReminders
          .filter(reminder => (
            getCareReminderRepeatInterval(reminder) !== null
            || !notifiedReminderIdsRef.current.has(reminder.id)
          ))
          .map(getCareReminderNotificationTime)
          .filter(timestamp => Number.isFinite(timestamp) && timestamp > reminderNow)
          .sort((a, b) => a - b)[0];
        if (nextDueAt === undefined) return;
        const delay = Math.max(0, Math.min(nextDueAt - Date.now(), 2147483647));
        const timer = setTimeout(() => setReminderNow(Date.now()), delay);
        return () => clearTimeout(timer);
      }, [careReminders, reminderNow]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_doctor_notes_v1', JSON.stringify(doctorNotes));
      }, [doctorNotes]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_doctor_visit_summary_v1', doctorVisitSummary);
      }, [doctorVisitSummary]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_notes_v1', JSON.stringify(notes));
      }, [notes]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_note_categories_v1', JSON.stringify(noteCategories));
      }, [noteCategories]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_milestones_v1', JSON.stringify(milestones));
      }, [milestones]);

      React.useEffect(() => {
        let hasFixed = false;
        const cleaned = growthHistory.map(item => {
          const sanitized = sanitizeDateStr(item.date);
          if (sanitized !== item.date) {
            hasFixed = true;
          }
          return { ...item, date: sanitized };
        });
        if (hasFixed) {
          setGrowthHistory(cleaned);
          showToast('🔧 已自動修正歷史數據中的日期格式！');
        }
      }, []);

      const buildBackupFileName = (label = '備份') => {
        const safeName = (babyInfo.name || '寶寶').replace(/[\\/:*?"<>|]/g, '').trim() || '寶寶';
        return `巴掌小太陽_${label}_${safeName}_${formatLocalDateTimeForFileName()}.json`;
      };

      const createBackupPayload = () => ({
        appId: 'sun-baby-helper',
        version: '1.3',
        exportTimestamp: new Date().toISOString(),
        babyInfo,
        growthHistory,
        logs,
        careReminders,
        vaccinationLogs,
        solidFoodLogs,
        nightMode: isNightMode,
        doctorNotes,
        doctorVisitSummary,
        milestones,
        notes,
        noteCategories,
        notebook: notes,
        notebookNotes: notes,
        doctorQuestions: doctorNotes,
        pdfExportOptions,
        growthChartOptions
      });

      const isBackupRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
      const isBackupRecordArray = value => Array.isArray(value) && value.every(isBackupRecord);

      const isSupportedBackup = backupData => {
        if (!isBackupRecord(backupData)) return false;

        const hasOwn = key => Object.prototype.hasOwnProperty.call(backupData, key);
        const hasCurrentIdentity = backupData.appId === 'sun-baby-helper' && backupData.version === '1.3';
        const legacySignatureFields = [
          'careReminders',
          'vaccinationLogs',
          'solidFoodLogs',
          'doctorNotes',
          'doctorQuestions',
          'doctorVisitSummary',
          'milestones',
          'noteCategories',
          'notebookNotes'
        ];
        const hasLegacyIdentity = !hasOwn('appId')
          && typeof backupData.version === 'string'
          && typeof backupData.exportTimestamp === 'string'
          && isBackupRecord(backupData.babyInfo)
          && isBackupRecordArray(backupData.growthHistory)
          && isBackupRecordArray(backupData.logs)
          && legacySignatureFields.some(hasOwn);
        if (!hasCurrentIdentity && !hasLegacyIdentity) return false;
        if (!isBackupRecord(backupData.babyInfo)
          || !isBackupRecordArray(backupData.growthHistory)
          || !isBackupRecordArray(backupData.logs)) return false;

        const recordArrayFields = [
          'careReminders',
          'vaccinationLogs',
          'solidFoodLogs',
          'doctorNotes',
          'doctorQuestions',
          'milestones',
          'notes',
          'notebook',
          'notebookNotes'
        ];
        if (recordArrayFields.some(key => hasOwn(key) && !isBackupRecordArray(backupData[key]))) return false;
        if (hasOwn('noteCategories') && (!Array.isArray(backupData.noteCategories)
          || !backupData.noteCategories.every(category => typeof category === 'string'))) return false;
        if (hasOwn('nightMode') && typeof backupData.nightMode !== 'boolean') return false;
        if (hasOwn('doctorVisitSummary') && typeof backupData.doctorVisitSummary !== 'string') return false;
        if (hasOwn('pdfExportOptions')) {
          const options = backupData.pdfExportOptions;
          if (!isBackupRecord(options)) return false;
          if (['profile', 'growth', 'growthRecords', 'growthChart', 'careLogs', 'doctor', 'notes', 'encryptPdf', 'showExportTime']
            .some(key => Object.prototype.hasOwnProperty.call(options, key) && typeof options[key] !== 'boolean')) return false;
          if (Object.prototype.hasOwnProperty.call(options, 'range')
            && !['all', '7', '30', '90', 'custom'].includes(options.range)) return false;
          if (['startDate', 'endDate']
            .some(key => Object.prototype.hasOwnProperty.call(options, key) && typeof options[key] !== 'string')) return false;
        }
        if (hasOwn('growthChartOptions')) {
          const options = backupData.growthChartOptions;
          if (!isBackupRecord(options)) return false;
          if (['showPercentiles', 'showZeroBaseline', 'useChronoAxis']
            .some(key => Object.prototype.hasOwnProperty.call(options, key) && typeof options[key] !== 'boolean')) return false;
        }
        return true;
      };

      const createBackupStorageEntries = backupData => {
        const entries = [];
        const addEntry = (key, value) => entries.push([key, typeof value === 'string' ? value : JSON.stringify(value)]);
        const hasOwn = key => Object.prototype.hasOwnProperty.call(backupData, key);
        const cleanedProfile = { ...backupData.babyInfo };
        if (cleanedProfile.birthDate) cleanedProfile.birthDate = sanitizeDateStr(cleanedProfile.birthDate);
        if (cleanedProfile.dueDate) cleanedProfile.dueDate = sanitizeDateStr(cleanedProfile.dueDate);

        addEntry('sun_baby_profile_v5', cleanedProfile);
        addEntry('sun_baby_growth_history_v1', backupData.growthHistory.map(item => ({
          ...item,
          date: sanitizeDateStr(item.date)
        })));
        addEntry('sun_baby_logs_v1', backupData.logs);
        addEntry('sun_baby_care_reminders_v1', Array.isArray(backupData.careReminders)
          ? backupData.careReminders.filter(isValidCareReminder)
          : []);
        addEntry('sun_baby_doctor_visit_summary_v1', typeof backupData.doctorVisitSummary === 'string' ? backupData.doctorVisitSummary : '');
        if (isBackupRecord(backupData.pdfExportOptions)) {
          addEntry('sun_baby_pdf_export_options_v1', normalizePdfExportOptions(backupData.pdfExportOptions));
        }
        if (isBackupRecord(backupData.growthChartOptions)) {
          addEntry('sun_baby_growth_chart_options_v1', {
            ...DEFAULT_GROWTH_CHART_OPTIONS,
            ...Object.fromEntries(Object.entries(backupData.growthChartOptions)
              .filter(([key]) => Object.prototype.hasOwnProperty.call(DEFAULT_GROWTH_CHART_OPTIONS, key)))
          });
        }

        if (typeof backupData.nightMode === 'boolean') {
          addEntry('sun_baby_night_mode_v1', String(backupData.nightMode));
        }
        if (Array.isArray(backupData.vaccinationLogs)) {
          addEntry('sun_baby_vaccination_logs_v1', backupData.vaccinationLogs);
        }
        if (Array.isArray(backupData.solidFoodLogs)) {
          addEntry('sun_baby_solid_food_logs_v1', backupData.solidFoodLogs);
        }
        if (Array.isArray(backupData.doctorNotes) || Array.isArray(backupData.doctorQuestions)
          || hasOwn('doctorNotes') || hasOwn('doctorQuestions')) {
          addEntry('sun_baby_doctor_notes_v1', Array.isArray(backupData.doctorNotes) ? backupData.doctorNotes : backupData.doctorQuestions || []);
        }
        if (Array.isArray(backupData.milestones)) {
          addEntry('sun_baby_milestones_v1', backupData.milestones);
        }

        const importedNotebookNotes = Array.isArray(backupData.notes)
          ? backupData.notes
          : Array.isArray(backupData.notebook)
            ? backupData.notebook
            : Array.isArray(backupData.notebookNotes)
              ? backupData.notebookNotes
              : [];
        const hasNotebookData = Array.isArray(backupData.notes) || Array.isArray(backupData.notebook)
          || Array.isArray(backupData.notebookNotes) || hasOwn('notes')
          || hasOwn('notebook') || hasOwn('notebookNotes');
        if (hasNotebookData) {
          addEntry('sun_baby_notes_v1', importedNotebookNotes);
        }
        if (Array.isArray(backupData.noteCategories)) {
          addEntry('sun_baby_note_categories_v1', backupData.noteCategories.filter(category => category.trim() && category !== '全部' && category !== '未分類'));
        } else if (hasNotebookData) {
          addEntry('sun_baby_note_categories_v1', [...new Set([
            ...defaultNoteCategories,
            ...importedNotebookNotes.map(note => note.category || note.tag).filter(category => typeof category === 'string' && category.trim() && category !== '全部' && category !== '未分類')
          ])]);
        }

        return entries;
      };

      const ensureStorageCapacityForBackupImport = entries => {
        const currentBytes = calculateStorageUsage().bytes;
        let replacedBytes = 0;
        let importedBytes = 0;
        entries.forEach(([key, value]) => {
          const currentValue = localStorage.getItem(key);
          if (currentValue !== null) replacedBytes += key.length + currentValue.length;
          importedBytes += key.length + value.length;
        });

        const projectedBytes = currentBytes - replacedBytes + importedBytes;
        if (projectedBytes >= STORAGE_LIMIT_BYTES) return false;

        const additionalBytes = projectedBytes - currentBytes;
        if (additionalBytes <= 0) return true;

        let probeKey = '\u0000';
        while (localStorage.getItem(probeKey) !== null) probeKey += '\u0000';
        try {
          localStorage.setItem(probeKey, 'x'.repeat(Math.max(0, additionalBytes - probeKey.length)));
          return true;
        } catch (error) {
          console.error('Storage quota exceeded while checking backup import capacity:', error);
          return false;
        } finally {
          try {
            localStorage.removeItem(probeKey);
          } catch (error) {
            console.error('Failed to remove backup import capacity check:', error);
          }
        }
      };

      const persistBackupStorageEntries = entries => {
        const updates = entries.map(([key, value]) => ({
          key,
          value,
          previousValue: localStorage.getItem(key)
        }));
        updates.sort((first, second) => {
          const firstGrowth = first.value.length - (first.previousValue === null ? 0 : first.previousValue.length);
          const secondGrowth = second.value.length - (second.previousValue === null ? 0 : second.previousValue.length);
          return firstGrowth - secondGrowth;
        });

        const writtenUpdates = [];
        try {
          updates.forEach(update => {
            localStorage.setItem(update.key, update.value);
            writtenUpdates.push(update);
          });
          return true;
        } catch (error) {
          console.error('Failed to persist backup import:', error);
          let rollbackFailed = false;
          writtenUpdates.reverse().forEach(update => {
            try {
              if (update.previousValue === null) {
                localStorage.removeItem(update.key);
              } else {
                localStorage.setItem(update.key, update.previousValue);
              }
            } catch (rollbackError) {
              rollbackFailed = true;
              console.error('Failed to roll back backup import storage:', update.key, rollbackError);
            }
          });
          if (rollbackFailed) {
            console.error('Backup import storage rollback was incomplete.');
          }
          return false;
        }
      };

      const downloadBackupPayload = (label = '備份', customFileName = null) => {
        const backupData = createBackupPayload();
        const jsonString = JSON.stringify(backupData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = customFileName || buildBackupFileName(label);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        return backupData;
      };

      const handleExportBackupJSON = () => {
        downloadBackupPayload('備份');
        showToast('✅ 備份檔案已成功下載！');
      };

      const handleCopyBackupToClipboard = () => {
        const backupData = createBackupPayload();
        const jsonString = JSON.stringify(backupData, null, 2);

        const textarea = document.createElement('textarea');
        textarea.value = jsonString;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('📋 備份文字已複製至剪貼簿！');
      };

      const handleImportBackupObj = (backupData) => {
        if (!isSupportedBackup(backupData)) {
          showToast('❌ 這不是巴掌小太陽的有效備份，或備份內容不完整。請確認備份檔案後再試一次。');
          return;
        }

        const storageEntries = createBackupStorageEntries(backupData);
        const backupTimestamp = backupData.exportTimestamp ? new Date(backupData.exportTimestamp) : null;
        const isValidDate = backupTimestamp && !isNaN(backupTimestamp.getTime());
        const backupTimeText = isValidDate
          ? formatLocalDateTime(backupTimestamp)
          : '未知時間';

        const restoreMessage = `即將載入還原檔案（建立時間：${backupTimeText}）。\n\n此動作會覆蓋目前所有資料，請確認是否繼續？`;
        const confirmed = window.confirm(restoreMessage);
        if (!confirmed) {
          setPastedJson('');
          showToast('⚠️ 已取消還原，未覆蓋目前資料。');
          return;
        }

        if (!ensureStorageCapacityForBackupImport(storageEntries)
          || !persistBackupStorageEntries(storageEntries)) {
          setPastedJson('');
          refreshStorageUsage();
          setShowStorageManagerModal(true);
          showToast('⚠️ 本機儲存空間不足或寫入失敗，還原已暫停。');
          return;
        }

        if (typeof backupData.nightMode === 'boolean') {
          setIsNightMode(backupData.nightMode);
        }
        if (isBackupRecord(backupData.pdfExportOptions)) {
          const restoredPdfExportOptions = normalizePdfExportOptions(backupData.pdfExportOptions);
          setPdfExportOptions(restoredPdfExportOptions);
          setPdfExportDraft({ ...restoredPdfExportOptions });
        }
        if (isBackupRecord(backupData.growthChartOptions)) {
          const restoredGrowthChartOptions = {
            ...DEFAULT_GROWTH_CHART_OPTIONS,
            ...Object.fromEntries(Object.entries(backupData.growthChartOptions)
              .filter(([key]) => Object.prototype.hasOwnProperty.call(DEFAULT_GROWTH_CHART_OPTIONS, key)))
          };
          setGrowthChartOptions(restoredGrowthChartOptions);
        }

        if (backupData.babyInfo) {
          const cleanedProfile = { ...backupData.babyInfo };
          if (cleanedProfile.birthDate) cleanedProfile.birthDate = sanitizeDateStr(cleanedProfile.birthDate);
          if (cleanedProfile.dueDate) cleanedProfile.dueDate = sanitizeDateStr(cleanedProfile.dueDate);
          setBabyInfo(cleanedProfile);
        }

        if (Array.isArray(backupData.growthHistory)) {
          const cleanedHistory = backupData.growthHistory.map(item => ({
            ...item,
            date: sanitizeDateStr(item.date)
          }));
          setGrowthHistory(cleanedHistory);
        }

        if (Array.isArray(backupData.logs)) setLogs(backupData.logs);
        const restoredCareReminders = Array.isArray(backupData.careReminders)
          ? backupData.careReminders.filter(isValidCareReminder)
          : [];
        notifiedReminderIdsRef.current.clear();
        repeatedReminderToastTimesRef.current.clear();
        const dueReminderIds = restoredCareReminders
          .filter(reminder => new Date(reminder.dueAt).getTime() <= Date.now())
          .map(reminder => reminder.id);
        dueReminderIds.forEach(id => notifiedReminderIdsRef.current.add(id));
        setCareReminders(restoredCareReminders);
        if (Array.isArray(backupData.vaccinationLogs)) {
          setVaccinationLogs(backupData.vaccinationLogs);
        }
        if (Array.isArray(backupData.solidFoodLogs)) {
          setSolidFoodLogs(backupData.solidFoodLogs);
        }

        if (Array.isArray(backupData.doctorNotes) || Array.isArray(backupData.doctorQuestions)) {
          setDoctorNotes(Array.isArray(backupData.doctorNotes) ? backupData.doctorNotes : backupData.doctorQuestions);
        } else if (Object.prototype.hasOwnProperty.call(backupData, 'doctorNotes') || Object.prototype.hasOwnProperty.call(backupData, 'doctorQuestions')) {
          setDoctorNotes([]);
        }
        const restoredDoctorVisitSummary = typeof backupData.doctorVisitSummary === 'string' ? backupData.doctorVisitSummary : '';
        setDoctorVisitSummary(restoredDoctorVisitSummary);
        setDoctorVisitSummaryDraft(restoredDoctorVisitSummary);
        setIsEditingDoctorVisitSummary(false);

        if (Array.isArray(backupData.milestones)) setMilestones(backupData.milestones);

        const importedNotebookNotes = Array.isArray(backupData.notes)
          ? backupData.notes
          : Array.isArray(backupData.notebook)
            ? backupData.notebook
            : Array.isArray(backupData.notebookNotes)
              ? backupData.notebookNotes
              : [];

        if (Array.isArray(backupData.notes) || Array.isArray(backupData.notebook) || Array.isArray(backupData.notebookNotes) || Object.prototype.hasOwnProperty.call(backupData, 'notes') || Object.prototype.hasOwnProperty.call(backupData, 'notebook') || Object.prototype.hasOwnProperty.call(backupData, 'notebookNotes')) {
          setNotes(importedNotebookNotes);
        }
        if (Array.isArray(backupData.noteCategories)) {
          setNoteCategories(backupData.noteCategories.filter(category => typeof category === 'string' && category.trim() && category !== '全部' && category !== '未分類'));
        } else if (Array.isArray(backupData.notes) || Array.isArray(backupData.notebook) || Array.isArray(backupData.notebookNotes)) {
          setNoteCategories([...new Set([
            ...defaultNoteCategories,
            ...importedNotebookNotes.map(note => note.category || note.tag).filter(category => typeof category === 'string' && category.trim() && category !== '全部' && category !== '未分類')
          ])]);
        }

        const restoredSections = [];
        if (backupData.notes || backupData.notebook || backupData.notebookNotes) restoredSections.push('筆記本');
        if (backupData.babyInfo) restoredSections.push('今日快照');
        if (backupData.growthHistory) restoredSections.push('歷史測量列表');
        if (backupData.logs) restoredSections.push('照護日誌');
        if (backupData.careReminders) restoredSections.push('照護提醒');
        if (backupData.vaccinationLogs) restoredSections.push('疫苗接種紀錄');
        if (backupData.solidFoodLogs) restoredSections.push('副食品試吃紀錄');
        if (backupData.doctorNotes || backupData.doctorQuestions || Object.prototype.hasOwnProperty.call(backupData, 'doctorVisitSummary')) restoredSections.push('看診備忘');

        setShowBackupModal(false);
        setPastedJson('');
        showToast('✅ 備份檔案已還原成功！');
        if (dueReminderIds.length > 0) {
          setTimeout(() => {
            dueReminderIds.forEach(id => notifiedReminderIdsRef.current.delete(id));
            setReminderNow(Date.now());
          }, 3000);
        }
      };

      const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const parsed = JSON.parse(event.target.result);
            handleImportBackupObj(parsed);
          } catch (err) {
            showToast('❌ 備份檔案內容不完整，請確認後再試一次。');
          }
        };
        reader.onerror = () => {
          console.error('Failed to read backup file:', reader.error);
          showToast('❌ 無法讀取備份檔案，請確認檔案可正常開啟後再試一次。');
        };
        reader.readAsText(file);
      };

      const handlePasteImport = () => {
        if (!pastedJson.trim()) {
          showToast('⚠️ 請先貼上備份文字內容');
          return;
        }
        try {
          const parsed = JSON.parse(pastedJson);
          handleImportBackupObj(parsed);
        } catch (err) {
          showToast('❌ 備份資料格式不正確，還原失敗');
        }
      };

      const stopNoteVoiceInput = (abort = false) => {
        const recognition = noteVoiceRecognitionRef.current;
        if (!recognition) return;
        if (abort) {
          noteVoiceRecognitionRef.current = null;
          noteVoiceFieldRef.current = null;
          setNoteVoiceField(null);
          recognition.abort();
        } else {
          recognition.stop();
        }
      };

      const setNoteVoiceTarget = (field) => {
        if (noteVoiceRecognitionRef.current) return;
        noteVoiceTargetFieldRef.current = field;
        setNoteVoiceTargetField(field);
      };

      const releaseNoteMicTestStream = () => {
        const stream = noteMicTestStreamRef.current;
        noteMicTestStreamRef.current = null;
        if (stream) stream.getTracks().forEach(track => track.stop());
      };

      const clearNoteMicTestAudio = () => {
        const audioUrl = noteMicTestAudioUrlRef.current;
        noteMicTestAudioUrlRef.current = '';
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setNoteMicTestAudioUrl('');
      };

      const cancelNoteMicTest = () => {
        noteMicTestRequestIdRef.current += 1;
        if (noteMicTestTimeoutRef.current) {
          window.clearTimeout(noteMicTestTimeoutRef.current);
          noteMicTestTimeoutRef.current = null;
        }
        const recorder = noteMicTestRecorderRef.current;
        noteMicTestRecorderRef.current = null;
        if (recorder && recorder.state !== 'inactive') {
          recorder.ondataavailable = null;
          recorder.onerror = null;
          recorder.onstop = null;
          try {
            recorder.stop();
          } catch (error) {
            console.error('Unable to stop notebook microphone test recording:', error);
          }
        }
        releaseNoteMicTestStream();
        noteMicTestChunksRef.current = [];
        clearNoteMicTestAudio();
        setNoteMicTestStatus('idle');
        setNoteMicTestError('');
      };

      const handleToggleNoteMicTest = async () => {
        const activeRecorder = noteMicTestRecorderRef.current;
        if (activeRecorder && activeRecorder.state === 'recording') {
          if (noteMicTestTimeoutRef.current) {
            window.clearTimeout(noteMicTestTimeoutRef.current);
            noteMicTestTimeoutRef.current = null;
          }
          setNoteMicTestStatus('processing');
          activeRecorder.stop();
          return;
        }
        if (noteMicTestStatus === 'requesting' || noteMicTestStatus === 'processing') return;
        if (noteVoiceRecognitionRef.current) {
          setNoteMicTestError('請先停止語音輸入，再測試麥克風。');
          return;
        }
        if (!navigator.mediaDevices?.getUserMedia || typeof window.MediaRecorder !== 'function') {
          setNoteMicTestError('目前瀏覽器不支援麥克風測試，請確認使用安全連線，或改用裝置的麥克風測試功能。');
          return;
        }

        setNoteMicTestError('');
        clearNoteMicTestAudio();
        setNoteMicTestStatus('requesting');
        const requestId = noteMicTestRequestIdRef.current + 1;
        noteMicTestRequestIdRef.current = requestId;

        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          if (requestId !== noteMicTestRequestIdRef.current) {
            stream.getTracks().forEach(track => track.stop());
            return;
          }
          noteMicTestStreamRef.current = stream;
          const recorder = new window.MediaRecorder(stream);
          noteMicTestRecorderRef.current = recorder;
          noteMicTestChunksRef.current = [];
          recorder.ondataavailable = (event) => {
            if (event.data && event.data.size > 0) noteMicTestChunksRef.current.push(event.data);
          };
          recorder.onerror = (event) => {
            if (requestId !== noteMicTestRequestIdRef.current) return;
            console.error('Notebook microphone test recording failed:', event.error);
            noteMicTestRequestIdRef.current += 1;
            noteMicTestRecorderRef.current = null;
            if (noteMicTestTimeoutRef.current) {
              window.clearTimeout(noteMicTestTimeoutRef.current);
              noteMicTestTimeoutRef.current = null;
            }
            releaseNoteMicTestStream();
            noteMicTestChunksRef.current = [];
            setNoteMicTestStatus('idle');
            setNoteMicTestError('錄音時發生問題，請確認麥克風權限後再試。');
          };
          recorder.onstop = () => {
            if (requestId !== noteMicTestRequestIdRef.current) return;
            noteMicTestRecorderRef.current = null;
            if (noteMicTestTimeoutRef.current) {
              window.clearTimeout(noteMicTestTimeoutRef.current);
              noteMicTestTimeoutRef.current = null;
            }
            releaseNoteMicTestStream();
            const chunks = noteMicTestChunksRef.current;
            noteMicTestChunksRef.current = [];
            const audioBlob = new Blob(chunks, {
              type: recorder.mimeType || chunks[0]?.type || 'audio/webm'
            });
            if (audioBlob.size === 0) {
              setNoteMicTestStatus('idle');
              setNoteMicTestError('沒有收到錄音內容，請確認麥克風可用後再試。');
              return;
            }
            const audioUrl = URL.createObjectURL(audioBlob);
            noteMicTestAudioUrlRef.current = audioUrl;
            setNoteMicTestAudioUrl(audioUrl);
            setNoteMicTestStatus('ready');
          };
          recorder.start();
          setNoteMicTestStatus('recording');
          noteMicTestTimeoutRef.current = window.setTimeout(() => {
            if (requestId !== noteMicTestRequestIdRef.current || recorder.state !== 'recording') return;
            setNoteMicTestStatus('processing');
            recorder.stop();
          }, 5000);
        } catch (error) {
          if (requestId !== noteMicTestRequestIdRef.current) return;
          releaseNoteMicTestStream();
          noteMicTestRecorderRef.current = null;
          setNoteMicTestStatus('idle');
          if (error.name === 'NotAllowedError' || error.name === 'SecurityError') {
            setNoteMicTestError('麥克風未獲允許，請在瀏覽器設定中允許麥克風後再試。');
          } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
            setNoteMicTestError('找不到可用的麥克風，請確認裝置已連接麥克風。');
          } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
            setNoteMicTestError('麥克風目前無法使用，請確認沒有被其他應用程式占用後再試。');
          } else {
            console.error('Unable to start notebook microphone test:', error);
            setNoteMicTestError('無法啟動麥克風測試，請稍後再試。');
          }
        }
      };

      const handleToggleNoteVoiceInput = () => {
        const currentRecognition = noteVoiceRecognitionRef.current;
        if (currentRecognition) {
          stopNoteVoiceInput();
          return;
        }

        const field = noteVoiceTargetFieldRef.current;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
          showToast('⚠️ 目前瀏覽器不支援語音輸入，請使用鍵盤或裝置內建的語音輸入。');
          return;
        }

        const input = field === 'title'
          ? noteTitleInputRef.current
          : field === 'content'
            ? noteContentInputRef.current
            : field === 'search'
              ? noteSearchInputRef.current
            : field === 'newCategory'
              ? newNoteCategoryInputRef.current
            : isCustomNoteCategory
              ? noteCategoryInputRef.current
              : null;

        let recognition;
        try {
          recognition = new SpeechRecognition();
        } catch (error) {
          console.error('Unable to create notebook speech recognition:', error);
          showToast('❌ 無法啟動語音輸入，請確認瀏覽器支援及麥克風權限。');
          return;
        }
        const selectionStart = field === 'category' && !isCustomNoteCategory
          ? 0
          : input?.selectionStart ?? (field === 'category' ? noteCategory.length : field === 'newCategory' ? newNoteCategory.length : field === 'search' ? noteSearchQuery.length : input.value.length);
        const selectionEnd = field === 'category' && !isCustomNoteCategory
          ? noteCategory.length
          : input?.selectionEnd ?? selectionStart;
        const maxLength = field === 'title' ? 30 : field === 'content' ? 1000 : Infinity;
        noteVoiceRecognitionRef.current = recognition;
        noteVoiceFieldRef.current = field;
        noteVoiceSelectionRef.current = { field, start: selectionStart, end: selectionEnd };
        setNoteVoiceField(field);
        if (field === 'category') setIsCustomNoteCategory(true);

        recognition.lang = 'zh-TW';
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.onresult = (event) => {
          if (noteVoiceRecognitionRef.current !== recognition) return;
          const transcript = Array.from(event.results)
            .slice(event.resultIndex)
            .map(result => result[0].transcript)
            .join('')
            .trim();
          if (!transcript) return;

          const currentInput = field === 'category'
            ? noteCategoryInputRef.current
            : field === 'newCategory'
              ? newNoteCategoryInputRef.current
              : input;
          const value = currentInput
            ? currentInput.value
            : field === 'newCategory'
              ? newNoteCategory
              : noteCategory;
          const selection = noteVoiceSelectionRef.current;
          const start = Math.min(selection && selection.field === field ? selection.start : value.length, value.length);
          const end = Math.min(selection && selection.field === field ? selection.end : start, value.length);
          const availableLength = Math.max(0, maxLength - (value.length - (end - start)));
          const insertedText = transcript.slice(0, availableLength);
          if (!insertedText) {
            showToast(`⚠️ ${field === 'title' ? '標題' : '筆記內容'}已達字數上限，無法加入語音辨識結果。`);
            return;
          }

          const updatedValue = `${value.slice(0, start)}${insertedText}${value.slice(end)}`;
          if (field === 'title') setNoteTitle(updatedValue);
          else if (field === 'content') setNoteContent(updatedValue);
          else if (field === 'search') setNoteSearchQuery(updatedValue);
          else if (field === 'newCategory') setNewNoteCategory(updatedValue);
          else {
            setIsCustomNoteCategory(true);
            setNoteCategory(updatedValue);
          }
          const caretPosition = start + insertedText.length;
          noteVoiceSelectionRef.current = { field, start: caretPosition, end: caretPosition };
          if (currentInput) {
            window.requestAnimationFrame(() => currentInput.setSelectionRange(caretPosition, caretPosition));
          }
          if (insertedText.length < transcript.length) {
            showToast(`⚠️ 語音內容已加入至${field === 'title' ? '標題' : '筆記內容'}字數上限。`);
          }
        };
        recognition.onerror = (event) => {
          if (noteVoiceRecognitionRef.current !== recognition || event.error === 'aborted') return;
          if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            showToast('⚠️ 麥克風未獲允許，請在瀏覽器設定中允許麥克風後再試。');
          } else if (event.error === 'no-speech') {
            showToast('⚠️ 沒有辨識到語音，請再試一次。');
          } else {
            console.error('Notebook speech recognition failed:', event.error);
            showToast('❌ 語音辨識發生問題，請稍後再試或改用鍵盤輸入。');
          }
        };
        recognition.onnomatch = () => {
          if (noteVoiceRecognitionRef.current === recognition) {
            showToast('⚠️ 沒有辨識到語音，請再試一次。');
          }
        };
        recognition.onend = () => {
          if (noteVoiceRecognitionRef.current !== recognition) return;
          noteVoiceRecognitionRef.current = null;
          noteVoiceFieldRef.current = null;
          setNoteVoiceField(null);
        };

        try {
          recognition.start();
        } catch (error) {
          noteVoiceRecognitionRef.current = null;
          noteVoiceFieldRef.current = null;
          setNoteVoiceField(null);
          console.error('Unable to start notebook speech recognition:', error);
          showToast('❌ 無法啟動語音輸入，請確認瀏覽器的麥克風權限後再試。');
        }
      };

      React.useEffect(() => () => {
        const recognition = noteVoiceRecognitionRef.current;
        noteVoiceRecognitionRef.current = null;
        if (recognition) recognition.abort();
        noteMicTestRequestIdRef.current += 1;
        if (noteMicTestTimeoutRef.current) window.clearTimeout(noteMicTestTimeoutRef.current);
        const recorder = noteMicTestRecorderRef.current;
        noteMicTestRecorderRef.current = null;
        if (recorder && recorder.state !== 'inactive') {
          recorder.ondataavailable = null;
          recorder.onerror = null;
          recorder.onstop = null;
          try {
            recorder.stop();
          } catch (error) {
            console.error('Unable to stop notebook microphone test recording:', error);
          }
        }
        const stream = noteMicTestStreamRef.current;
        noteMicTestStreamRef.current = null;
        if (stream) stream.getTracks().forEach(track => track.stop());
        if (noteMicTestAudioUrlRef.current) URL.revokeObjectURL(noteMicTestAudioUrlRef.current);
      }, []);

      const noteVoiceButton = (
        <button
          type="button"
          onClick={handleToggleNoteVoiceInput}
          disabled={noteMicTestStatus === 'requesting' || noteMicTestStatus === 'recording' || noteMicTestStatus === 'processing'}
          aria-label={noteVoiceField ? `停止${noteVoiceField === 'title' ? '標題' : noteVoiceField === 'category' ? '標籤分類' : noteVoiceField === 'newCategory' ? '新增分類名稱' : noteVoiceField === 'search' ? '搜尋欄' : '筆記內容'}語音輸入` : '開始語音輸入至目前選取欄位'}
          aria-pressed={noteVoiceField !== null}
          title={noteMicTestStatus === 'recording' ? '請先停止麥克風測試' : noteVoiceField ? '停止聽寫' : '將語音輸入至目前選取欄位'}
          className={`shrink-0 flex items-center gap-1 px-2 py-2 text-xs font-bold rounded-xl border transition-colors disabled:opacity-50 ${
            noteVoiceField !== null
              ? 'bg-red-100 border-red-300 text-red-700'
              : 'bg-white border-amber-200 text-amber-700 hover:bg-amber-100'
          }`}
        >
          <Icon name={noteVoiceField !== null ? 'x' : 'mic'} className="w-4 h-4" />
          {noteVoiceField !== null ? '停止' : '語音輸入'}
        </button>
      );

      const noteMicTestButton = (
        <button
          type="button"
          onClick={handleToggleNoteMicTest}
          disabled={noteMicTestStatus === 'requesting' || noteMicTestStatus === 'processing'}
          aria-label={noteMicTestStatus === 'recording' ? '停止麥克風測試錄音' : '測試麥克風'}
          aria-pressed={noteMicTestStatus === 'recording'}
          title={noteMicTestStatus === 'recording' ? '停止錄音並播放測試' : '錄一小段聲音，播放確認麥克風收音'}
          className={`shrink-0 flex items-center gap-1 px-2 py-2 text-xs font-bold rounded-xl border transition-colors disabled:opacity-50 ${
            noteMicTestStatus === 'recording'
              ? 'bg-red-50 border-red-200 text-red-700'
              : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Icon name="waveform" className="w-4 h-4" />
          {noteMicTestStatus === 'requesting' ? '等待權限…' : noteMicTestStatus === 'recording' ? '停止測試' : noteMicTestStatus === 'processing' ? '處理中…' : '測試麥克風'}
        </button>
      );

      const noteVoiceControls = (
        <div className="flex flex-col items-stretch gap-1">
          {noteVoiceButton}
          {noteMicTestButton}
        </div>
      );

      const handleSaveNote = (e) => {
        stopNoteVoiceInput(true);
        e.preventDefault();

        if (!noteTitle.trim()) {
          showToast('⚠️ 請輸入筆記標題！');
          return;
        }

        const category = noteCategory.trim();
        if (!category || category === '全部') {
          showToast('⚠️ 請輸入有效的標籤分類！');
          return;
        }

        if (editingNoteId !== null) {
          setNotes(notes.map(n => {
            if (n.id === editingNoteId) {
              return {
                ...n,
                category,
                title: noteTitle.slice(0, 30).trim(),
                content: noteContent.slice(0, 1000).trim(),
              };
            }
            return n;
          }));
          setEditingNoteId(null);
          setNoteTitle('');
          setNoteContent('');
          showToast('✏️ 已成功更新筆記！');
        } else {
          if (!ensureStorageCapacityForNewData()) return;
          if (notes.length >= 1000) {
            showToast('⚠️ 筆記總數已達 1000 則上限，請先刪除舊筆記！');
            return;
          }

          const now = new Date();
          const dateStr = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

          const newNote = {
            id: Date.now(),
            category,
            title: noteTitle.slice(0, 30).trim(),
            content: noteContent.slice(0, 1000).trim(),
            createdAt: dateStr
          };

          setNotes([newNote, ...notes]);
          setNoteTitle('');
          setNoteContent('');
          showToast('📝 已新增筆記！');
        }
        if (category !== '未分類' && !noteCategories.includes(category)) setNoteCategories([...noteCategories, category]);
      };

      const handleStartEditNote = (note) => {
        stopNoteVoiceInput(true);
        setEditingNoteId(note.id);
        setNoteCategory(note.category || note.tag || '未分類');
        setIsCustomNoteCategory(false);
        setNoteTitle(note.title || '');
        setNoteContent(note.content || '');
      };

      const handleCancelEditNote = (confirmDiscard = true) => {
        const originalNote = notes.find(note => note.id === editingNoteId);
        const hasUnsavedChanges = originalNote && (
          noteCategory !== (originalNote.category || originalNote.tag || '未分類')
          || noteTitle !== (originalNote.title || '')
          || noteContent !== (originalNote.content || '')
        );
        if (confirmDiscard && hasUnsavedChanges && !window.confirm('有尚未儲存的修改，確定要放棄嗎？')) return false;
        stopNoteVoiceInput(true);
        setEditingNoteId(null);
        setNoteCategory(noteCategories.includes('回診提問') ? '回診提問' : '未分類');
        setIsCustomNoteCategory(false);
        setNoteTitle('');
        setNoteContent('');
        return true;
      };

      const handleCloseNotesModal = () => {
        if (editingNoteId !== null && !handleCancelEditNote()) return;
        stopNoteVoiceInput(true);
        cancelNoteMicTest();
        setShowNotesModal(false);
      };

      const handleAddNoteCategory = () => {
        const category = newNoteCategory.trim();
        if (!category || category === '全部' || category === '未分類') {
          showToast('⚠️ 請輸入有效的分類名稱！');
          return;
        }
        if (noteCategories.includes(category)) {
          showToast('⚠️ 此分類已存在！');
          return;
        }
        setNoteCategories([...noteCategories, category]);
        setNewNoteCategory('');
        showToast('✅ 已新增分類！');
      };

      const handleRenameNoteCategory = (oldCategory) => {
        const category = editedNoteCategory.trim();
        if (!category || category === '全部' || category === '未分類') {
          showToast('⚠️ 請輸入有效的分類名稱！');
          return;
        }
        if (category !== oldCategory && noteCategories.includes(category)) {
          showToast('⚠️ 此分類已存在！');
          return;
        }
        setNoteCategories(noteCategories.map(item => item === oldCategory ? category : item));
        setNotes(notes.map(note => (note.category || note.tag || '未分類') === oldCategory ? { ...note, category } : note));
        if (noteCategory === oldCategory) setNoteCategory(category);
        if (filterNoteCategory === oldCategory) setFilterNoteCategory(category);
        setEditingNoteCategory(null);
        setEditedNoteCategory('');
        showToast('✏️ 已更新分類名稱！');
      };

      const handleDeleteNoteCategory = (category) => {
        const matchingNotes = notes.filter(note => (note.category || note.tag || '未分類') === category);
        const confirmMessage = matchingNotes.length > 0
          ? `刪除「${category}」分類？該分類的 ${matchingNotes.length} 則筆記會保留並改歸「未分類」。`
          : `確定刪除「${category}」分類嗎？`;
        if (!window.confirm(confirmMessage)) return;
        setNoteCategories(noteCategories.filter(item => item !== category));
        if (matchingNotes.length > 0) {
          setNotes(notes.map(note => (note.category || note.tag || '未分類') === category ? { ...note, category: '未分類' } : note));
        }
        if (noteCategory === category) {
          setNoteCategory('未分類');
          setIsCustomNoteCategory(false);
        }
        if (filterNoteCategory === category) setFilterNoteCategory('未分類');
        if (editingNoteCategory === category) {
          setEditingNoteCategory(null);
          setEditedNoteCategory('');
        }
        showToast('🗑️ 已刪除分類，相關筆記已改歸未分類。');
      };

      const handleRestoreDefaultNoteCategories = () => {
        const hasCustomNotes = notes.some(note => !defaultNoteCategories.includes(note.category || note.tag || '未分類'));
        const hasCustomCategories = noteCategories.some(category => !defaultNoteCategories.includes(category));
        if (!hasCustomNotes && !hasCustomCategories && defaultNoteCategories.every(category => noteCategories.includes(category))) {
          showToast('ℹ️ 目前已是預設分類。');
          return;
        }
        const confirmed = window.confirm(
          hasCustomNotes
            ? '還原預設分類並刪除所有自訂分類？使用自訂分類的筆記會保留，並改歸「未分類」。'
            : '還原為預設分類並刪除所有自訂分類？'
        );
        if (!confirmed) return;
        setNoteCategories(defaultNoteCategories);
        if (hasCustomNotes) {
          setNotes(notes.map(note => (
            defaultNoteCategories.includes(note.category || note.tag || '未分類')
              ? note
              : { ...note, category: '未分類' }
          )));
        }
        if (!defaultNoteCategories.includes(noteCategory)) {
          setNoteCategory('未分類');
          setIsCustomNoteCategory(false);
        }
        if (filterNoteCategory !== '全部' && !defaultNoteCategories.includes(filterNoteCategory)) {
          setFilterNoteCategory('未分類');
        }
        setEditingNoteCategory(null);
        setEditedNoteCategory('');
        showToast('✅ 已還原預設分類，自訂分類已清除。');
      };

      const handleDeleteNote = (id) => {
        const note = notes.find(n => n.id === id);
        if (!note) return;
        const noteTitle = note.title?.trim() || '這則筆記';
        if (!window.confirm(`刪除這則筆記？\n確定要刪除「${noteTitle}」嗎？刪除後將無法復原。`)) return;
        if (editingNoteId === id) {
          handleCancelEditNote(false);
        }
        setNotes(notes.filter(n => n.id !== id));
        showToast('🗑️ 已刪除筆記');
      };

      const handleOpenEditModal = () => {
        setEditFormData({ ...babyInfo });
        setShowEditProfileModal(true);
      };

      const handleSaveProfile = (e) => {
        e.preventDefault();
        const cleanedForm = {
          ...editFormData,
          birthDate: editFormData.birthDate ? sanitizeDateStr(editFormData.birthDate) : '',
          dueDate: editFormData.dueDate ? sanitizeDateStr(editFormData.dueDate) : ''
        };

        // Update babyInfo immediately with the cleaned form
        setBabyInfo(cleanedForm);
        setShowEditProfileModal(false);

        // Update today's growth record if it exists (explicitly allow empty string to overwrite previous values)
        const todayStr = new Date().toISOString().slice(0, 10);
        const existingTodayIndex = growthHistory.findIndex(g => g.date === todayStr);
        if (existingTodayIndex >= 0) {
          const updated = [...growthHistory];
          updated[existingTodayIndex] = {
            ...updated[existingTodayIndex],
            // Use explicit checks so an empty string from the form overwrites previous values
            weight: typeof cleanedForm.currentWeight !== 'undefined' ? cleanedForm.currentWeight : updated[existingTodayIndex].weight,
            height: typeof cleanedForm.currentHeight !== 'undefined' ? cleanedForm.currentHeight : updated[existingTodayIndex].height,
            head: typeof cleanedForm.currentHead !== 'undefined' ? cleanedForm.currentHead : updated[existingTodayIndex].head,
          };
          setGrowthHistory(updated);
        } else {
          // Only create a new today record if at least one current value is set (non-empty)
          const hasAnyValue = (typeof cleanedForm.currentWeight !== 'undefined' && cleanedForm.currentWeight !== '') ||
                              (typeof cleanedForm.currentHeight !== 'undefined' && cleanedForm.currentHeight !== '') ||
                              (typeof cleanedForm.currentHead !== 'undefined' && cleanedForm.currentHead !== '');
          if (hasAnyValue) {
            setGrowthHistory([
              ...growthHistory,
              {
                id: Date.now(),
                date: todayStr,
                weight: cleanedForm.currentWeight || '',
                height: cleanedForm.currentHeight || '',
                head: cleanedForm.currentHead || ''
              }
            ]);
          }
        }

        showToast('💾 照護檔案設定已儲存！');
      };

      const handleAddGrowthRecord = (newRec) => {
        if (!ensureStorageCapacityForNewData()) return;
        const cleanedRec = {
          ...newRec,
          date: sanitizeDateStr(newRec.date)
        };
        setGrowthHistory([cleanedRec, ...growthHistory]);
        // When a new record is added, update babyInfo fields even if the new value is an empty string
        if (typeof cleanedRec.weight !== 'undefined') setBabyInfo(prev => ({ ...prev, currentWeight: cleanedRec.weight }));
        if (typeof cleanedRec.height !== 'undefined') setBabyInfo(prev => ({ ...prev, currentHeight: cleanedRec.height }));
        if (typeof cleanedRec.head !== 'undefined') setBabyInfo(prev => ({ ...prev, currentHead: cleanedRec.head }));
        showToast('📈 已新增測量數據點！');
      };

      const handleUpdateGrowthRecord = (updatedRec) => {
        const cleanedRec = {
          ...updatedRec,
          date: sanitizeDateStr(updatedRec.date)
        };
        setGrowthHistory(prevHistory => prevHistory.map(item => item.id === cleanedRec.id ? cleanedRec : item));
        showToast('💾 已更新測量紀錄！');
      };

      const handleDeleteGrowthRecord = (id) => {
        setGrowthHistory(growthHistory.filter(item => item.id !== id));
        showToast('🗑️ 已刪除測量點');
      };

      const handleToggleGrowthRecordPlot = (id) => {
        setGrowthHistory(growthHistory.map(item => item.id === id ? { ...item, plotOnChart: item.plotOnChart === false } : item));
        showToast('📊 已更新圖表繪製設定');
      };

      const openMilestoneEditor = (milestone = null) => {
        setEditingMilestoneId(milestone ? milestone.id : null);
        setMilestoneText(milestone ? milestone.text : '');
        setShowMilestoneModal(true);
      };

      const handleSaveMilestone = () => {
        const text = milestoneText.trim();
        if (!text) {
          showToast('⚠️ 請先輸入里程碑內容');
          return;
        }
        if (editingMilestoneId === null) {
          if (!ensureStorageCapacityForNewData()) return;
          setMilestones([...milestones, { id: Date.now(), text, done: false }]);
          showToast('✅ 已新增發展里程碑');
        } else {
          setMilestones(milestones.map(item => item.id === editingMilestoneId ? { ...item, text } : item));
          showToast('✅ 已更新發展里程碑');
        }
        setShowMilestoneModal(false);
        setEditingMilestoneId(null);
        setMilestoneText('');
      };

      const handleDeleteMilestone = (id) => {
        if (!window.confirm('確定要刪除這項發展里程碑嗎？')) return;
        setMilestones(milestones.filter(item => item.id !== id));
        showToast('🗑️ 已刪除發展里程碑');
      };

      const handleRestoreDefaultMilestones = () => {
        const missingDefaults = defaultMilestones.filter(
          defaultItem => !milestones.some(item => item.id === defaultItem.id)
        );
        if (missingDefaults.length === 0) {
          showToast('ℹ️ 預設發展里程碑都已存在');
          return;
        }
        if (!window.confirm(`將補回 ${missingDefaults.length} 項目前缺少的預設發展里程碑，不會覆蓋或刪除現有項目。確定要繼續嗎？`)) return;
        if (!ensureStorageCapacityForNewData()) return;
        setMilestones([...milestones, ...missingDefaults]);
        showToast(`🌱 已載入 ${missingDefaults.length} 項預設發展里程碑`);
      };

      const handleResetData = () => {
        const confirmed = window.confirm(
          "警告：此操作將清除所有資料！資料刪除後無法復原。建議先使用畫面上方的『備份/還原』功能匯出備份檔案。確定要繼續清空所有資料嗎？"
        );
        if (!confirmed) return;

        clearAppStorageData();

        setBabyInfo({
          name: '',
          gender: 'boy',
          gestationalWeeks: '',
          birthWeight: '',
          birthDate: '',
          dueDate: '',
          currentWeight: '',
          currentHeight: '',
          currentHead: '',
          targetDailyMilk: '',
        });
        setGrowthHistory([]);
        setLogs([]);
        setCareReminders([]);
        notifiedReminderIdsRef.current.clear();
        repeatedReminderToastTimesRef.current.clear();
        setVaccinationLogs([]);
        setSolidFoodLogs([]);
        setDoctorNotes([]);
        setDoctorVisitSummary('');
        setDoctorVisitSummaryDraft('');
        setIsEditingDoctorVisitSummary(false);
        setNotes([]);
        setNoteCategories(defaultNoteCategories);
        setNoteCategory('回診提問');
        setIsCustomNoteCategory(false);
        setFilterNoteCategory('全部');
        setNoteSearchQuery('');
        setEditingNoteId(null);
        setNoteTitle('');
        setNoteContent('');
        setShowNoteCategoryManager(false);
        setNewNoteCategory('');
        setEditingNoteCategory(null);
        setEditedNoteCategory('');
        setMilestones([]);
        setShowEditProfileModal(false);
        setShowDataMgmtModal(false);
        setShowStorageManagerModal(false);
        showToast('🧹 已清除應用程式所有資料');
      };

      const handleClearLogs = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除所有照護日誌（餵奶、尿布等紀錄）。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setLogs([]);
        showToast('🗑️ 已清除照護日誌');
      };

      const handleClearCareReminders = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除所有照護提醒。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setCareReminders([]);
        notifiedReminderIdsRef.current.clear();
        repeatedReminderToastTimesRef.current.clear();
        showToast('🗑️ 已清除照護提醒');
      };

      const handleClearBabyProfile = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除寶寶姓名、性別、出生資料與目前身高體重等基本資料，但不會刪除照護日誌、看診備忘或生長數據。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setBabyInfo({
          name: '',
          gender: 'boy',
          gestationalWeeks: '',
          birthWeight: '',
          birthDate: '',
          dueDate: '',
          currentWeight: '',
          currentHeight: '',
          currentHead: '',
          targetDailyMilk: '',
        });
        setShowEditProfileModal(false);
        showToast('🧹 已清除寶寶基本資料');
      };

      const handleClearDoctorNotes = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除看診摘要與所有看診備忘，但不會刪除筆記。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setDoctorNotes([]);
        setDoctorVisitSummary('');
        setDoctorVisitSummaryDraft('');
        setIsEditingDoctorVisitSummary(false);
        showToast('🗑️ 已清除看診備忘');
      };

      const handleClearNotes = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除所有筆記與自訂分類，並還原預設分類；不會刪除看診備忘。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setNotes([]);
        setNoteCategories(defaultNoteCategories);
        setNoteCategory('回診提問');
        setIsCustomNoteCategory(false);
        setFilterNoteCategory('全部');
        setEditingNoteId(null);
        setNoteTitle('');
        setNoteContent('');
        showToast('🗑️ 已清除筆記本並還原預設分類');
      };

      const handleClearGrowthData = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將刪除所有生長測量紀錄，且無法復原。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setGrowthHistory([]);
        showToast('🗑️ 已清除所有生長測量紀錄');
      };

      const handleClearMilestones = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除所有發展里程碑。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setMilestones([]);
        showToast('🗑️ 已清除發展里程碑');
      };

      const handleResetMilkSettings = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將重設每日奶量進度與目標。確定要繼續嗎？'
        );
        if (!confirmed) return;
        const now = new Date();
        const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        setLogs((prevLogs) => prevLogs.filter(
          (item) => item.type !== 'feeding' || item.date !== today
        ));
        setBabyInfo((prev) => ({ ...prev, targetDailyMilk: '' }));
        showToast('🧴 已重設奶量設定/目標');
      };

      const handleResetNightMode = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將重設夜間模式設定並切回日間模式。確定要繼續嗎？'
        );
        if (!confirmed) return;
        try {
          localStorage.removeItem('sun_baby_night_mode_v1');
          setIsNightMode(false);
          showToast('🌙 已重設夜間模式設定，目前為日間模式。');
        } catch (error) {
          console.error('Failed to reset night mode preference:', error);
          showToast('⚠️ 無法重設夜間模式設定，請稍後再試。');
        }
      };

      const handleResetPdfExportSettings = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將重設匯出 PDF 的資料選項、時間範圍與顯示設定。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setPdfExportOptions(DEFAULT_PDF_EXPORT_OPTIONS);
        setPdfExportDraft(DEFAULT_PDF_EXPORT_OPTIONS);
        try {
          localStorage.setItem('sun_baby_pdf_export_options_v1', JSON.stringify(DEFAULT_PDF_EXPORT_OPTIONS));
          showToast('📄 已重設匯出 PDF 設定。');
        } catch (error) {
          console.error('Failed to reset PDF export settings:', error);
          showToast('⚠️ 無法重設匯出 PDF 設定，請稍後再試。');
        }
      };

      const handleResetGrowthChartSettings = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將重設百分位曲線、基準線與月齡模式顯示設定。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setGrowthChartOptions(DEFAULT_GROWTH_CHART_OPTIONS);
        try {
          localStorage.setItem('sun_baby_growth_chart_options_v1', JSON.stringify(DEFAULT_GROWTH_CHART_OPTIONS));
          showToast('📈 已重設生長曲線與月齡模式顯示設定。');
        } catch (error) {
          console.error('Failed to reset growth chart settings:', error);
          showToast('⚠️ 無法儲存生長曲線與月齡模式預設設定，請稍後再試。');
        }
      };

      const closePdfPasswordModal = () => {
        setShowPdfPasswordModal(false);
        setPdfPassword('');
        setPdfPasswordConfirm('');
        setShowPdfPassword(false);
        setShowPdfPasswordConfirm(false);
        setPdfPasswordError('');
      };

      const handleConfirmPdfPassword = () => {
        if (Array.from(pdfPassword).length < 4 || Array.from(pdfPassword).length > 8) {
          setPdfPasswordError('密碼需為 4 至 8 個字元。');
          return;
        }
        if (pdfPassword !== pdfPasswordConfirm) {
          setPdfPasswordError('兩次輸入的密碼不一致，請重新確認。');
          return;
        }
        setShowPdfPasswordModal(false);
        handleDownloadPDF(pdfPassword);
        setPdfPassword('');
        setPdfPasswordConfirm('');
        setShowPdfPassword(false);
        setShowPdfPasswordConfirm(false);
        setPdfPasswordError('');
      };

      const handleDownloadPDF = (password) => {
        if (pdfExportOptions.range === 'custom' && (!pdfExportOptions.startDate || !pdfExportOptions.endDate)) {
          openPdfSettingsModal();
          showToast('⚠️ 請先選擇自訂匯出的開始與結束日期。', 'info');
          return;
        }
        if (pdfExportOptions.range === 'custom' && pdfExportOptions.startDate > pdfExportOptions.endDate) {
          openPdfSettingsModal();
          showToast('⚠️ 開始日期不可晚於結束日期。', 'info');
          return;
        }
        if (pdfExportOptions.encryptPdf && (typeof password !== 'string' || Array.from(password).length < 4 || Array.from(password).length > 8)) {
          setPdfPassword('');
          setPdfPasswordConfirm('');
          setPdfPasswordError('');
          setShowPdfPasswordModal(true);
          return;
        }
        setIsExporting(true);
        showToast('📄 正在生成 PDF 報告，請稍候...');
        try {
          if (!window.pdfMake || !window.pdfMake.vfs || !window.pdfMake.vfs['NotoSansTC-Variable.ttf']) {
            throw new Error('PDFMake 或繁體中文字型尚未載入。');
          }

          const getPdfRecordDate = (record) => {
            if (typeof record?.date === 'string') {
              const match = record.date.match(/^\d{4}-\d{2}-\d{2}/);
              if (match) return match[0];
            }
            if (typeof record?.createdAt === 'string') {
              const match = record.createdAt.match(/\d{4}-\d{2}-\d{2}/);
              if (match) return match[0];
            }
            return '';
          };
          const pdfExportRangeEnd = getLocalDateInputValue();
          let pdfExportRangeStart = '';
          if (pdfExportOptions.range === '7') {
            const start = parseDateOnly(pdfExportRangeEnd);
            if (start) { start.setDate(start.getDate() - 6); pdfExportRangeStart = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, '0')}-${String(start.getDate()).padStart(2, '0')}`; }
          } else if (pdfExportOptions.range === '30') {
            const start = parseDateOnly(pdfExportRangeEnd);
            if (start) { start.setDate(start.getDate() - 29); pdfExportRangeStart = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, '0')}-${String(start.getDate()).padStart(2, '0')}`; }
          } else if (pdfExportOptions.range === '90') {
            const start = parseDateOnly(pdfExportRangeEnd);
            if (start) { start.setDate(start.getDate() - 89); pdfExportRangeStart = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, '0')}-${String(start.getDate()).padStart(2, '0')}`; }
          } else if (pdfExportOptions.range === 'custom') {
            pdfExportRangeStart = pdfExportOptions.startDate;
          }
          const isPdfRecordInRange = (record) => {
            if (pdfExportOptions.range === 'all') return true;
            const recordDate = getPdfRecordDate(record);
            if (!recordDate) return false;
            const rangeStart = pdfExportOptions.range === 'custom' ? pdfExportOptions.startDate : pdfExportRangeStart;
            const rangeEnd = pdfExportOptions.range === 'custom' ? (pdfExportOptions.endDate || pdfExportRangeEnd) : pdfExportRangeEnd;
            if (rangeStart && recordDate < rangeStart) return false;
            if (rangeEnd && recordDate > rangeEnd) return false;
            return true;
          };
          const pdfGrowthHistory = growthHistory.filter(isPdfRecordInRange);
          const pdfLogs = logs.filter(isPdfRecordInRange);
          const pdfDoctorNotes = doctorNotes.filter(isPdfRecordInRange);
          const pdfNotes = notes.filter(isPdfRecordInRange);

          const pdfMake = window.pdfMake;
          pdfMake.fonts = Object.assign({}, pdfMake.fonts || {}, {
            // MicrosoftJhengHei is the document-wide family alias; the bundled OFL font supplies full Traditional Chinese glyph coverage.
            MicrosoftJhengHei: {
              normal: 'NotoSansTC-Variable.ttf',
              bold: 'NotoSansTC-Variable.ttf',
              italics: 'NotoSansTC-Variable.ttf',
              bolditalics: 'NotoSansTC-Variable.ttf'
            }
          });

          const growthChartMetrics = [
            { key: 'weight', label: '體重', unit: 'kg', minY: GrowthChartScale.METRIC_DOMAINS.weight.min, maxY: GrowthChartScale.METRIC_DOMAINS.weight.max, yTicks: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
            { key: 'height', label: '身長', unit: 'cm', minY: 35, maxY: 95, yTicks: [35, 45, 55, 65, 75, 85, 95] },
            { key: 'head', label: '頭圍', unit: 'cm', minY: 25, maxY: 52, yTicks: [25, 30, 35, 40, 45, 50] }
          ];
          const growthChartColors = ['#cbd5e1', '#94a3b8', '#3b82f6', '#94a3b8', '#cbd5e1'];
          const growthChartPercentiles = ['3%', '15%', '50%', '85%', '97%'];
          const createGrowthChartSvg = metricConfig => {
            const chartWidth = 600;
            const chartHeight = 300;
            const chartPadding = { top: 20, right: 32, bottom: 48, left: 52 };
            const plotBottom = chartHeight - chartPadding.bottom;
            const referenceData = (WHO_GROWTH_DATA[babyInfo.gender] || WHO_GROWTH_DATA.boy)[metricConfig.key];
            const points = pdfGrowthHistory
              .filter(record => record.plotOnChart !== false)
              .map(record => {
                const rawValue = parseFloat(record[metricConfig.key]);
                const value = !Number.isFinite(rawValue) ? null : metricConfig.key === 'weight' && rawValue > 30 ? rawValue / 1000 : rawValue;
                const date = sanitizeDateStr(record.date);
                if (value === null || !babyInfo.dueDate || !parseDateOnly(date)) return null;
                const age = getAgesForDate(date, babyInfo.birthDate, babyInfo.dueDate);
                return { age: age.correctedDays / 30.4375, value };
              })
              .filter(point => point !== null && point.age <= 36 && point.value >= metricConfig.minY && point.value <= metricConfig.maxY)
              .sort((a, b) => a.age - b.age);
            const minX = Math.min(-2, Math.floor((points.length ? Math.min(...points.map(point => point.age)) : 0) - 0.5));
            const maxX = Math.max(36, Math.ceil(Math.min(36, (points.length ? Math.max(...points.map(point => point.age)) : 12) + 1)));
            const xScale = month => chartPadding.left + ((month - minX) / (maxX - minX)) * (chartWidth - chartPadding.left - chartPadding.right);
            const yScale = value => GrowthChartScale.mapValueToY(value, { min: metricConfig.minY, max: metricConfig.maxY }, chartHeight, chartPadding);
            const svg = [
              `<svg xmlns="http://www.w3.org/2000/svg" width="${chartWidth}" height="${chartHeight}" viewBox="0 0 ${chartWidth} ${chartHeight}">`,
              `<rect x="0" y="0" width="${chartWidth}" height="${chartHeight}" fill="#ffffff"/>`
            ];
            metricConfig.yTicks.forEach(value => {
              const y = yScale(value);
              svg.push(`<line x1="${chartPadding.left}" y1="${y}" x2="${chartWidth - chartPadding.right}" y2="${y}" stroke="#e2e8f0" stroke-width="1"/>`);
              svg.push(`<text x="${chartPadding.left - 8}" y="${y + 4}" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">${value}</text>`);
            });
            for (let month = Math.ceil(minX / 6) * 6; month <= maxX; month += 6) {
              const x = xScale(month);
              svg.push(`<line x1="${x}" y1="${chartPadding.top}" x2="${x}" y2="${plotBottom}" stroke="#f1f5f9" stroke-width="1"/>`);
              svg.push(`<text x="${x}" y="${plotBottom + 18}" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">${month}</text>`);
            }
            if (showZeroBaseline && minX <= 0 && maxX >= 0) {
              const zeroX = xScale(0);
              svg.push(`<line x1="${zeroX}" y1="${chartPadding.top}" x2="${zeroX}" y2="${plotBottom}" stroke="#d97706" stroke-width="2" stroke-dasharray="6 3"/>`);
            }
            if (showPercentiles) {
              [1, 2, 3, 4, 5].forEach((percentileIndex, index) => {
                const path = referenceData.map((row, rowIndex) => (
                  `${rowIndex === 0 ? 'M' : 'L'} ${xScale(row[0]).toFixed(2)} ${yScale(row[percentileIndex]).toFixed(2)}`
                )).join(' ');
                svg.push(`<path d="${path}" fill="none" stroke="${growthChartColors[index]}" stroke-width="${percentileIndex === 3 ? 2 : 1.5}"${percentileIndex === 3 ? '' : ' stroke-dasharray="4 3"'}/>`);
                const last = referenceData[referenceData.length - 1];
                svg.push(`<text x="${(xScale(last[0]) + 4).toFixed(2)}" y="${(yScale(last[percentileIndex]) + 3).toFixed(2)}" font-family="sans-serif" font-size="9" fill="#64748b">${growthChartPercentiles[index]}</text>`);
              });
            }
            if (points.length > 1) {
              const path = points.map((point, index) => (
                `${index === 0 ? 'M' : 'L'} ${xScale(point.age).toFixed(2)} ${yScale(point.value).toFixed(2)}`
              )).join(' ');
              svg.push(`<path d="${path}" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`);
            }
            points.forEach(point => {
              svg.push(`<circle cx="${xScale(point.age).toFixed(2)}" cy="${yScale(point.value).toFixed(2)}" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>`);
            });
            svg.push(`<line x1="${chartPadding.left}" y1="${plotBottom}" x2="${chartWidth - chartPadding.right}" y2="${plotBottom}" stroke="#64748b" stroke-width="1.5"/>`);
            svg.push('</svg>');
            return { svg: svg.join(''), pointsCount: points.length };
          };
          const growthCharts = pdfExportOptions.growthChart ? growthChartMetrics.map(metricConfig => ({
            ...metricConfig,
            ...createGrowthChartSvg(metricConfig)
          })) : [];

          const docDefinition = {
            pageSize: 'A4',
            ...(pdfExportOptions.encryptPdf ? { userPassword: password, version: '1.7ext3' } : {}),
            // 頁面留白，避免表格與卡片貼近紙張邊緣。
            pageMargins: [40, 42, 40, 42],
            defaultStyle: {
              font: 'MicrosoftJhengHei',
              fontSize: 12,
              color: '#000000',
              bold: true
            },
            styles: {
              title: { fontSize: 20, color: '#000000', bold: true, margin: [0, 0, 0, 4] },
              babyName: { fontSize: 14, color: '#000000', bold: true },
              subtitle: { fontSize: 10, color: '#000000', bold: true, margin: [0, 2, 0, 0] },
              sectionTitle: { fontSize: 14, color: '#000000', bold: true, margin: [0, 0, 0, 7] },
              fact: { fontSize: 12, bold: true, margin: [0, 0, 7, 0] },
              factLast: { fontSize: 12, bold: true, margin: [0, 2, 0, 0] },
              tableHeader: { fontSize: 11, bold: true, fillColor: '#F1F5F9', margin: [5, 6, 5, 6] },
              tableCell: { fontSize: 11, bold: true, margin: [5, 6, 5, 6] },
              muted: { fontSize: 10, color: '#000000', bold: true },
              emptyState: { fontSize: 12, color: '#000000', bold: true },
              listItem: { fontSize: 12, bold: true, margin: [0, 0, 5, 0] },
              answered: { color: '#000000', bold: true },
              unanswered: { color: '#000000', bold: true },
              noteTitle: { fontSize: 12, color: '#000000', bold: true, margin: [0, 0, 3, 0] },
              noteContent: { fontSize: 12, color: '#000000', bold: true, margin: [0, 2, 0, 0] },
              footer: { fontSize: 10, color: '#000000', bold: true, alignment: 'center', margin: [0, 14, 0, 0] }
            },
            content: [
              {
                text: '巴掌小太陽·早產兒門診照護與生長報告',
                style: 'title',
                alignment: 'center',
                margin: [0, 6, 0, 18]
              },
              {
                columns: [
                  pdfExportOptions.showExportTime
                    ? {
                        width: '*',
                        text: `匯出時間：${formatLocalDateTime()}`,
                        style: 'subtitle'
                      }
                    : { width: '*', text: '', style: 'subtitle' },
                  {
                    width: 'auto',
                    alignment: 'right',
                    stack: [
                      { text: `${babyInfo.name || '小太陽'} 寶寶`, style: 'babyName' },
                      {
                        text: `${babyInfo.gender === 'girl' ? '女寶' : '男寶'} | ${ageData.correctedText.replace(/^矯正 /, '矯正月齡 ')}`,
                        style: 'subtitle'
                      }
                    ]
                  }
                ],
                columnGap: 16,
                margin: [0, 0, 0, 8]
              },
              {
                canvas: [
                  { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: '#CBD5E1' }
                ],
                margin: [0, 0, 0, 14]
              },
              ...(pdfExportOptions.profile ? [{
                table: {
                  widths: ['*'],
                  body: [[
                    {
                      fillColor: '#FFFBEB',
                      // 內距讓單格 table 呈現卡片留白。
                      margin: [12, 12, 12, 5],
                      stack: [
                        {
                          columns: [
                            {
                              width: '*',
                              stack: [
                                { text: [{ text: '實際出生日：', bold: true }, babyInfo.birthDate || '未填寫'], style: 'fact' },
                                {
                                  text: [
                                    { text: '出生週數：', bold: true },
                                    babyInfo.gestationalWeeks ? `${babyInfo.gestationalWeeks} 週` : '未填寫'
                                  ],
                                  style: 'fact'
                                },
                                { text: [{ text: '實際月齡：', bold: true }, ageData.chronoText.replace(/^實際\s*/, '')], style: 'fact' }
                              ]
                            },
                            {
                              width: '*',
                              stack: [
                                { text: [{ text: '預產期：', bold: true }, babyInfo.dueDate || '未填寫'], style: 'fact' },
                                {
                                  text: [
                                    { text: '出生體重：', bold: true },
                                    babyInfo.birthWeight ? `${babyInfo.birthWeight} kg` : '未填寫'
                                  ],
                                  style: 'fact'
                                }
                              ]
                            }
                          ],
                          columnGap: 12
                        },
                        {
                          text: [
                            { text: '當前體重/身長/頭圍：', bold: true },
                            `${babyInfo.currentWeight ? `${babyInfo.currentWeight} kg` : '—'} / ${
                              babyInfo.currentHeight ? `${babyInfo.currentHeight} cm` : '—'
                            } / ${babyInfo.currentHead ? `${babyInfo.currentHead} cm` : '—'}`
                          ],
                          style: 'factLast'
                        }
                      ]
                    }
                  ]]
                },
                layout: { hLineWidth: () => 0, vLineWidth: () => 0 },
                margin: [0, 0, 0, 16]
              }] : []),
              ...(pdfExportOptions.growthRecords ? [{
                stack: [
                  { text: '歷史測量紀錄表', style: 'sectionTitle' },
                  pdfGrowthHistory.length === 0
                    ? { text: '尚無測量紀錄', style: 'emptyState', margin: [0, 0, 0, 10] }
                    : {
                        table: {
                          headerRows: 1,
                          widths: ['*', '*', '*', '*'],
                          dontBreakRows: true,
                          body: [
                            [
                              { text: '日期／時間', style: 'tableHeader' },
                              { text: '體重 (kg)', style: 'tableHeader' },
                              { text: '身長 (cm)', style: 'tableHeader' },
                              { text: '頭圍 (cm)', style: 'tableHeader' }
                            ],
                            ...pdfGrowthHistory.map((rec) => [
                              { text: `${rec.date || '—'}${rec.time ? ` ${rec.time}` : ''}`, style: 'tableCell' },
                              { text: rec.weight || '—', style: 'tableCell' },
                              { text: rec.height || '—', style: 'tableCell' },
                              { text: rec.head || '—', style: 'tableCell' }
                            ])
                          ]
                        },
                        layout: {
                          hLineColor: () => '#E2E8F0',
                          vLineColor: () => '#E2E8F0',
                          hLineWidth: () => 0.5,
                          vLineWidth: () => 0.5
                        },
                        margin: [0, 0, 0, 14]
                      }
                ]
              }] : []),
              ...(pdfExportOptions.growthChart ? [{
                stack: [
                      { text: '生長曲線', style: 'sectionTitle' },
                      { text: `X 軸為矯正月齡（預產期為 0 個月），Y 軸單位見各圖標題；橘色為寶寶測量點；${showPercentiles ? '曲線標示 3%、15%、50%、85%、97% 百分位' : '百分位參考曲線依目前圖表設定隱藏'}；${showZeroBaseline ? '橘色虛線為 0 個月基準線' : '0 個月基準線依目前圖表設定隱藏'}。資料沿用應用程式的 WHO 參考曲線，僅供趨勢參考，請由醫療專業人員判讀。`, style: 'muted', margin: [0, 0, 0, 8] },
                      ...growthCharts.map(chart => ({
                        unbreakable: true,
                        stack: [
                          {
                            columns: [
                              { text: `${chart.label}（${chart.unit}）`, width: 'auto' },
                              { text: '|', width: 'auto', alignment: 'center', margin: [0, 0, 8, 0] },
                              { text: '矯正月齡', width: 'auto' }
                            ],
                            columnGap: 0,
                            style: 'noteTitle',
                            margin: [0, 8, 0, 3]
                          },
                          { svg: chart.svg, fit: [510, 250], margin: [0, 0, 0, 2] },
                          ...(chart.pointsCount === 0 ? [{ text: `目前沒有可繪製的矯正月齡測量點${babyInfo.dueDate ? '' : '；請先設定預產期'}；百分位參考曲線${showPercentiles ? '仍有顯示' : '已依目前圖表設定隱藏'}；0 個月基準線${showZeroBaseline ? '仍有顯示' : '已依目前圖表設定隱藏'}。`, style: 'muted', margin: [0, 0, 0, 6] }] : [])
                        ]
                      }))
                ],
                margin: [0, 0, 0, 14]
              }] : []),
              ...(pdfExportOptions.careLogs ? [{
                stack: [
                      { text: '照護日誌', style: 'sectionTitle' },
                  pdfLogs.length === 0
                    ? { text: '尚無照護日誌', style: 'emptyState', margin: [0, 0, 0, 10] }
                    : {
                        table: {
                          headerRows: 1,
                          widths: ['auto', 'auto', 'auto', '*', 'auto'],
                          dontBreakRows: true,
                          body: [
                            [
                              { text: '日期', style: 'tableHeader' },
                              { text: '時間', style: 'tableHeader' },
                              { text: '類型', style: 'tableHeader' },
                              { text: '內容', style: 'tableHeader' },
                              { text: '數量', style: 'tableHeader' }
                            ],
                            ...pdfLogs.map((log) => [
                              { text: log.date || '未設定日期', style: 'tableCell' },
                              { text: format24HourTime(log.time) || '—', style: 'tableCell' },
                              { text: careLogTypeLabels[log.type] || log.type || '其他', style: 'tableCell' },
                              { text: [formatCareLogDetail(log), formatCareLogSupplement(log)].filter(Boolean).join('\n'), style: 'tableCell' },
                              { text: formatCareLogAmount(log) || '—', style: 'tableCell' }
                            ])
                          ]
                        },
                        layout: {
                          hLineColor: () => '#E2E8F0',
                          vLineColor: () => '#E2E8F0',
                          hLineWidth: () => 0.5,
                          vLineWidth: () => 0.5
                        },
                        margin: [0, 0, 0, 14]
                      }
                ]
              }] : []),
              ...(pdfExportOptions.doctor ? [{
                stack: [
                  { text: '看診摘要', style: 'sectionTitle' },
                  doctorVisitSummary.trim()
                    ? { text: doctorVisitSummary.trim(), style: 'listItem', margin: [0, 0, 0, 10] }
                    : { text: '尚未填寫', style: 'emptyState', margin: [0, 0, 0, 10] }
                ]
              },
              {
                stack: [
                  { text: '看診備忘與門診提問', style: 'sectionTitle' },
                  pdfDoctorNotes.length === 0
                    ? { text: '無門診提問紀錄', style: 'emptyState', margin: [0, 0, 0, 10] }
                    : {
                        ul: pdfDoctorNotes.map((note) => ({
                          text: [
                            {
                              text: `${note.date || '未設定日期'} ${format24HourTime(note.time)}｜${
                                note.category || note.tag || '門診提問'
                              }｜${note.question}${note.answer ? `\n醫師答覆：${note.answer}` : ''}\n`
                            },
                            {
                              text: note.answered ? '醫師解答' : '尚未解答',
                              style: note.answered ? 'answered' : 'unanswered'
                            }
                          ],
                          style: 'listItem'
                        })),
                        margin: [0, 0, 0, 12]
                      }
                ]
              }] : []),
              ...(pdfExportOptions.notes ? [{
                stack: [
                  { text: '筆記本', style: 'sectionTitle' },
                  pdfNotes.length === 0
                    ? { text: '無筆記紀錄', style: 'emptyState', margin: [0, 0, 0, 10] }
                    : {
                        stack: pdfNotes.map((note) => ({
                          table: {
                            widths: ['*'],
                            body: [[
                              {
                                fillColor: '#F8FAFC',
                                margin: [9, 8, 9, 8],
                                stack: [
                                  {
                                    text: [
                                      { text: `【${note.category}】${note.title} `, bold: true },
                                      { text: `(${note.createdAt})`, style: 'muted' }
                                    ],
                                    style: 'noteTitle'
                                  },
                                  ...(note.content
                                    ? [{ text: note.content, style: 'noteContent' }]
                                    : [])
                                ]
                              }
                            ]]
                          },
                          layout: { hLineWidth: () => 0, vLineWidth: () => 0 },
                          margin: [0, 0, 0, 7]
                        }))
                      }
                ],
                margin: [0, 0, 0, 6]
              }] : []),
              {
                text: '本報告由「巴掌小太陽 · 早產兒照護小幫手」自動生成，僅供看診時輔助醫療團隊參考。',
                style: 'footer'
              }
            ]
          };

          const filename = `${babyInfo.name || '寶寶'}_巴掌小太陽·早產兒門診照護與生長報告_${formatLocalDateTimeForFileName()}.pdf`;
          pdfMake.createPdf(docDefinition).download(filename, () => {
            setIsExporting(false);
            setPdfPassword('');
            setPdfPasswordConfirm('');
            showToast('✅ PDF 報告已順利匯出下載！');
          });
        } catch (err) {
          console.error(err);
          setIsExporting(false);
          setPdfPassword('');
          setPdfPasswordConfirm('');
          showToast('❌ PDF 報告產生失敗，請稍後再試。若問題持續發生，請確認瀏覽器可正常下載檔案。');
        }
      };

      const ageData = React.useMemo(() => {
        return calculateAges(babyInfo.birthDate, babyInfo.dueDate);
      }, [babyInfo.birthDate, babyInfo.dueDate]);

      const latestWeightDisplay = React.useMemo(() => {
        const latestEntry = [...growthHistory]
          .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
          // Treat an explicitly-set empty string as a valid value (so clearing a value shows as "—")
          .find(item => typeof item.weight !== 'undefined' && item.weight !== null);
        return latestEntry ? latestEntry.weight : '';
      }, [growthHistory]);

      const getLocalDateInputValue = () => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      };
      const getLocalTimeInputValue = () => {
        const now = new Date();
        return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      };
      const format24HourTime = (value) => {
        const match = String(value || '').match(/^(\d{1,2}):(\d{2})/);
        return match ? `${String(Number(match[1])).padStart(2, '0')}:${match[2]}` : '';
      };
      const [newDoctorQuestion, setNewDoctorQuestion] = React.useState('');
      const [newDoctorAnswer, setNewDoctorAnswer] = React.useState('');
      const [editingDoctorNoteId, setEditingDoctorNoteId] = React.useState(null);
      const [doctorNoteDate, setDoctorNoteDate] = React.useState(getLocalDateInputValue);
      const [doctorNoteTime, setDoctorNoteTime] = React.useState(getLocalTimeInputValue);
      const [doctorNoteCategory, setDoctorNoteCategory] = React.useState('門診提問');
      const [showAddLogModal, setShowAddLogModal] = React.useState(false);
      const [editingLogId, setEditingLogId] = React.useState(null);
      const [newLogType, setNewLogType] = React.useState('feeding');
      const [newLogDate, setNewLogDate] = React.useState(getLocalDateInputValue);
      const [newLogTime, setNewLogTime] = React.useState(getLocalTimeInputValue);
      const [newLogDetail, setNewLogDetail] = React.useState('');
      const [newLogNotes, setNewLogNotes] = React.useState('');
      const [newLogMilkType, setNewLogMilkType] = React.useState('');
      const [newLogFeedingMethod, setNewLogFeedingMethod] = React.useState('');
      const [newLogAmount, setNewLogAmount] = React.useState('');
      const [showVaccinationModal, setShowVaccinationModal] = React.useState(false);
      const [showSolidFoodModal, setShowSolidFoodModal] = React.useState(false);
      const [vaccinationForm, setVaccinationForm] = React.useState({
        vaccineName: '', doseNumber: 1, dose: '', doseUnit: 'mL', customDoseUnit: '', date: getLocalDateInputValue(), location: '', sideEffects: '', notes: ''
      });
      const [solidFoodForm, setSolidFoodForm] = React.useState({
        foodName: '', date: getLocalDateInputValue(), amount: '', allergySeverity: 'none', reactions: '', notes: ''
      });
      const safeFoods = ['十倍粥', '南瓜泥', '地瓜泥', '胡蘿蔔泥', '蘋果泥'];
      const allergyWarningFoods = ['花生', '堅果', '蛋', '牛奶', '小麥', '魚類', '蝦蟹'];

      const todayTotalMilk = React.useMemo(() => {
        const now = new Date();
        const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        return logs
          .filter(l => l.type === 'feeding' && l.amount && String(l.date || '').slice(0, 10) === today)
          .reduce((sum, l) => sum + (parseInt(String(l.amount).replace(/[^\d.-]/g, ''), 10) || 0), 0);
      }, [logs]);

      const targetMilkNum = parseInt(babyInfo.targetDailyMilk || '0', 10);
      const milkPercent = targetMilkNum > 0 ? Math.min(100, Math.round((todayTotalMilk / targetMilkNum) * 100)) : 0;

      const handleAddLog = (e) => {
        e.preventDefault();
        if (newLogType === 'vaccination') {
          if (!vaccinationForm.vaccineName.trim() || !vaccinationForm.date) return;
          if (editingLogId !== null) {
            const editingLog = logs.find(log => log.id === editingLogId);
            const existingRecord = vaccinationLogs.find(record => (
              record.id === editingLog?.sourceId
              || (record.date === editingLog?.date && editingLog.detail?.includes(record.vaccineName))
            ));
            const updatedRecord = existingRecord ? {
              ...existingRecord,
              vaccineName: vaccinationForm.vaccineName.trim(),
              doseNumber: Number(vaccinationForm.doseNumber) || 1,
              dose: formatVaccinationDose(vaccinationForm),
              date: vaccinationForm.date,
              location: vaccinationForm.location.trim(),
              sideEffects: vaccinationForm.sideEffects.split(/[,，、\n]/).map(item => item.trim()).filter(Boolean),
              notes: vaccinationForm.notes.trim()
            } : null;
            const updatedVaccinationLogs = updatedRecord
              ? vaccinationLogs.map(record => record.id === updatedRecord.id ? updatedRecord : record)
              : vaccinationLogs;
            setVaccinationLogs(updatedVaccinationLogs);
            safeSetStorageItem('sun_baby_vaccination_logs_v1', JSON.stringify(updatedVaccinationLogs));
            setLogs(prevLogs => prevLogs.map(log => (
              log.id === editingLogId
                ? {
                    ...log,
                    date: vaccinationForm.date,
                    time: newLogTime,
                    detail: `💉 ${vaccinationForm.vaccineName.trim()}（第 ${Number(vaccinationForm.doseNumber) || 1} 劑）`,
                    amount: null,
                    notes: vaccinationForm.notes.trim()
                  }
                : log
            )));
            showToast('💾 已儲存疫苗接種紀錄修改！');
            setShowAddLogModal(false);
            setEditingLogId(null);
            return;
          }
          if (!ensureStorageCapacityForNewData()) return;
          const vaccinationRecord = {
            id: String(Date.now()),
            vaccineName: vaccinationForm.vaccineName.trim(),
            doseNumber: Number(vaccinationForm.doseNumber) || 1,
            dose: formatVaccinationDose(vaccinationForm),
            date: vaccinationForm.date,
            location: vaccinationForm.location.trim(),
            sideEffects: vaccinationForm.sideEffects.split(/[,，、\n]/).map(item => item.trim()).filter(Boolean),
            notes: vaccinationForm.notes.trim()
          };
          setVaccinationLogs(prevLogs => [vaccinationRecord, ...prevLogs]);
          safeSetStorageItem('sun_baby_vaccination_logs_v1', JSON.stringify([vaccinationRecord, ...vaccinationLogs]));
          setLogs(prevLogs => [{
            id: `${Date.now()}-vaccination`,
            date: vaccinationForm.date,
            type: 'vaccination',
            sourceId: vaccinationRecord.id,
            time: newLogTime,
            detail: `💉 ${vaccinationRecord.vaccineName}（第 ${vaccinationRecord.doseNumber} 劑）`,
            amount: null,
            notes: vaccinationRecord.notes,
          }, ...prevLogs]);
          showToast('💉 已新增疫苗接種紀錄！');
          setShowAddLogModal(false);
          return;
        }
        if (newLogType === 'solidFood') {
          if (!solidFoodForm.foodName.trim() || !solidFoodForm.date) return;
          if (editingLogId !== null) {
            const editingLog = logs.find(log => log.id === editingLogId);
            const existingRecord = solidFoodLogs.find(record => (
              record.id === editingLog?.sourceId
              || (record.date === editingLog?.date && editingLog.detail?.includes(record.foodName))
            ));
            const updatedRecord = existingRecord ? {
              ...existingRecord,
              foodName: solidFoodForm.foodName.trim(),
              date: solidFoodForm.date,
              amount: Number(solidFoodForm.amount) || 0,
              allergySeverity: solidFoodForm.allergySeverity,
              reactions: solidFoodForm.reactions.split(/[,，、\n]/).map(item => item.trim()).filter(Boolean),
              notes: solidFoodForm.notes.trim()
            } : null;
            const updatedSolidFoodLogs = updatedRecord
              ? solidFoodLogs.map(record => record.id === updatedRecord.id ? updatedRecord : record)
              : solidFoodLogs;
            setSolidFoodLogs(updatedSolidFoodLogs);
            safeSetStorageItem('sun_baby_solid_food_logs_v1', JSON.stringify(updatedSolidFoodLogs));
            setLogs(prevLogs => prevLogs.map(log => (
              log.id === editingLogId
                ? {
                    ...log,
                    date: solidFoodForm.date,
                    time: newLogTime,
                    detail: `🥣 ${solidFoodForm.foodName.trim()}`,
                    amount: solidFoodForm.amount ? `${Number(solidFoodForm.amount) || 0}ml/湯匙` : null,
                    notes: solidFoodForm.notes.trim()
                  }
                : log
            )));
            showToast('💾 已儲存副食品試吃紀錄修改！');
            setShowAddLogModal(false);
            setEditingLogId(null);
            return;
          }
          if (!ensureStorageCapacityForNewData()) return;
          const solidFoodRecord = {
            id: String(Date.now()),
            foodName: solidFoodForm.foodName.trim(),
            date: solidFoodForm.date,
            amount: Number(solidFoodForm.amount) || 0,
            allergySeverity: solidFoodForm.allergySeverity,
            reactions: solidFoodForm.reactions.split(/[,，、\n]/).map(item => item.trim()).filter(Boolean),
            notes: solidFoodForm.notes.trim()
          };
          setSolidFoodLogs(prevLogs => [solidFoodRecord, ...prevLogs]);
          safeSetStorageItem('sun_baby_solid_food_logs_v1', JSON.stringify([solidFoodRecord, ...solidFoodLogs]));
          setLogs(prevLogs => [{
            id: `${Date.now()}-solid-food`,
            type: 'solidFood',
            sourceId: solidFoodRecord.id,
            time: newLogTime,
            date: solidFoodForm.date,
            detail: `🥣 ${solidFoodRecord.foodName}`,
            amount: solidFoodRecord.amount ? `${solidFoodRecord.amount}ml/湯匙` : null,
            notes: solidFoodRecord.notes,
          }, ...prevLogs]);
          showToast('🥣 已新增副食品試吃紀錄！');
          setShowAddLogModal(false);
          return;
        }

        const customDetail = newLogDetail.trim();
        const feedingTags = [newLogFeedingMethod, newLogMilkType].filter(Boolean).join('');
        const detail = newLogType === 'feeding'
          ? [feedingTags, customDetail].filter(Boolean).join(' ')
          : customDetail;
        const amount = newLogType === 'feeding' && newLogAmount ? `${newLogAmount}ml` : null;

        if (editingLogId !== null) {
          setLogs(prevLogs => prevLogs.map(log => (
            log.id === editingLogId
              ? { ...log, date: newLogDate, time: newLogTime, type: newLogType, detail, amount, notes: newLogNotes.trim() }
              : log
          )));
          showToast('💾 已儲存照護紀錄修改！');
        } else {
          if (!ensureStorageCapacityForNewData()) return;
          setLogs(prevLogs => [{
            id: Date.now(),
            date: newLogDate,
            type: newLogType,
            time: newLogTime,
            detail,
            amount,
            notes: newLogNotes.trim(),
          }, ...prevLogs]);
          showToast('🍼 已新增今日快照紀錄！');
        }

        setShowAddLogModal(false);
        setEditingLogId(null);
        setNewLogDetail('');
        setNewLogNotes('');
        setNewLogMilkType('');
        setNewLogFeedingMethod('');
        setNewLogAmount('');
      };

      const handleAddCareReminder = (e) => {
        e.preventDefault();
        const title = reminderTitle.trim() || '照護提醒';
        const dueAt = new Date(reminderDateTime);
        const intervalValue = Number(repeatIntervalValue);
        const intervalMax = repeatIntervalUnit === 'hours' ? 24 : 1440;
        if (
          !reminderDateTime
          || Number.isNaN(dueAt.getTime())
          || (repeatReminder && (!Number.isInteger(intervalValue) || intervalValue < 1 || intervalValue > intervalMax))
        ) {
          showToast('⚠️ 請填寫有效的提醒時間與重複間隔。');
          return;
        }
        const repeatIntervalMinutes = repeatReminder
          ? intervalValue * (repeatIntervalUnit === 'hours' ? 60 : 1)
          : null;
        if (editingReminderId !== null) {
          setCareReminders(prevReminders => prevReminders.map(reminder => (
            reminder.id === editingReminderId
              ? { ...reminder, title, dueAt: dueAt.toISOString(), repeatIntervalMinutes, nextRepeatToastAt: null }
              : reminder
          )));
          notifiedReminderIdsRef.current.delete(editingReminderId);
          repeatedReminderToastTimesRef.current.delete(editingReminderId);
          setReminderNow(Date.now());
          setEditingReminderId(null);
          setReminderTitle('');
          setReminderDateTime(getReminderDefaultDateTime());
          resetReminderRepeatSettings();
          setShowReminderForm(false);
          showToast(repeatIntervalMinutes === null
            ? '✅ 已更新照護提醒！'
            : `✅ 已更新照護提醒！下一次提醒時間：${formatReminderDateTimeInput(dueAt).replace('T', ' ')}`);
          return;
        }
        if (!ensureStorageCapacityForNewData()) return;
        setCareReminders(prevReminders => [{
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          title,
          dueAt: dueAt.toISOString(),
          repeatIntervalMinutes,
          nextRepeatToastAt: null
        }, ...prevReminders]);
        setReminderNow(Date.now());
        setReminderTitle('');
        setReminderDateTime(getReminderDefaultDateTime());
        resetReminderRepeatSettings();
        setShowReminderForm(false);
        showToast(repeatIntervalMinutes === null
          ? '✅ 已新增照護提醒！'
          : `✅ 已新增照護提醒！下一次提醒時間：${formatReminderDateTimeInput(dueAt).replace('T', ' ')}`);
      };

      const handleEditCareReminder = reminder => {
        const dueAt = new Date(reminder.dueAt);
        if (Number.isNaN(dueAt.getTime())) {
          showToast('⚠️ 提醒時間格式不正確，無法編輯。');
          return;
        }
        setEditingReminderId(reminder.id);
        setReminderTitle(reminder.title);
        setReminderDateTime(formatReminderDateTimeInput(dueAt));
        const interval = reminder.repeatIntervalMinutes;
        const isRepeating = Number.isInteger(interval) && interval >= 1 && interval <= 1440;
        setRepeatReminder(isRepeating);
        setRepeatIntervalUnit(isRepeating && interval % 60 === 0 ? 'hours' : 'minutes');
        setRepeatIntervalValue(isRepeating && interval % 60 === 0 ? String(interval / 60) : String(interval || 1));
        setShowReminderForm(true);
      };

      const handleDeleteCareReminder = reminder => {
        if (!window.confirm(`確定要刪除「${reminder.title || '照護提醒'}」提醒嗎？`)) return;
        setCareReminders(prevReminders => prevReminders.filter(item => item.id !== reminder.id));
        notifiedReminderIdsRef.current.delete(reminder.id);
        repeatedReminderToastTimesRef.current.delete(reminder.id);
        showToast('🗑️ 已刪除照護提醒。');
      };

      const handleCompleteCareReminder = reminder => {
        const interval = getCareReminderRepeatInterval(reminder);
        if (interval !== null) {
          const nextDueAt = new Date(Date.now() + interval * 60 * 1000);
          setCareReminders(prevReminders => prevReminders.map(item => (
            item.id === reminder.id ? { ...item, dueAt: nextDueAt.toISOString(), nextRepeatToastAt: null } : item
          )));
          notifiedReminderIdsRef.current.delete(reminder.id);
          repeatedReminderToastTimesRef.current.delete(reminder.id);
          setReminderNow(Date.now());
          showToast(`🔁 已完成本次提醒，將於 ${formatReminderDateTimeInput(nextDueAt).replace('T', ' ')} 再提醒。`);
          return;
        }
        setCareReminders(prevReminders => prevReminders.filter(item => item.id !== reminder.id));
        notifiedReminderIdsRef.current.delete(reminder.id);
        repeatedReminderToastTimesRef.current.delete(reminder.id);
      };

      const handleStartEditLog = (log) => {
        setEditingLogId(log.id);
        setNewLogDate(log.date || getLocalDateInputValue());
        setNewLogTime(format24HourTime(log.time) || getLocalTimeInputValue());
        setNewLogNotes(log.notes || '');
        setNewLogType(log.type);
        const logDetail = log.detail || '';
        if (log.type === 'feeding') {
          const bracketMatch = logDetail.match(/^\[([^\]]+)\](?:\s*(.*))?$/);
          const tagOptions = [
            { text: '瓶餵母乳', milkType: '母乳', feedingMethod: '瓶餵' },
            { text: '瓶餵配方奶', milkType: '配方奶', feedingMethod: '瓶餵' },
            { text: '瓶餵混合', milkType: '混合', feedingMethod: '瓶餵' },
            { text: '親餵母乳', milkType: '母乳', feedingMethod: '親餵' },
            { text: '親餵配方奶', milkType: '配方奶', feedingMethod: '親餵' },
            { text: '親餵混合', milkType: '混合', feedingMethod: '親餵' },
            { text: '母乳', milkType: '母乳', feedingMethod: '' },
            { text: '配方奶', milkType: '配方奶', feedingMethod: '' },
            { text: '混合', milkType: '混合', feedingMethod: '' },
            { text: '瓶餵', milkType: '', feedingMethod: '瓶餵' },
            { text: '親餵', milkType: '', feedingMethod: '親餵' },
          ];
          const tagSource = bracketMatch?.[1] || logDetail;
          const legacyDefault = logDetail === '瓶餵母乳/配方奶';
          const matchedTag = tagOptions.find(option => tagSource.startsWith(option.text));
          setNewLogMilkType(matchedTag?.milkType || '');
          setNewLogFeedingMethod(matchedTag?.feedingMethod || '');
          const customDetail = bracketMatch
            ? (bracketMatch[2] || '')
            : matchedTag
              ? logDetail.slice(matchedTag.text.length).trim()
              : logDetail;
          setNewLogDetail(legacyDefault ? '' : customDetail);
        } else {
          setNewLogDetail(logDetail);
          setNewLogMilkType('');
          setNewLogFeedingMethod('');
        }
        setNewLogAmount(log.amount ? String(log.amount).replace(/ml$/i, '') : '');
        if (log.type === 'vaccination') {
          const record = vaccinationLogs.find(item => (
            item.id === log.sourceId
            || (item.date === log.date && log.detail?.includes(item.vaccineName))
          ));
          if (record) {
            setVaccinationForm({
              vaccineName: record.vaccineName,
              doseNumber: record.doseNumber || 1,
              ...parseVaccinationDose(record.dose),
              date: record.date || getLocalDateInputValue(),
              location: record.location || '',
              sideEffects: Array.isArray(record.sideEffects) ? record.sideEffects.join('、') : (record.sideEffects || ''),
              notes: record.notes || ''
            });
          }
        }
        if (log.type === 'solidFood') {
          const record = solidFoodLogs.find(item => (
            item.id === log.sourceId
            || (item.date === log.date && log.detail?.includes(item.foodName))
          ));
          if (record) {
            setSolidFoodForm({
              foodName: record.foodName,
              date: record.date || getLocalDateInputValue(),
              amount: record.amount ?? '',
              allergySeverity: record.allergySeverity || 'none',
              reactions: Array.isArray(record.reactions) ? record.reactions.join('、') : (record.reactions || ''),
              notes: record.notes || ''
            });
          }
        }
        setShowAddLogModal(true);
      };

      const handleCancelEditLog = () => {
        setShowAddLogModal(false);
        setEditingLogId(null);
        setNewLogDate(getLocalDateInputValue());
        setNewLogTime(getLocalTimeInputValue());
        setNewLogDetail('');
        setNewLogNotes('');
        setNewLogMilkType('');
        setNewLogFeedingMethod('');
        setNewLogAmount('');
      };

      const handleSaveVaccinationLog = (e) => {
        e.preventDefault();
        if (!vaccinationForm.vaccineName.trim() || !vaccinationForm.date) return;
        if (!ensureStorageCapacityForNewData()) return;
        const record = {
          id: String(Date.now()),
          vaccineName: vaccinationForm.vaccineName.trim(),
          doseNumber: Number(vaccinationForm.doseNumber) || 1,
          dose: formatVaccinationDose(vaccinationForm),
          date: vaccinationForm.date,
          location: vaccinationForm.location.trim(),
          sideEffects: vaccinationForm.sideEffects.split(/[,，、\n]/).map(item => item.trim()).filter(Boolean),
          notes: vaccinationForm.notes.trim()
        };
        setVaccinationLogs(prevLogs => [record, ...prevLogs]);
        localStorage.setItem('sun_baby_vaccination_logs_v1', JSON.stringify([record, ...vaccinationLogs]));
        setShowVaccinationModal(false);
        setVaccinationForm({ vaccineName: '', doseNumber: 1, dose: '', doseUnit: 'mL', customDoseUnit: '', date: getLocalDateInputValue(), location: '', sideEffects: '', notes: '' });
        showToast('💉 已新增疫苗接種紀錄！');
      };

      const handleSaveSolidFoodLog = (e) => {
        e.preventDefault();
        if (!solidFoodForm.foodName.trim() || !solidFoodForm.date) return;
        if (!ensureStorageCapacityForNewData()) return;
        const record = {
          id: String(Date.now()),
          foodName: solidFoodForm.foodName.trim(),
          date: solidFoodForm.date,
          amount: Number(solidFoodForm.amount) || 0,
          allergySeverity: solidFoodForm.allergySeverity,
          reactions: solidFoodForm.reactions.split(/[,，、\n]/).map(item => item.trim()).filter(Boolean),
          notes: solidFoodForm.notes.trim()
        };
        setSolidFoodLogs(prevLogs => [record, ...prevLogs]);
        localStorage.setItem('sun_baby_solid_food_logs_v1', JSON.stringify([record, ...solidFoodLogs]));
        setShowSolidFoodModal(false);
        setSolidFoodForm({ foodName: '', date: getLocalDateInputValue(), amount: '', allergySeverity: 'none', reactions: '', notes: '' });
        showToast('🥣 已新增副食品試吃紀錄！');
      };

      const handleDeleteLog = (id) => {
        if (!window.confirm('確定要刪除這筆照護紀錄嗎？')) return;
        if (editingLogId === id) handleCancelEditLog();
        setLogs(prevLogs => prevLogs.filter(log => log.id !== id));
        showToast('🗑️ 已刪除照護紀錄');
      };

      const handleAddDoctorNote = (e) => {
        e.preventDefault();
        if (!newDoctorQuestion.trim()) return;
        if (editingDoctorNoteId !== null) {
          setDoctorNotes(prevNotes => prevNotes.map(note => (
            note.id === editingDoctorNoteId
              ? { ...note, question: newDoctorQuestion.trim(), answer: newDoctorAnswer.trim(), date: doctorNoteDate, time: doctorNoteTime, category: doctorNoteCategory }
              : note
          )).sort((a, b) => `${b.date || ''} ${b.time || ''}`.localeCompare(`${a.date || ''} ${a.time || ''}`)));
          showToast('💾 已儲存看診備忘修改！');
        } else {
          if (!ensureStorageCapacityForNewData()) return;
          setDoctorNotes(prevNotes => [
            ...prevNotes,
            { id: Date.now(), date: doctorNoteDate, time: doctorNoteTime, category: doctorNoteCategory, question: newDoctorQuestion.trim(), answer: newDoctorAnswer.trim(), answered: false, tag: doctorNoteCategory }
          ].sort((a, b) => `${b.date || ''} ${b.time || ''}`.localeCompare(`${a.date || ''} ${a.time || ''}`)));
          showToast('🏥 已新增看診問題！');
        }
        setNewDoctorQuestion('');
        setNewDoctorAnswer('');
        setEditingDoctorNoteId(null);
        setDoctorNoteDate(getLocalDateInputValue());
        setDoctorNoteTime(getLocalTimeInputValue());
        setDoctorNoteCategory('門診提問');
      };

      const handleStartEditDoctorNote = (note) => {
        setEditingDoctorNoteId(note.id);
        setDoctorNoteDate(note.date || getLocalDateInputValue());
        setDoctorNoteTime(note.time || '09:00');
        setDoctorNoteCategory(note.category || note.tag || '門診提問');
        setNewDoctorQuestion(note.question || '');
        setNewDoctorAnswer(note.answer || '');
      };

      const handleCancelEditDoctorNote = () => {
        setEditingDoctorNoteId(null);
        setDoctorNoteDate(getLocalDateInputValue());
        setDoctorNoteTime(getLocalTimeInputValue());
        setDoctorNoteCategory('門診提問');
        setNewDoctorQuestion('');
        setNewDoctorAnswer('');
      };

      const handleDeleteDoctorNote = (id) => {
        if (!window.confirm('確定要刪除這筆看診備忘嗎？')) return;
        if (editingDoctorNoteId === id) handleCancelEditDoctorNote();
        setDoctorNotes(prevNotes => prevNotes.filter(note => note.id !== id));
        showToast('🗑️ 已刪除看診備忘');
      };

      const handleStartEditDoctorVisitSummary = () => {
        setDoctorVisitSummaryDraft(doctorVisitSummary);
        setIsEditingDoctorVisitSummary(true);
      };

      const handleCancelEditDoctorVisitSummary = () => {
        setDoctorVisitSummaryDraft(doctorVisitSummary);
        setIsEditingDoctorVisitSummary(false);
      };

      const handleSaveDoctorVisitSummary = () => {
        const summary = doctorVisitSummaryDraft.trim();
        if (!summary) {
          showToast('⚠️ 請先輸入看診摘要內容');
          return;
        }
        if (!doctorVisitSummary.trim() && !ensureStorageCapacityForNewData()) return;
        setDoctorVisitSummary(summary);
        setDoctorVisitSummaryDraft(summary);
        setIsEditingDoctorVisitSummary(false);
        showToast('💾 已儲存看診摘要');
      };

      const handleDeleteDoctorVisitSummary = () => {
        if (!window.confirm('確定要刪除看診摘要嗎？')) return;
        setDoctorVisitSummary('');
        setDoctorVisitSummaryDraft('');
        setIsEditingDoctorVisitSummary(false);
        showToast('🗑️ 已刪除看診摘要');
      };

      const filteredNotes = notes.filter(n => (
        (filterNoteCategory === '全部' || (n.category || n.tag || '未分類') === filterNoteCategory)
        && (
          !noteSearchQuery.trim()
          || `${n.title || ''} ${n.content || ''}`.toLowerCase().includes(noteSearchQuery.trim().toLowerCase())
        )
      ));
      const availableNoteCategories = [...new Set([
        '未分類',
        ...noteCategories,
        ...notes.map(note => note.category || note.tag || '未分類')
      ])].filter(category => category && category !== '全部');
      const isCareLogDateRangeInvalid = careLogStartDate && careLogEndDate && careLogStartDate > careLogEndDate;
      const filteredCareLogs = isCareLogDateRangeInvalid ? [] : logs.filter(log => (
        (!careLogStartDate || (log.date && log.date >= careLogStartDate))
        && (!careLogEndDate || (log.date && log.date <= careLogEndDate))
        && (careLogCategory === 'all' || log.type === careLogCategory)
      ));
      const doctorNoteCategories = [...new Set([
        '門診提問',
        '看診備忘',
        ...doctorNotes.map(note => note.category || note.tag || '門診提問')
      ])].filter(Boolean);
      const isDoctorNoteDateRangeInvalid = doctorNoteFilterStartDate && doctorNoteFilterEndDate && doctorNoteFilterStartDate > doctorNoteFilterEndDate;
      const filteredDoctorNotes = isDoctorNoteDateRangeInvalid ? [] : doctorNotes.filter(note => (
        (!doctorNoteFilterStartDate || (note.date && note.date >= doctorNoteFilterStartDate))
        && (!doctorNoteFilterEndDate || (note.date && note.date <= doctorNoteFilterEndDate))
        && (doctorNoteFilterCategory === 'all' || (note.category || note.tag || '門診提問') === doctorNoteFilterCategory)
        && (
          !doctorNoteSearchQuery.trim()
          || `${note.question || ''} ${note.answer || ''}`.toLowerCase().includes(doctorNoteSearchQuery.trim().toLowerCase())
        )
      ));

      const themeBg = isNightMode ? 'bg-slate-900 text-slate-100' : 'bg-amber-50/50 text-slate-800';
      const cardBg = isNightMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-amber-100';

      return (
        <div className={`min-h-screen font-sans ${themeBg} transition-colors duration-200 relative`}>
          {toastMsg && (
            <div
              style={{
                position: 'fixed',
                top: 'max(20px, env(safe-area-inset-top))',
                left: '0',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2147483647,
                pointerEvents: 'none'
              }}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              <div
                style={{
                  pointerEvents: 'auto',
                  maxWidth: 'calc(100vw - 32px)',
                  backgroundColor: '#1e293b',
                  color: '#fff',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,.3)',
                  border: '1px solid #334155',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center'
                }}
              >
                  {isInfoToast && <span className="shrink-0" aria-hidden="true">ℹ️</span>}
                <span>{toastMsg}</span>
              </div>
            </div>
          )}

          {/* Header Bar */}
          <header className={`sticky top-0 z-30 border-b overflow-hidden ${isNightMode ? 'bg-slate-900 border-slate-800' : 'bg-amber-500 text-white border-amber-600'}`}>
            <div className="max-w-4xl mx-auto min-w-0 px-3 py-3 sm:px-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-2 min-w-0">
                <div className="p-2 bg-yellow-400 text-amber-900 rounded-full shadow-md shrink-0">
                  <Icon name="sun" className="w-5 h-5 fill-current" />
                </div>
                <div className="min-w-0">
                  <h1 className="font-bold text-base flex items-center gap-2">巴掌小太陽</h1>
                  <p className="text-[11px] opacity-90">早產兒照護小幫手</p>
                </div>
              </div>
              <div className="header-tools flex flex-nowrap items-center justify-start gap-1 min-w-0 w-full max-w-full overflow-x-auto overflow-y-hidden whitespace-nowrap pb-0.5 sm:w-auto sm:justify-end sm:gap-1.5">
                <button
                  onClick={() => setShowNotesModal(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 shadow-sm flex-shrink-0"
                  title="開啟筆記本"
                >
                  <Icon name="book" className="w-4 h-4" />
                  <span className="hidden md:inline">筆記本</span>
                </button>
                <button
                  onClick={() => setShowBackupModal(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 shadow-sm flex-shrink-0"
                  title="開啟備份與還原"
                >
                  <Icon name="database" className="w-4 h-4" />
                  <span className="hidden md:inline">備份/還原</span>
                </button>
                <button
                  onClick={() => setShowDataMgmtModal(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 shadow-sm flex-shrink-0"
                  title="開啟資料管理"
                >
                  <Icon name="trash" className="w-4 h-4" />
                  <span className="hidden md:inline">資料管理</span>
                </button>
                <button
                  onClick={() => {
                    refreshStorageUsage();
                    setShowStorageManagerModal(true);
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 shadow-sm flex-shrink-0"
                  title="儲存空間管理"
                >
                  <Icon name="hardDrive" className="w-4 h-4" />
                  <span className="hidden md:inline">儲存空間</span>
                </button>
                <div className="flex items-center rounded-xl bg-amber-600 text-white shadow-sm flex-shrink-0">
                  <button
                    onClick={() => handleDownloadPDF()}
                    disabled={isExporting}
                    className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 disabled:opacity-50"
                    title="依目前設定下載完整記錄 PDF"
                  >
                    <Icon name="download" className="w-4 h-4" />
                    <span className="hidden md:inline">{isExporting ? '匯出中...' : 'PDF'}</span>
                  </button>
                  <button
                    onClick={openPdfSettingsModal}
                    disabled={isExporting}
                    className="p-1.5 border-l border-amber-400/60 hover:bg-amber-700 rounded-r-xl transition-colors disabled:opacity-50"
                    title="匯出 PDF 設定"
                  >
                    <Icon name="settings" className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => setShowHelpModal(true)}
                  className="p-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-colors flex-shrink-0"
                  title="說明與特色"
                >
                  <Icon name="info" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const nextIsNightMode = !isNightMode;
                    setIsNightMode(nextIsNightMode);
                    try {
                      localStorage.setItem('sun_baby_night_mode_v1', String(nextIsNightMode));
                      showToast(`✅ 已${nextIsNightMode ? '開啟' : '關閉'}夜間模式`);
                    } catch (error) {
                      console.error('Failed to save night mode preference:', error);
                      showToast(`⚠️ 已${nextIsNightMode ? '開啟' : '關閉'}夜間模式，但偏好儲存失敗，重新整理後可能恢復原設定。`);
                    }
                  }}
                  className="p-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-colors flex-shrink-0"
                  title="切換夜間模式"
                >
                  <Icon name="moon" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          <main className="max-w-4xl mx-auto px-3 pt-4 pb-20 sm:px-4 md:px-6 lg:px-8 xl:px-10" style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom))' }}>
            {/* Baby Info Card */}
            <div className={`p-4 rounded-2xl border shadow-sm mb-4 md:p-5 ${cardBg}`}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-amber-200 border-2 border-amber-400 flex items-center justify-center text-2xl shadow-inner shrink-0">
                    👶
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold">
                        {babyInfo.name ? `${babyInfo.name} 寶寶` : '小太陽寶寶'}
                      </h2>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                        {babyInfo.gender === 'girl' ? '👧 女寶' : '👦 男寶'}
                      </span>
                      <button
                        onClick={handleOpenEditModal}
                        className="px-2 py-0.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs flex items-center gap-1 font-semibold transition-colors"
                      >
                        <Icon name="edit" className="w-3 h-3" />
                        <span>自訂/修改</span>
                      </button>
                    </div>
                    <div className="text-xs font-bold text-amber-600 mt-0.5 flex items-center gap-1">
                      <span>⚡️ {ageData.correctedText}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {ageData.chronoText} {babyInfo.gestationalWeeks ? `(${babyInfo.gestationalWeeks}週出生)` : ''}
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-[11px] text-slate-400">當前體重</div>
                  <div className="text-xl font-black text-amber-600">
                    {latestWeightDisplay ? `${latestWeightDisplay} kg` : '— kg'}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
              {[
                { id: 'dashboard', label: '☀️ 今日快照' },
                { id: 'growth', label: '📈 矯正月齡生長曲線' },
                { id: 'care', label: '🍼 照護日誌' },
                { id: 'doctor', label: '🏥 看診備忘' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-white border text-slate-600 hover:bg-amber-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base flex items-center gap-2 whitespace-nowrap">
                  ☀️ <span>今日快照</span>
                </h3>
                <div className={`p-4 rounded-2xl border ${cardBg}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      <Icon name="droplet" className="text-amber-500 w-4 h-4" />
                      今日總奶量進度（目前設定的每日目標）
                    </span>
                    <span className="text-base font-bold text-amber-600">
                      {todayTotalMilk} / {babyInfo.targetDailyMilk || '0'} ml
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${milkPercent}%` }}></div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 text-right">
                    {targetMilkNum > 0 ? `已達成每日目標的 ${milkPercent}%` : '未設定每日目標奶量 (可點擊「自訂/修改」設定)'}
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border ${cardBg}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-sm">☀️ 照護提醒</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        僅在網頁開啟時提示；重新開啟後仍會顯示尚未完成的到期提醒。
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        提醒會納入「備份與還原」；更換裝置時，請先備份再匯入。
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (!showReminderForm) {
                          setEditingReminderId(null);
                          setReminderTitle('');
                        } else {
                          setEditingReminderId(null);
                        }
                        resetReminderRepeatSettings();
                        setReminderDateTime(getReminderDefaultDateTime());
                        setShowReminderForm(value => !value);
                      }}
                      className="shrink-0 px-3 py-2 rounded-xl bg-amber-100 text-amber-800 text-xs font-bold hover:bg-amber-200"
                    >
                      {showReminderForm ? '收起' : '設定提醒'}
                    </button>
                  </div>

                  {showReminderForm && (
                    <form onSubmit={handleAddCareReminder} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_auto] sm:items-end">
                      <label className="text-xs font-semibold text-slate-600">
                        提醒事項
                        <input
                          type="text"
                          value={reminderTitle}
                          onChange={event => setReminderTitle(event.target.value)}
                          maxLength={80}
                          placeholder="例如：餵奶、尿布檢查、回診或疫苗（可留空）"
                          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-normal text-slate-800"
                        />
                      </label>
                      <div className="text-xs font-semibold text-slate-600">
                        <div>提醒時間</div>
                        <div className="mt-1 grid grid-cols-[1.2fr_1fr] gap-2">
                          <input
                            type="date"
                            aria-label="提醒日期"
                            value={reminderDateTime.slice(0, 10)}
                            onChange={event => setReminderDateTime(`${event.target.value}T${reminderDateTime.slice(11, 16)}`)}
                            required
                            className="w-full min-w-0 rounded-xl border border-slate-200 px-3 py-2 text-sm font-normal text-slate-800"
                          />
                          <input
                            type="text"
                            inputMode="numeric"
                            aria-label="提醒時間（24 小時制）"
                            placeholder="HH:mm"
                            pattern="(?:[01][0-9]|2[0-3]):[0-5][0-9]"
                            title="請輸入 24 小時制時間，例如 16:41"
                            value={reminderDateTime.slice(11, 16)}
                            onChange={event => setReminderDateTime(`${reminderDateTime.slice(0, 10)}T${event.target.value}`)}
                            required
                            className="w-full min-w-0 rounded-xl border border-slate-200 px-3 py-2 text-sm font-normal text-slate-800"
                          />
                        </div>
                        <label className="mt-3 flex items-center gap-2 font-medium">
                          <input
                            type="checkbox"
                            checked={repeatReminder}
                            onChange={event => setRepeatReminder(event.target.checked)}
                            className="h-4 w-4 accent-amber-500"
                          />
                          重複提醒
                        </label>
                        {repeatReminder && (
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="shrink-0">每隔</span>
                              <input
                                type="number"
                                min="1"
                                max={repeatIntervalUnit === 'hours' ? 24 : 1440}
                                step="1"
                                value={repeatIntervalValue}
                                onChange={event => setRepeatIntervalValue(event.target.value)}
                                required
                                aria-label="重複提醒間隔"
                                className="w-20 rounded-xl border border-slate-200 px-2 py-2 text-sm font-normal text-slate-800"
                              />
                              <select
                                value={repeatIntervalUnit}
                                onChange={event => setRepeatIntervalUnit(event.target.value)}
                                aria-label="重複提醒間隔單位"
                                className="rounded-xl border border-slate-200 px-2 py-2 text-sm font-normal text-slate-800"
                              >
                                <option value="minutes">分鐘</option>
                                <option value="hours">小時</option>
                              </select>
                            </div>
                            <p className="text-[11px] font-normal text-slate-500">
                              未完成時會每隔所選時間再次提醒；按「完成本次」後重新計時。
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="submit" className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-white hover:bg-amber-600">
                          {editingReminderId !== null ? '更新' : '儲存'}
                        </button>
                        {editingReminderId !== null && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingReminderId(null);
                              setReminderTitle('');
                              setReminderDateTime(getReminderDefaultDateTime());
                              resetReminderRepeatSettings();
                              setShowReminderForm(false);
                            }}
                            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50"
                          >
                            取消
                          </button>
                        )}
                      </div>
                    </form>
                  )}

                  {careReminders.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {careReminders
                        .slice()
                        .sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime())
                        .map(reminder => {
                          const isDue = new Date(reminder.dueAt).getTime() <= reminderNow;
                          const isRepeating = getCareReminderRepeatInterval(reminder) !== null;
                          return (
                            <div key={reminder.id} className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 ${isDue ? 'bg-amber-100 text-amber-900' : 'bg-slate-50 text-slate-700'}`}>
                              <div className="min-w-0">
                                <div className="truncate text-sm font-semibold">{reminder.title || '照護提醒'}</div>
                                <div className="text-xs opacity-75">
                                  {isDue ? '已到期' : '預定'} · {new Date(reminder.dueAt).toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })}
                                  {isRepeating && (
                                    <span>
                                      {' · 每隔 '}
                                      {reminder.repeatIntervalMinutes % 60 === 0
                                        ? `${reminder.repeatIntervalMinutes / 60} 小時`
                                        : `${reminder.repeatIntervalMinutes} 分鐘`}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex shrink-0 items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => handleEditCareReminder(reminder)}
                                  className="rounded-lg px-2 py-1 text-xs font-bold hover:bg-white/70"
                                  aria-label={`編輯提醒：${reminder.title || '照護提醒'}`}
                                >
                                  編輯
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleCompleteCareReminder(reminder)}
                                  className="rounded-lg px-2 py-1 text-xs font-bold hover:bg-white/70"
                                  aria-label={isRepeating ? `完成本次提醒：${reminder.title || '照護提醒'}` : `完成提醒：${reminder.title || '照護提醒'}`}
                                >
                                  {isRepeating ? '完成本次' : '完成'}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteCareReminder(reminder)}
                                  className="rounded-lg px-2 py-1 text-xs font-bold text-red-700 hover:bg-white/70"
                                  aria-label={`刪除提醒：${reminder.title || '照護提醒'}`}
                                >
                                  刪除
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                  <p className="mt-3 text-[11px] text-slate-400">
                    提醒時間請依照家長安排與醫療團隊建議設定；這不是醫療建議，也不會在關閉網頁後推播。
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Growth Chart */}
            {activeTab === 'growth' && (
              <div className={`p-4 rounded-2xl border space-y-4 md:p-5 ${cardBg}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 md:gap-3">
                  <h3 className="font-bold text-base flex items-center gap-2 whitespace-nowrap">
                    📈 <span>矯正月齡生長曲線圖表</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex rounded-xl bg-slate-100 p-1 text-xs">
                      {[
                        { id: 'weight', label: '體重' },
                        { id: 'height', label: '身長' },
                        { id: 'head', label: '頭圍' },
                      ].map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setSelectedMetric(m.id)}
                          className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                            selectedMetric === m.id ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-600'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex rounded-xl bg-slate-100 p-1 text-xs">
                      <button
                        onClick={() => setSelectedGender('boy')}
                        className={`px-2 py-1 rounded-lg font-bold transition-all ${selectedGender === 'boy' ? 'bg-blue-500 text-white' : 'text-slate-600'}`}
                      >
                        男
                      </button>
                      <button
                        onClick={() => setSelectedGender('girl')}
                        className={`px-2 py-1 rounded-lg font-bold transition-all ${selectedGender === 'girl' ? 'bg-pink-500 text-white' : 'text-slate-600'}`}
                      >
                        女
                      </button>
                    </div>
                  </div>
                </div>

                <PretermGrowthChart
                  metric={selectedMetric}
                  gender={selectedGender}
                  babyInfo={babyInfo}
                  growthHistory={growthHistory}
                  onAddGrowthRecord={handleAddGrowthRecord}
                  onUpdateGrowthRecord={handleUpdateGrowthRecord}
                  onDeleteGrowthRecord={handleDeleteGrowthRecord}
                  onToggleGrowthRecordPlot={handleToggleGrowthRecordPlot}
                  showPercentiles={showPercentiles}
                  setShowPercentiles={setShowPercentiles}
                  showZeroBaseline={showZeroBaseline}
                  setShowZeroBaseline={setShowZeroBaseline}
                  useChronoAxis={useChronoAxis}
                  setUseChronoAxis={setUseChronoAxis}
                  showToast={showToast}
                />

                <div className="space-y-2 pt-2 border-t">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-xs text-slate-700">矯正月齡發展里程碑檢核</h4>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={handleRestoreDefaultMilestones}
                        className="px-2.5 py-1 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-[11px] font-bold flex items-center gap-1"
                      >
                        <Icon name="refresh" className="w-3 h-3" />
                        還原預設項目
                      </button>
                      <button
                        onClick={() => openMilestoneEditor()}
                        className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1"
                      >
                        <Icon name="plus" className="w-3 h-3" />
                        新增發展里程碑
                      </button>
                    </div>
                  </div>
                  {milestones.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setMilestones(milestones.map(item => item.id === m.id ? { ...item, done: !item.done } : item))}
                      className="p-3 rounded-xl border flex items-center gap-2 cursor-pointer hover:bg-amber-50/50 transition-colors bg-white"
                    >
                      <input type="checkbox" checked={m.done} readOnly className="w-4 h-4 accent-amber-500 rounded" />
                      <span className={`text-xs font-medium flex-1 min-w-0 ${m.done ? 'line-through text-slate-400' : 'text-slate-700'}`}>{m.text}</span>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={(event) => { event.stopPropagation(); openMilestoneEditor(m); }}
                          className="px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 text-[10px] font-bold"
                        >
                          編輯
                        </button>
                        <button
                          onClick={(event) => { event.stopPropagation(); handleDeleteMilestone(m.id); }}
                          className="px-2 py-1 rounded-md bg-red-50 hover:bg-red-100 text-red-700 text-[10px] font-bold"
                        >
                          刪除
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Care Logs */}
            {activeTab === 'care' && (
              <div className="space-y-3">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-sm">🍼 照護日誌</h3>
                  <button
                    onClick={() => {
                      setEditingLogId(null);
                      setNewLogDate(getLocalDateInputValue());
                      setNewLogTime(getLocalTimeInputValue());
                      setNewLogType('feeding');
                      setNewLogDetail('');
                      setNewLogNotes('');
                      setNewLogMilkType('');
                      setNewLogFeedingMethod('');
                      setNewLogAmount('');
                      setShowAddLogModal(true);
                    }}
                    className="px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm"
                  >
                    <Icon name="plus" className="w-3.5 h-3.5" />
                    新增紀錄
                  </button>
                </div>
                <div className={`p-3 rounded-xl border space-y-2 ${cardBg}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <label className="text-[11px] font-bold text-slate-600">
                      開始日期
                      <input
                        type="date"
                        value={careLogStartDate}
                        onChange={(e) => setCareLogStartDate(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg text-xs bg-white"
                      />
                    </label>
                    <label className="text-[11px] font-bold text-slate-600">
                      結束日期
                      <input
                        type="date"
                        value={careLogEndDate}
                        onChange={(e) => setCareLogEndDate(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg text-xs bg-white"
                      />
                    </label>
                    <label className="text-[11px] font-bold text-slate-600">
                      類別
                      <select
                        value={careLogCategory}
                        onChange={(e) => setCareLogCategory(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg text-xs bg-white"
                      >
                        <option value="all">📋 全部類別</option>
                        {Object.entries(careLogTypeLabels).map(([type, label]) => (
                          <option key={type} value={type}>{careLogTypeIcons[type]} {label}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const today = getLocalDateInputValue();
                        setCareLogStartDate(today);
                        setCareLogEndDate(today);
                      }}
                      className="px-2.5 py-1 rounded-lg border text-[11px] font-bold text-slate-600 hover:bg-slate-50"
                    >
                      今天
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const endDate = new Date();
                        const startDate = new Date(endDate);
                        startDate.setDate(startDate.getDate() - 6);
                        const formatDate = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                        setCareLogStartDate(formatDate(startDate));
                        setCareLogEndDate(formatDate(endDate));
                      }}
                      className="px-2.5 py-1 rounded-lg border text-[11px] font-bold text-slate-600 hover:bg-slate-50"
                    >
                      最近 7 天
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCareLogStartDate('');
                        setCareLogEndDate('');
                        setCareLogCategory('all');
                      }}
                      className="px-2.5 py-1 rounded-lg border text-[11px] font-bold text-slate-600 hover:bg-slate-50"
                    >
                      顯示全部
                    </button>
                    <span className="text-[11px] text-slate-500 sm:ml-auto" role="status" aria-live="polite">
                      {isCareLogDateRangeInvalid ? '開始日期不能晚於結束日期' : `顯示 ${filteredCareLogs.length} / ${logs.length} 筆`}
                    </span>
                  </div>
                </div>
                {logs.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400 border rounded-2xl bg-slate-50/50">
                    尚無紀錄，點擊「+ 新增紀錄」開始記錄餵奶與尿布吧！
                  </div>
                ) : filteredCareLogs.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400 border rounded-2xl bg-slate-50/50">
                    沒有符合篩選條件的照護紀錄。
                  </div>
                ) : (
                  filteredCareLogs.map((log) => {
                    const solidFoodRecord = log.type === 'solidFood' ? solidFoodLogs.find(record => (
                      record.id === log.sourceId
                      || (record.date === log.date && log.detail?.includes(record.foodName))
                    )) : null;
                    const vaccinationRecord = getVaccinationRecordForLog(log);
                    const solidFoodNotes = log.notes || solidFoodRecord?.notes;
                    const solidFoodReactions = Array.isArray(solidFoodRecord?.reactions)
                      ? solidFoodRecord.reactions.join('、')
                      : solidFoodRecord?.reactions || '';
                    const vaccinationSideEffects = Array.isArray(vaccinationRecord?.sideEffects)
                      ? vaccinationRecord.sideEffects.join('、')
                      : vaccinationRecord?.sideEffects || '';
                    const vaccinationNotes = log.notes || vaccinationRecord?.notes;
                    const careLogAmount = formatCareLogAmount(log);
                    return (
                    <div key={log.id} className={`p-3 rounded-xl border flex justify-between items-start gap-2 ${cardBg}`}>
                      <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-amber-600">{log.date || '未設定日期'} {log.time}</span>
                          <span className="inline-flex items-center gap-1 text-xs font-medium">
                            <span aria-hidden="true">{careLogTypeIcons[log.type]}</span>
                            {log.type === 'feeding' && log.detail === '瓶餵母乳/配方奶' ? '' : formatCareLogDetail(log)}
                          </span>
                        </div>
                        {solidFoodRecord && (
                          <div className="space-y-0.5 text-xs text-slate-500">
                            {solidFoodRecord.allergySeverity === 'mild' && <p>過敏等級：輕微</p>}
                            {solidFoodRecord.allergySeverity === 'severe' && <p>過敏等級：嚴重</p>}
                            {solidFoodReactions && <p>反應：{solidFoodReactions}</p>}
                            {solidFoodNotes && <p className="whitespace-pre-wrap">備註：{solidFoodNotes}</p>}
                          </div>
                        )}
                        {(vaccinationRecord || (log.type === 'vaccination' && log.notes)) && (
                          <div className="space-y-0.5 text-xs text-slate-500">
                            {vaccinationRecord?.location && <p>接種地點：{vaccinationRecord.location}</p>}
                            {vaccinationSideEffects && <p>副作用：{vaccinationSideEffects}</p>}
                            {vaccinationNotes && <p className="whitespace-pre-wrap">備註：{vaccinationNotes}</p>}
                          </div>
                        )}
                        {log.type !== 'solidFood' && log.type !== 'vaccination' && log.notes && <p className="text-xs text-slate-500 whitespace-pre-wrap">{log.notes}</p>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {careLogAmount && <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{careLogAmount}</span>}
                        <button
                          type="button"
                          onClick={() => handleStartEditLog(log)}
                          className="text-amber-600 hover:text-amber-800 font-bold text-xs"
                          title="編輯這筆照護紀錄"
                        >
                          編輯
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteLog(log.id)}
                          className="text-slate-400 hover:text-red-500 font-bold text-xs"
                          title="刪除這筆照護紀錄"
                        >
                          刪除
                        </button>
                      </div>
                    </div>
                    );
                  })
                )}
              </div>
            )}

            {/* Tab 4: Doctor Notes */}
            {activeTab === 'doctor' && (
              <div className={`p-4 rounded-2xl border space-y-4 ${cardBg}`}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base flex items-center gap-2 whitespace-nowrap">
                    🏥 <span>看診備忘與門診提問</span>
                  </h3>
                </div>
                <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="font-bold text-xs text-slate-700">看診摘要</h4>
                      <p className="text-[11px] text-slate-500">整理近期狀況、變化及想與醫師討論的重點。</p>
                    </div>
                    {!isEditingDoctorVisitSummary && (
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={handleStartEditDoctorVisitSummary}
                          className="text-amber-600 hover:text-amber-800 font-bold text-xs"
                        >
                          {doctorVisitSummary.trim() ? '編輯' : '新增看診摘要'}
                        </button>
                        {doctorVisitSummary.trim() && (
                          <button
                            type="button"
                            onClick={handleDeleteDoctorVisitSummary}
                            className="text-slate-400 hover:text-red-500 font-bold text-xs"
                          >
                            刪除
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  {isEditingDoctorVisitSummary ? (
                    <>
                      <textarea
                        id="doctor-visit-summary"
                        value={doctorVisitSummaryDraft}
                        onChange={(e) => setDoctorVisitSummaryDraft(e.target.value)}
                        placeholder="寫下本次看診想說明的重點..."
                        rows={4}
                        className="w-full p-2.5 border rounded-xl text-xs resize-y bg-white"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={handleCancelEditDoctorVisitSummary}
                          className="px-3 py-1.5 border rounded-lg text-xs font-bold text-slate-600"
                        >
                          取消
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveDoctorVisitSummary}
                          disabled={!doctorVisitSummaryDraft.trim()}
                          className="px-3 py-1.5 bg-amber-500 text-white rounded-lg text-xs font-bold disabled:opacity-50"
                        >
                          儲存
                        </button>
                      </div>
                    </>
                  ) : (
                    <p className={`text-xs whitespace-pre-wrap ${doctorVisitSummary.trim() ? 'text-slate-700' : 'text-slate-400'}`}>
                      {doctorVisitSummary.trim() || '尚未填寫'}
                    </p>
                  )}
                </div>
                <form onSubmit={handleAddDoctorNote} className="p-3 rounded-xl border border-amber-200 bg-white space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="doctor-note-date" className="font-bold">日期</label>
                        <button
                          type="button"
                          onClick={() => {
                            setDoctorNoteDate(getLocalDateInputValue());
                            setDoctorNoteTime(getLocalTimeInputValue());
                          }}
                          className="text-amber-600 hover:text-amber-800 font-bold"
                          title="將日期與時間更新為目前時間，儲存後才會套用"
                        >
                          設為現在
                        </button>
                      </div>
                      <input
                        id="doctor-note-date"
                        type="date"
                        required
                        value={doctorNoteDate}
                        onChange={(e) => setDoctorNoteDate(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-xl bg-white"
                      />
                    </div>
                    <label className="font-bold">
                      時間
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="例如：15:33"
                        pattern="(?:[01][0-9]|2[0-3]):[0-5][0-9]"
                        required
                        value={doctorNoteTime}
                        onChange={(e) => setDoctorNoteTime(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-xl bg-white"
                      />
                    </label>
                    <label className="font-bold">
                      類別
                      <select
                        value={doctorNoteCategory}
                        onChange={(e) => setDoctorNoteCategory(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-xl bg-white"
                      >
                        <option value="門診提問">門診提問</option>
                        <option value="看診備忘">看診備忘</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <label className="font-bold block mb-1">問題／備忘</label>
                    <textarea
                      rows={3}
                      value={newDoctorQuestion}
                      onChange={(e) => setNewDoctorQuestion(e.target.value)}
                      placeholder="寫下想問新生兒加護病房或主治醫師的問題..."
                      className="w-full p-2 border rounded-xl bg-white resize-y"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">醫師答覆</label>
                    <textarea
                      value={newDoctorAnswer}
                      onChange={(e) => setNewDoctorAnswer(e.target.value)}
                      placeholder="記錄醫師答覆..."
                      rows={2}
                      className="w-full p-2 border rounded-xl bg-white resize-y"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="submit" className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md">
                      {editingDoctorNoteId !== null ? '儲存修改' : '新增紀錄'}
                    </button>
                    {editingDoctorNoteId !== null && (
                      <button type="button" onClick={handleCancelEditDoctorNote} className="flex-1 py-2 border rounded-xl text-slate-500 font-bold">
                        取消
                      </button>
                    )}
                  </div>
                </form>
                <div className="space-y-2">
                  <div className={`p-3 rounded-xl border space-y-2 ${cardBg}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <label className="text-[11px] font-bold text-slate-600">
                            開始日期
                            <input
                              type="date"
                              value={doctorNoteFilterStartDate}
                              onChange={(e) => setDoctorNoteFilterStartDate(e.target.value)}
                              className="w-full mt-1 p-2 border rounded-lg text-xs bg-white"
                            />
                          </label>
                          <label className="text-[11px] font-bold text-slate-600">
                            結束日期
                            <input
                              type="date"
                              value={doctorNoteFilterEndDate}
                              onChange={(e) => setDoctorNoteFilterEndDate(e.target.value)}
                              className="w-full mt-1 p-2 border rounded-lg text-xs bg-white"
                            />
                          </label>
                          <label className="text-[11px] font-bold text-slate-600">
                            類別
                            <select
                              value={doctorNoteFilterCategory}
                              onChange={(e) => setDoctorNoteFilterCategory(e.target.value)}
                              className="w-full mt-1 p-2 border rounded-lg text-xs bg-white"
                            >
                              <option value="all">全部類別</option>
                              {doctorNoteCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                              ))}
                            </select>
                          </label>
                        </div>
                        <input
                          type="search"
                          value={doctorNoteSearchQuery}
                          onChange={(e) => setDoctorNoteSearchQuery(e.target.value)}
                          placeholder="搜尋提問或醫師答覆..."
                          className="w-full p-2 border rounded-lg text-xs bg-white"
                        />
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              const today = getLocalDateInputValue();
                              setDoctorNoteFilterStartDate(today);
                              setDoctorNoteFilterEndDate(today);
                            }}
                            className="px-2.5 py-1 rounded-lg border text-[11px] font-bold text-slate-600 hover:bg-slate-50"
                          >
                            今天
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const endDate = new Date();
                              const startDate = new Date(endDate);
                              startDate.setDate(startDate.getDate() - 6);
                              const formatDate = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                              setDoctorNoteFilterStartDate(formatDate(startDate));
                              setDoctorNoteFilterEndDate(formatDate(endDate));
                            }}
                            className="px-2.5 py-1 rounded-lg border text-[11px] font-bold text-slate-600 hover:bg-slate-50"
                          >
                            最近 7 天
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setDoctorNoteFilterStartDate('');
                              setDoctorNoteFilterEndDate('');
                              setDoctorNoteFilterCategory('all');
                              setDoctorNoteSearchQuery('');
                            }}
                            className="px-2.5 py-1 rounded-lg border text-[11px] font-bold text-slate-600 hover:bg-slate-50"
                          >
                            顯示全部
                          </button>
                          <span className="text-[11px] text-slate-500 sm:ml-auto" role="status" aria-live="polite">
                            {isDoctorNoteDateRangeInvalid ? '開始日期不能晚於結束日期' : `顯示 ${filteredDoctorNotes.length} / ${doctorNotes.length} 筆`}
                          </span>
                        </div>
                      </div>
                  {doctorNotes.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400 border rounded-xl bg-slate-50">
                      尚無看診問題備忘
                    </div>
                  ) : filteredDoctorNotes.length === 0 ? (
                        <div className="p-4 text-center text-xs text-slate-400 border rounded-xl bg-slate-50">
                          沒有符合篩選條件的看診備忘。
                        </div>
                      ) : filteredDoctorNotes.map((note) => (
                      <div key={note.id} className={`p-3 border rounded-xl text-xs space-y-1 ${note.answered ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                        <div className="flex justify-between items-center">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${note.answered ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                            {note.category || note.tag || '門診提問'}
                          </span>
                          <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleStartEditDoctorNote(note)}
                            className="text-amber-600 hover:text-amber-800 font-bold"
                          >
                            編輯
                          </button>
                          <button
                            type="button"
                            onClick={() => setDoctorNotes(doctorNotes.map(n => n.id === note.id ? { ...n, answered: !n.answered } : n))}
                            className={note.answered ? 'text-green-600 font-bold' : 'text-slate-400 hover:text-slate-600'}
                          >
                            {note.answered ? (
                              <span className="inline-flex items-center gap-1">
                                <Icon name="check" className="w-3.5 h-3.5" />
                                醫師已解答
                              </span>
                            ) : '標記為已解答'}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteDoctorNote(note.id)}
                            className="text-slate-400 hover:text-red-500 font-bold"
                            title="刪除這筆看診備忘"
                          >
                            刪除
                          </button>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-400">{note.date || '未設定日期'} {format24HourTime(note.time)}</p>
                        <p className="font-medium text-slate-700">{note.question}</p>
                        {editingDoctorNoteId !== note.id && <div className="pt-2 border-t border-slate-100 space-y-1">
                          <label className="font-bold text-[11px] text-slate-500">醫師答覆</label>
                          <p className="whitespace-pre-wrap text-slate-700">{note.answer || '尚未記錄醫師答覆'}</p>
                        </div>}
                      </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          {/* Printable PDF Report Element (Hidden on screen, target for html2pdf) */}
          <div id="pdf-report-content" style={{ display: 'none' }} className="box-border w-[718px] p-8 bg-white text-slate-800 space-y-6 font-sans">
            <div className="pdf-section border-b pb-4 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-amber-700">巴掌小太陽·早產兒門診照護與生長報告</h1>
                <p className="text-xs text-slate-500 mt-1">匯出時間：{formatLocalDateTime()}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-amber-800">{babyInfo.name || '小太陽'} 寶寶</span>
                <p className="text-xs text-slate-500">{babyInfo.gender === 'girl' ? '👧 女寶' : '👦 男寶'} | {ageData.correctedText}</p>
              </div>
            </div>

            <div className="pdf-section grid grid-cols-1 gap-3 text-xs bg-amber-50/50 p-4 rounded-xl border border-amber-200 sm:grid-cols-2">
              <div><b>實際出生日：</b> {babyInfo.birthDate || '未填寫'}</div>
              <div><b>預產期：</b> {babyInfo.dueDate || '未填寫'}</div>
              <div><b>出生週數：</b> {babyInfo.gestationalWeeks ? `${babyInfo.gestationalWeeks} 週` : '未填寫'}</div>
              <div><b>出生體重：</b> {babyInfo.birthWeight ? `${babyInfo.birthWeight} kg` : '未填寫'}</div>
              <div><b>實際月齡：</b> {ageData.chronoText.replace(/^實際\s*/, '')}</div>
              <div className="sm:col-span-2"><b>當前體重/身長/頭圍：</b> {babyInfo.currentWeight ? `${babyInfo.currentWeight} kg` : '—'} / {babyInfo.currentHeight ? `${babyInfo.currentHeight} cm` : '—'} / {babyInfo.currentHead ? `${babyInfo.currentHead} cm` : '—'}</div>
            </div>

            <div className="pdf-section space-y-2">
              <h3 className="font-bold text-sm text-slate-800 border-b pb-1">📈 歷史測量紀錄表</h3>
              {growthHistory.length === 0 ? (
                <p className="text-xs text-slate-400">尚無測量紀錄</p>
              ) : (
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b">
                      <th className="p-2 border-b">日期／時間</th>
                      <th className="p-2 border-b">體重 (kg)</th>
                      <th className="p-2 border-b">身長 (cm)</th>
                      <th className="p-2 border-b">頭圍 (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {growthHistory.map((rec) => (
                      <tr key={rec.id} className="border-b">
                        <td className="p-2">{rec.date}{rec.time ? ` ${rec.time}` : ''}</td>
                        <td className="p-2">{rec.weight || '—'}</td>
                        <td className="p-2">{rec.height || '—'}</td>
                        <td className="p-2">{rec.head || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="pdf-section space-y-2">
              <h3 className="font-bold text-sm text-slate-800 border-b pb-1">照護日誌</h3>
              {logs.length === 0 ? (
                <p className="text-xs text-slate-400">尚無照護日誌</p>
              ) : (
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b">
                      <th className="p-2 border-b">日期</th>
                      <th className="p-2 border-b">時間</th>
                      <th className="p-2 border-b">類型</th>
                      <th className="p-2 border-b">內容</th>
                      <th className="p-2 border-b">數量</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map(log => (
                      <tr key={log.id} className="border-b">
                        <td className="p-2">{log.date || '未設定日期'}</td>
                        <td className="p-2">{format24HourTime(log.time) || '—'}</td>
                        <td className="p-2">{careLogTypeLabels[log.type] || log.type || '其他'}</td>
                        <td className="p-2 whitespace-pre-wrap">{[formatCareLogDetail(log), formatCareLogSupplement(log)].filter(Boolean).join('\n')}</td>
                        <td className="p-2">{formatCareLogAmount(log) || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="pdf-section space-y-2">
              <h3 className="font-bold text-sm text-slate-800 border-b pb-1">看診摘要</h3>
              <p className={`text-xs whitespace-pre-wrap ${doctorVisitSummary.trim() ? 'text-slate-700' : 'text-slate-400'}`}>
                {doctorVisitSummary.trim() || '尚未填寫'}
              </p>
            </div>

            <div className="pdf-section space-y-2">
              <h3 className="font-bold text-sm text-slate-800 border-b pb-1">🏥 看診備忘與門診提問</h3>
              {doctorNotes.length === 0 ? (
                <p className="text-xs text-slate-400">無門診提問紀錄</p>
              ) : (
                <ul className="space-y-1.5 text-xs">
                  {doctorNotes.map(n => (
                    <li key={n.id} className="pdf-item p-2 bg-slate-50 border rounded-lg space-y-1">
                      <span>• {n.date || '未設定日期'} {format24HourTime(n.time)}｜{n.category || n.tag || '門診提問'}｜{n.question}</span>
                      {n.answer && <span className="text-slate-600 whitespace-pre-wrap">醫師答覆：{n.answer}</span>}
                      <span className={`font-bold text-[10px] px-2 py-0.5 rounded ${n.answered ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                        {n.answered ? '醫師解答' : '門診提問'}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pdf-section space-y-2">
              <h3 className="font-bold text-sm text-slate-800 border-b pb-1">📝 筆記本</h3>
              {notes.length === 0 ? (
                <p className="text-xs text-slate-400">無筆記紀錄</p>
              ) : (
                <div className="space-y-2 text-xs">
                  {notes.map(n => (
                    <div key={n.id} className="pdf-item p-2.5 bg-slate-50 border rounded-lg space-y-1">
                      <div className="font-bold text-amber-800">【{n.category}】{n.title} <span className="text-[10px] font-normal text-slate-400">({n.createdAt})</span></div>
                      {n.content && <p className="text-slate-600 whitespace-pre-wrap">{n.content}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pdf-footer text-center text-[10px] text-slate-500 pt-6 pb-4 border-t">
              本報告由「巴掌小太陽 · 早產兒照護小幫手」自動生成，僅供看診時輔助醫療團隊參考。
            </div>
          </div>

          {/* Edit Baby Profile Modal */}
          {showEditProfileModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700">寶寶基本資料</h3>
                  <button onClick={() => setShowEditProfileModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold block mb-1">寶寶姓名</label>
                    <input
                      type="text"
                      placeholder="例如：小太陽"
                      value={editFormData.name}
                      onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                      className="w-full p-2 border rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div>
                      <label className="font-bold block mb-1">生理性別</label>
                      <select
                        value={editFormData.gender}
                        onChange={(e) => setEditFormData({ ...editFormData, gender: e.target.value })}
                        className="w-full p-2 border rounded-xl bg-white"
                      >
                        <option value="boy">👦 男寶</option>
                        <option value="girl">👧 女寶</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold block mb-1">出生週數(週)</label>
                      <input
                        type="number"
                        placeholder="例如：30"
                        value={editFormData.gestationalWeeks}
                        onChange={(e) => setEditFormData({ ...editFormData, gestationalWeeks: e.target.value })}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div>
                      <label className="font-bold block mb-1">實際出生日期</label>
                      <input
                        type="date"
                        value={editFormData.birthDate}
                        onChange={(e) => setEditFormData({ ...editFormData, birthDate: e.target.value })}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">預產期 (算矯正月齡)</label>
                      <input
                        type="date"
                        value={editFormData.dueDate}
                        onChange={(e) => setEditFormData({ ...editFormData, dueDate: e.target.value })}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div>
                      <label className="font-bold block mb-1">出生體重(kg)</label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="2.8"
                        value={editFormData.birthWeight}
                        onChange={(e) => setEditFormData({ ...editFormData, birthWeight: e.target.value })}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">最新體重(kg)</label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="3.2"
                        value={editFormData.currentWeight}
                        onChange={(e) => setEditFormData({ ...editFormData, currentWeight: e.target.value })}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">身長(cm)</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="48"
                        value={editFormData.currentHeight}
                        onChange={(e) => setEditFormData({ ...editFormData, currentHeight: e.target.value })}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">頭圍(cm)</label>
                      <input
                        type="number"
                        step="0.1"
                        placeholder="34"
                        value={editFormData.currentHead}
                        onChange={(e) => setEditFormData({ ...editFormData, currentHead: e.target.value })}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-bold block mb-1">目前設定的每日目標總奶量 (ml)</label>
                    <input
                      type="number"
                      placeholder="例如：450"
                      value={editFormData.targetDailyMilk}
                      onChange={(e) => setEditFormData({ ...editFormData, targetDailyMilk: e.target.value })}
                      className="w-full p-2 border rounded-xl"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setShowEditProfileModal(false)} className="flex-1 py-2 text-xs border rounded-xl text-slate-500 font-bold">取消</button>
                    <button type="submit" className="flex-1 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md">儲存設定</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Add Care Log Modal */}
          {showAddLogModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700">{editingLogId !== null ? '編輯照護紀錄' : '新增照護日誌'}</h3>
                  <button onClick={handleCancelEditLog} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <form onSubmit={handleAddLog} className="space-y-3 text-xs">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setNewLogType('feeding')}
                      className={`flex-1 py-2 rounded-xl font-bold border transition-colors ${newLogType === 'feeding' ? 'bg-amber-500 text-white border-amber-500' : 'bg-slate-50 text-slate-600'}`}
                    >
                      🍼 餵奶
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewLogType('diaper')}
                      className={`flex-1 py-2 rounded-xl font-bold border transition-colors ${newLogType === 'diaper' ? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-50 text-slate-600'}`}
                    >
                      👶 尿布
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setNewLogType('solidFood');
                        setSolidFoodForm(prev => ({ ...prev, date: newLogDate }));
                      }}
                      className={`flex-1 py-2 rounded-xl font-bold border transition-colors ${newLogType === 'solidFood' ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-slate-50 text-slate-600'}`}
                    >
                      🥣 副食品
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setNewLogType('vaccination');
                        setVaccinationForm(prev => ({ ...prev, date: newLogDate }));
                      }}
                      className={`flex-1 py-2 rounded-xl font-bold border transition-colors ${newLogType === 'vaccination' ? 'bg-purple-500 text-white border-purple-500' : 'bg-slate-50 text-slate-600'}`}
                    >
                      💉 疫苗
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-bold">日期</label>
                      <button
                        type="button"
                        onClick={() => {
                          const date = getLocalDateInputValue();
                          setNewLogDate(date);
                          setNewLogTime(getLocalTimeInputValue());
                          if (newLogType === 'solidFood') setSolidFoodForm(prev => ({ ...prev, date }));
                          if (newLogType === 'vaccination') setVaccinationForm(prev => ({ ...prev, date }));
                        }}
                        className="text-amber-600 hover:text-amber-800 font-bold"
                        title="將日期與時間更新為目前時間，儲存後才會套用"
                      >
                        設為現在
                      </button>
                    </div>
                    <input
                      type="date"
                      required
                      value={newLogDate}
                      onChange={(e) => {
                        const date = e.target.value;
                        setNewLogDate(date);
                        if (newLogType === 'solidFood') setSolidFoodForm(prev => ({ ...prev, date }));
                        if (newLogType === 'vaccination') setVaccinationForm(prev => ({ ...prev, date }));
                      }}
                      className="w-full p-2 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">時間</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      required
                      pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
                      placeholder="例如：09:14"
                      title="請輸入 24 小時制時間，例如 09:14"
                      value={newLogTime}
                      onChange={(e) => setNewLogTime(e.target.value)}
                      className="w-full p-2 border rounded-xl"
                    />
                  </div>

                  {newLogType === 'feeding' && (
                    <div>
                      <label className="font-bold block mb-1">餵奶量 (ml)</label>
                      <input
                        type="number"
                        min="0"
                        required
                        placeholder="例如：60"
                        value={newLogAmount}
                        onChange={(e) => setNewLogAmount(e.target.value !== '' && Number(e.target.value) < 0 ? '0' : e.target.value)}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                  )}

                  {newLogType === 'solidFood' && (
                    <>
                      <div>
                        <label className="font-bold block mb-1">食材名稱</label>
                        <input required value={solidFoodForm.foodName} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, foodName: e.target.value })} placeholder="例如：南瓜泥" className="w-full p-2 border rounded-xl" />
                      </div>
                      <div>
                        <label className="font-bold block mb-1">份量 (ml/湯匙)</label>
                        <input type="number" min="0" required value={solidFoodForm.amount} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, amount: e.target.value })} className="w-full p-2 border rounded-xl" />
                      </div>
                      <div>
                        <label className="font-bold block mb-1">過敏等級</label>
                        <select value={solidFoodForm.allergySeverity} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, allergySeverity: e.target.value })} className="w-full p-2 border rounded-xl">
                          <option value="none">無</option>
                          <option value="mild">輕微</option>
                          <option value="severe">嚴重</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-bold block mb-1">反應（以逗號分隔）</label>
                        <input value={solidFoodForm.reactions} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, reactions: e.target.value })} placeholder="例如：紅疹、拉肚子" className="w-full p-2 border rounded-xl" />
                      </div>
                      <div>
                        <label className="font-bold block mb-1">備註（選填）</label>
                        <textarea
                          rows={3}
                          value={solidFoodForm.notes}
                          onChange={(e) => setSolidFoodForm({ ...solidFoodForm, notes: e.target.value })}
                          placeholder="記錄試吃情形或其他觀察..."
                          className="w-full p-2 border rounded-xl resize-y"
                        />
                      </div>
                    </>
                  )}

                  {newLogType === 'vaccination' && (
                    <>
                      <div>
                        <label className="font-bold block mb-1">疫苗名稱</label>
                        <input required value={vaccinationForm.vaccineName} onChange={(e) => setVaccinationForm({ ...vaccinationForm, vaccineName: e.target.value })} placeholder="例如：五合一、水痘" className="w-full p-2 border rounded-xl" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="font-bold block mb-1">劑次</label>
                          <input type="number" min="1" required value={vaccinationForm.doseNumber} onChange={(e) => setVaccinationForm({ ...vaccinationForm, doseNumber: e.target.value })} className="w-full p-2 border rounded-xl" />
                        </div>
                        <div>
                          <label className="font-bold block mb-1">接種地點</label>
                          <input value={vaccinationForm.location} onChange={(e) => setVaccinationForm({ ...vaccinationForm, location: e.target.value })} placeholder="例如：兒科診所" className="w-full p-2 border rounded-xl" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <div>
                          <label className="font-bold block mb-1">劑量（選填）</label>
                          <input inputMode="decimal" value={vaccinationForm.dose} onChange={(e) => setVaccinationForm({ ...vaccinationForm, dose: e.target.value })} placeholder="例如：0.5" className="w-full p-2 border rounded-xl" />
                        </div>
                        <div>
                          <label className="font-bold block mb-1">單位</label>
                          <div className="grid grid-cols-2 gap-2">
                            {vaccinationDoseUnitOptions.map(unit => (
                              <button
                                key={unit.value}
                                type="button"
                                onClick={() => setVaccinationForm({ ...vaccinationForm, doseUnit: unit.value })}
                                aria-pressed={vaccinationForm.doseUnit === unit.value}
                                className={`min-w-0 p-2 border rounded-xl text-left whitespace-normal ${vaccinationForm.doseUnit === unit.value ? 'border-purple-400 bg-purple-50 text-purple-700' : 'border-slate-300 bg-white text-slate-700'}`}
                              >
                                {unit.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      {vaccinationForm.doseUnit === 'custom' && (
                        <div>
                          <label className="font-bold block mb-1">自訂單位</label>
                          <input value={vaccinationForm.customDoseUnit} onChange={(e) => setVaccinationForm({ ...vaccinationForm, customDoseUnit: e.target.value })} placeholder="例如：支、粒" className="w-full p-2 border rounded-xl" />
                        </div>
                      )}
                      <div>
                        <label className="font-bold block mb-1">副作用（以逗號分隔）</label>
                        <input value={vaccinationForm.sideEffects} onChange={(e) => setVaccinationForm({ ...vaccinationForm, sideEffects: e.target.value })} placeholder="例如：發燒、腫脹" className="w-full p-2 border rounded-xl" />
                      </div>
                      <div>
                        <label className="font-bold block mb-1">備註（選填）</label>
                        <textarea value={vaccinationForm.notes} onChange={(e) => setVaccinationForm({ ...vaccinationForm, notes: e.target.value })} rows="2" className="w-full p-2 border rounded-xl resize-y" />
                      </div>
                    </>
                  )}

                  {newLogType === 'feeding' && (
                    <div className="space-y-2">
                      <div>
                        <label className="font-bold block mb-1">奶水種類</label>
                        <div className="flex flex-wrap gap-2" role="group" aria-label="奶水種類">
                          {['母乳', '配方奶', '混合'].map(tag => (
                            <button
                              key={tag}
                              type="button"
                              aria-pressed={newLogMilkType === tag}
                              onClick={() => setNewLogMilkType(current => current === tag ? '' : tag)}
                              className={`px-3 py-1.5 rounded-full border font-medium transition-colors ${newLogMilkType === tag ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-slate-600 border-slate-300'}`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="font-bold block mb-1">餵養方式</label>
                        <div className="flex flex-wrap gap-2" role="group" aria-label="餵養方式">
                          {['瓶餵', '親餵'].map(tag => (
                            <button
                              key={tag}
                              type="button"
                              aria-pressed={newLogFeedingMethod === tag}
                              onClick={() => setNewLogFeedingMethod(current => current === tag ? '' : tag)}
                              className={`px-3 py-1.5 rounded-full border font-medium transition-colors ${newLogFeedingMethod === tag ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-slate-600 border-slate-300'}`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="font-bold block mb-1">細節（選填）</label>
                        <textarea
                          rows={3}
                          placeholder="輸入額外細節"
                          value={newLogDetail}
                          onChange={(e) => setNewLogDetail(e.target.value)}
                          className="w-full p-2 border rounded-xl resize-y"
                        />
                      </div>
                      <div>
                        <label className="font-bold block mb-1">備註（選填）</label>
                        <textarea
                          rows={3}
                          placeholder="輸入其他備註"
                          value={newLogNotes}
                          onChange={(e) => setNewLogNotes(e.target.value)}
                          className="w-full p-2 border rounded-xl resize-y"
                        />
                      </div>
                    </div>
                  )}

                  {newLogType === 'diaper' && <div>
                    <label className="font-bold block mb-1">細節（選填）</label>
                    <textarea
                      rows={3}
                      placeholder="濕尿布 / 便便 / 量多"
                      value={newLogDetail}
                      onChange={(e) => setNewLogDetail(e.target.value)}
                      className="w-full p-2 border rounded-xl resize-y"
                    />
                    <label className="font-bold block mb-1 mt-2">備註（選填）</label>
                    <textarea
                      rows={3}
                      placeholder="輸入其他備註"
                      value={newLogNotes}
                      onChange={(e) => setNewLogNotes(e.target.value)}
                      className="w-full p-2 border rounded-xl resize-y"
                    />
                  </div>}

                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={handleCancelEditLog} className="flex-1 py-2 text-xs border rounded-xl text-slate-500 font-bold">取消</button>
                    <button type="submit" className="flex-1 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md">{editingLogId !== null ? '儲存修改' : '儲存紀錄'}</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {showSolidFoodModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-emerald-700">🥣 新增副食品試吃紀錄</h3>
                  <button onClick={() => setShowSolidFoodModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                  <div className="font-bold mb-1">安全食材清單</div>
                  <div>{safeFoods.join('、')}</div>
                  <div className="font-bold text-rose-700 mt-2">過敏食物警示</div>
                  <div className="text-rose-700">{allergyWarningFoods.join('、')}</div>
                </div>
                <form onSubmit={handleSaveSolidFoodLog} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold block mb-1">食材名稱</label>
                    <input required value={solidFoodForm.foodName} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, foodName: e.target.value })} placeholder="例如：南瓜泥" className="w-full p-2 border rounded-xl" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold block mb-1">日期</label>
                      <input type="date" required value={solidFoodForm.date} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, date: e.target.value })} className="w-full p-2 border rounded-xl" />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">份量 (ml/湯匙)</label>
                      <input type="number" min="0" value={solidFoodForm.amount} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, amount: e.target.value })} className="w-full p-2 border rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="font-bold block mb-1">過敏等級</label>
                    <select value={solidFoodForm.allergySeverity} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, allergySeverity: e.target.value })} className="w-full p-2 border rounded-xl">
                      <option value="none">無</option>
                      <option value="mild">輕微</option>
                      <option value="severe">嚴重</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold block mb-1">反應（以逗號分隔）</label>
                    <input value={solidFoodForm.reactions} onChange={(e) => setSolidFoodForm({ ...solidFoodForm, reactions: e.target.value })} placeholder="例如：紅疹、拉肚子" className="w-full p-2 border rounded-xl" />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">備註（選填）</label>
                    <textarea
                      rows={3}
                      value={solidFoodForm.notes}
                      onChange={(e) => setSolidFoodForm({ ...solidFoodForm, notes: e.target.value })}
                      placeholder="記錄試吃情形或其他觀察..."
                      className="w-full p-2 border rounded-xl resize-y"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setShowSolidFoodModal(false)} className="flex-1 py-2 border rounded-xl text-slate-500 font-bold">取消</button>
                    <button type="submit" className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl">儲存紀錄</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {showVaccinationModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-purple-700">💉 新增疫苗接種紀錄</h3>
                  <button onClick={() => setShowVaccinationModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <form onSubmit={handleSaveVaccinationLog} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold block mb-1">疫苗名稱</label>
                    <input required value={vaccinationForm.vaccineName} onChange={(e) => setVaccinationForm({ ...vaccinationForm, vaccineName: e.target.value })} placeholder="例如：五合一、水痘" className="w-full p-2 border rounded-xl" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold block mb-1">劑次</label>
                      <input type="number" min="1" required value={vaccinationForm.doseNumber} onChange={(e) => setVaccinationForm({ ...vaccinationForm, doseNumber: e.target.value })} className="w-full p-2 border rounded-xl" />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">接種日期</label>
                      <input type="date" required value={vaccinationForm.date} onChange={(e) => setVaccinationForm({ ...vaccinationForm, date: e.target.value })} className="w-full p-2 border rounded-xl" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <label className="font-bold block mb-1">劑量（選填）</label>
                      <input inputMode="decimal" value={vaccinationForm.dose} onChange={(e) => setVaccinationForm({ ...vaccinationForm, dose: e.target.value })} placeholder="例如：0.5" className="w-full p-2 border rounded-xl" />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">單位</label>
                      <div className="grid grid-cols-2 gap-2">
                        {vaccinationDoseUnitOptions.map(unit => (
                          <button
                            key={unit.value}
                            type="button"
                            onClick={() => setVaccinationForm({ ...vaccinationForm, doseUnit: unit.value })}
                            aria-pressed={vaccinationForm.doseUnit === unit.value}
                            className={`min-w-0 p-2 border rounded-xl text-left whitespace-normal ${vaccinationForm.doseUnit === unit.value ? 'border-purple-400 bg-purple-50 text-purple-700' : 'border-slate-300 bg-white text-slate-700'}`}
                          >
                            {unit.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {vaccinationForm.doseUnit === 'custom' && (
                    <div>
                      <label className="font-bold block mb-1">自訂單位</label>
                      <input value={vaccinationForm.customDoseUnit} onChange={(e) => setVaccinationForm({ ...vaccinationForm, customDoseUnit: e.target.value })} placeholder="例如：支、粒" className="w-full p-2 border rounded-xl" />
                    </div>
                  )}
                  <div>
                    <label className="font-bold block mb-1">接種地點</label>
                    <input value={vaccinationForm.location} onChange={(e) => setVaccinationForm({ ...vaccinationForm, location: e.target.value })} placeholder="例如：兒科診所" className="w-full p-2 border rounded-xl" />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">副作用（以逗號分隔）</label>
                    <input value={vaccinationForm.sideEffects} onChange={(e) => setVaccinationForm({ ...vaccinationForm, sideEffects: e.target.value })} placeholder="例如：發燒、腫脹" className="w-full p-2 border rounded-xl" />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">備註（選填）</label>
                    <textarea value={vaccinationForm.notes} onChange={(e) => setVaccinationForm({ ...vaccinationForm, notes: e.target.value })} rows="2" className="w-full p-2 border rounded-xl resize-y" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setShowVaccinationModal(false)} className="flex-1 py-2 border rounded-xl text-slate-500 font-bold">取消</button>
                    <button type="submit" className="flex-1 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl">儲存紀錄</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Notebook Modal */}
          {showNotesModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className={`w-full max-w-lg p-5 rounded-2xl border shadow-xl max-h-[90vh] flex flex-col ${cardBg}`}>
                <div className="flex justify-between items-center pb-3 border-b mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
                      <Icon name="book" className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-amber-800 flex items-center gap-2">
                        筆記本
                        <span className="text-[11px] font-normal px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">
                          筆記 {notes.length} / 1000 則
                        </span>
                      </h3>
                    </div>
                  </div>
                  <button onClick={handleCloseNotesModal} className="text-slate-400 hover:text-slate-600 p-1">
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-1 no-scrollbar">
                  <form onSubmit={handleSaveNote} className={`p-3 rounded-xl border space-y-2.5 transition-colors ${
                    editingNoteId !== null 
                      ? 'bg-amber-100/60 border-amber-400 shadow-md ring-2 ring-amber-300' 
                      : 'bg-amber-50/70 border-amber-200'
                  }`}>
                    {editingNoteId !== null && (
                      <div className="flex items-center justify-between text-xs text-amber-900 font-bold bg-amber-200 px-2.5 py-1 rounded-lg">
                        <span className="flex items-center gap-1">
                          <Icon name="edit" className="w-3.5 h-3.5" />
                          正於編輯模式修改中...
                        </span>
                        <button
                          type="button"
                          onClick={handleCancelEditNote}
                          className="text-amber-800 hover:text-red-600 underline text-[11px]"
                        >
                          放棄修改
                        </button>
                      </div>
                    )}

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <div className="w-full sm:w-1/3">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">標籤分類</label>
                        <select
                          value={isCustomNoteCategory ? '' : noteCategory}
                          onFocus={() => setNoteVoiceTarget('category')}
                          onChange={(e) => {
                            const value = e.target.value;
                            setIsCustomNoteCategory(value === '');
                            setNoteCategory(value);
                          }}
                          className="w-full p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                          {availableNoteCategories.filter(category => category !== '未分類').map(category => (
                            <option key={category} value={category}>【{category}】</option>
                          ))}
                          <option value="未分類">【未分類】</option>
                          <option value="">＋ 自訂分類…</option>
                        </select>
                        {isCustomNoteCategory && (
                          <div className="flex items-center gap-2 mt-2">
                            <input
                              ref={noteCategoryInputRef}
                              type="text"
                              value={noteCategory}
                              onFocus={() => setNoteVoiceTarget('category')}
                              onChange={(e) => setNoteCategory(e.target.value)}
                              placeholder="請輸入分類名稱"
                              aria-label="自訂標籤分類"
                              className="min-w-0 flex-1 p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                          </div>
                        )}
                      </div>
                      <div className="w-full sm:w-2/3">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1 flex justify-between">
                          <span>標題 (最多 30 字)</span>
                          <span className="text-[10px] text-slate-400">{noteTitle.length}/30</span>
                        </label>
                        <input
                          ref={noteTitleInputRef}
                          type="text"
                          maxLength={30}
                          placeholder="例如：下次回診請教醫師..."
                          value={noteTitle}
                          onFocus={() => setNoteVoiceTarget('title')}
                          onChange={(e) => setNoteTitle(e.target.value)}
                          className="w-full p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1 flex justify-between">
                        <span>筆記內容 (純文字，最多 1000 字)</span>
                        <span className={`text-[10px] ${noteContent.length >= 1000 ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
                          {noteContent.length}/1000
                        </span>
                      </label>
                      <div className="flex items-start gap-2">
                        <textarea
                          ref={noteContentInputRef}
                          rows={3}
                          maxLength={1000}
                          placeholder="在此輸入筆記細節..."
                          value={noteContent}
                          onFocus={() => setNoteVoiceTarget('content')}
                          onChange={(e) => setNoteContent(e.target.value)}
                          className="min-w-0 flex-1 p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        {noteVoiceControls}
                      </div>
                      {noteVoiceField !== null && (
                        <p role="status" aria-live="polite" className="mt-1 text-[10px] font-bold text-red-600">正在聆聽，辨識結果將輸入至{noteVoiceField === 'title' ? '標題' : noteVoiceField === 'category' ? '標籤分類' : noteVoiceField === 'newCategory' ? '新增分類名稱' : noteVoiceField === 'search' ? '搜尋欄' : '筆記內容'}；再次點擊可停止。</p>
                      )}
                      <p className="mt-1 text-[10px] text-slate-400">語音辨識需允許麥克風，處理方式依瀏覽器與裝置而異。</p>
                      <p className="mt-1 text-[10px] text-slate-400">麥克風測試錄音最長 5 秒，只暫存在此裝置供播放確認，不會上傳。</p>
                      {noteMicTestStatus === 'requesting' && (
                        <p role="status" aria-live="polite" className="mt-1 text-[10px] font-bold text-sky-700">正在等待麥克風權限，請依瀏覽器提示選擇允許。</p>
                      )}
                      {noteMicTestStatus === 'recording' && (
                        <p role="status" aria-live="polite" className="mt-1 text-[10px] font-bold text-red-600">正在錄音，請說幾句話；最長 5 秒，也可以按「停止測試」提早結束。</p>
                      )}
                      {noteMicTestStatus === 'processing' && (
                        <p role="status" aria-live="polite" className="mt-1 text-[10px] font-bold text-sky-700">正在準備播放測試錄音…</p>
                      )}
                      {noteMicTestStatus === 'ready' && noteMicTestAudioUrl && (
                        <div className="mt-2 p-2 rounded-xl border border-sky-100 bg-sky-50">
                          <p className="mb-1 text-[10px] font-bold text-sky-800">錄音完成，請播放確認是否聽見自己的聲音。</p>
                          <audio
                            controls
                            src={noteMicTestAudioUrl}
                            aria-label="播放麥克風測試錄音"
                            onEnded={() => {
                              clearNoteMicTestAudio();
                              setNoteMicTestStatus('played');
                            }}
                            className="w-full"
                          />
                        </div>
                      )}
                      {noteMicTestStatus === 'played' && (
                        <p role="status" aria-live="polite" className="mt-1 text-[10px] font-bold text-sky-800">播放完成；若沒聽清楚，可再按「測試麥克風」試一次。</p>
                      )}
                      {noteMicTestError && (
                        <p role="alert" className="mt-1 text-[10px] font-bold text-red-600">{noteMicTestError}</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs shadow-sm transition-colors"
                      >
                        {editingNoteId !== null ? '💾 儲存修改' : '➕ 新增筆記'}
                      </button>
                      {editingNoteId !== null && (
                        <button
                          type="button"
                          onClick={handleCancelEditNote}
                          className="px-4 py-2 border border-slate-300 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-100 transition-colors"
                        >
                          取消
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Filter tabs */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2">
                      <input
                        ref={noteSearchInputRef}
                        type="search"
                        value={noteSearchQuery}
                        onFocus={() => setNoteVoiceTarget('search')}
                        onChange={(e) => setNoteSearchQuery(e.target.value)}
                        placeholder="搜尋筆記標題或內容..."
                        aria-label="搜尋筆記標題或內容"
                        className="min-w-0 flex-1 p-2 text-xs border rounded-xl bg-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="flex gap-1 overflow-x-auto no-scrollbar">
                      {['全部', ...availableNoteCategories].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setFilterNoteCategory(cat)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                            filterNoteCategory === cat
                              ? 'bg-amber-500 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (showNoteCategoryManager && noteVoiceTargetField === 'newCategory') {
                            stopNoteVoiceInput(true);
                            setNoteVoiceTarget('content');
                          }
                          setShowNoteCategoryManager(!showNoteCategoryManager);
                        }}
                        className="flex-1 px-3 py-2 border border-amber-200 text-amber-800 rounded-xl text-xs font-bold hover:bg-amber-50"
                      >
                        {showNoteCategoryManager ? '收起分類管理' : '管理分類'}
                      </button>
                      <button
                        type="button"
                        onClick={handleRestoreDefaultNoteCategories}
                        className="flex-1 px-3 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50"
                      >
                        還原預設分類
                      </button>
                    </div>
                    {showNoteCategoryManager && (
                      <div className="p-3 border border-amber-200 rounded-xl bg-amber-50/60 space-y-2">
                        <div className="flex gap-2">
                          <input
                            ref={newNoteCategoryInputRef}
                            type="text"
                            value={newNoteCategory}
                            onFocus={() => setNoteVoiceTarget('newCategory')}
                            onChange={(e) => setNewNoteCategory(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddNoteCategory();
                              }
                            }}
                            placeholder="輸入新分類名稱"
                            aria-label="新增分類名稱"
                            className="flex-1 min-w-0 p-2 text-xs border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                          <button
                            type="button"
                            onClick={handleAddNoteCategory}
                            className="px-3 py-2 bg-amber-500 text-white rounded-lg text-xs font-bold"
                          >
                            新增
                          </button>
                        </div>
                        <div className="space-y-1.5">
                          {availableNoteCategories.filter(category => category !== '未分類').map(category => (
                            <div key={category} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-amber-100">
                              {editingNoteCategory === category ? (
                                <>
                                  <input
                                    type="text"
                                    value={editedNoteCategory}
                                    onChange={(e) => setEditedNoteCategory(e.target.value)}
                                    aria-label={`編輯${category}分類`}
                                    className="flex-1 min-w-0 p-1.5 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                  />
                                  <button type="button" onClick={() => handleRenameNoteCategory(category)} className="text-amber-700 text-xs font-bold">儲存</button>
                                  <button type="button" onClick={() => { setEditingNoteCategory(null); setEditedNoteCategory(''); }} className="text-slate-500 text-xs">取消</button>
                                </>
                              ) : (
                                <>
                                  <span className="flex-1 min-w-0 truncate text-xs text-slate-700">{category}</span>
                                  <button
                                    type="button"
                                    onClick={() => { setEditingNoteCategory(category); setEditedNoteCategory(category); }}
                                    className="text-amber-700 text-xs font-bold"
                                  >
                                    編輯
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteNoteCategory(category)}
                                    className="text-red-500 text-xs font-bold"
                                  >
                                    刪除
                                  </button>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            if (safeSetStorageItem('sun_baby_note_categories_v1', JSON.stringify(noteCategories))) {
                              showToast('✅ 分類已儲存');
                            }
                          }}
                          className="w-full px-3 py-2 bg-amber-500 text-white rounded-lg text-xs font-bold hover:bg-amber-600"
                        >
                          儲存分類
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Notes list */}
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {filteredNotes.length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-400 border rounded-xl bg-slate-50">
                        {noteSearchQuery.trim()
                          ? '找不到符合搜尋條件的筆記'
                          : `目前沒有${filterNoteCategory === '全部' ? '' : `【${filterNoteCategory}】`}相關筆記`}
                      </div>
                    ) : (
                      filteredNotes.map((note) => (
                        <div key={note.id} className="p-3 border rounded-xl bg-white shadow-sm space-y-1.5 hover:border-amber-300 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-bold text-[10px]">
                              {note.category || note.tag || '未分類'}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-slate-400">{note.createdAt}</span>
                              <button
                                onClick={() => handleStartEditNote(note)}
                                className="text-amber-600 hover:text-amber-800 font-bold text-xs"
                                title="編輯筆記"
                              >
                                <Icon name="edit" className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteNote(note.id)}
                                className="text-slate-400 hover:text-red-500 text-xs"
                                title="刪除筆記"
                              >
                                <Icon name="trash" className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                          <h4 className="font-bold text-xs text-slate-800">{note.title}</h4>
                          {note.content && (
                            <p className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-100">
                              {note.content}
                            </p>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {showStorageManagerModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
              <div className="w-full max-w-md p-5 rounded-2xl border shadow-xl bg-white space-y-4 text-xs">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700 flex items-center gap-1.5">
                    <Icon name="hardDrive" className="w-4 h-4" />
                    儲存空間管理
                  </h3>
                  <button onClick={() => setShowStorageManagerModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <div className={`rounded-xl border p-3 ${storageUsage.percent >= 100 ? 'bg-red-50 border-red-200 text-red-800' : storageUsage.percent >= 80 ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                  <p className="font-bold">本機儲存空間（Local Storage）</p>
                  <p className="text-lg font-black mt-1">{formatStorageUsage(storageUsage.bytes)} / 5 MB（約 {storageUsage.percent}%）</p>
                  <p className="text-[10px] leading-relaxed mt-1">上限為常見估計值，實際限制可能依瀏覽器與瀏覽模式有所不同。</p>
                </div>
                {storageUsage.percent >= 80 && (
                  <p className="text-[11px] leading-relaxed text-red-700">
                    {storageUsage.percent >= 100
                      ? '儲存量已達估計上限，請先下載完整備份，再整理不需要保留的本機資料。'
                      : '儲存量已達 80% 警戒值，建議先下載備份並檢查本機資料。'}
                  </p>
                )}
                <p className="text-[10px] leading-relaxed text-slate-500">
                  匯入備份前會檢查本機儲存空間。系統不會自動備份目前資料，建議先下載備份。
                </p>
                <div className="grid gap-2">
                  <button
                    onClick={handleRefreshStorageUsage}
                    className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold"
                  >
                    重新計算目前使用量
                  </button>
                  <button
                    onClick={() => { setShowStorageManagerModal(false); setShowBackupModal(true); }}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold"
                  >
                    先下載完整備份
                  </button>
                </div>
              </div>
            </div>
          )}

          {showStorageRecoveryModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
              <div className="w-full max-w-md p-5 rounded-2xl border shadow-xl bg-white space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-lg shrink-0">⚠️</div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-red-700">{storageRecoveryMeta.title}</h3>
                    <p className="text-[11px] leading-relaxed text-slate-600 mt-1">{storageRecoveryMeta.message}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => handleStorageRecoveryChoice('clear')}
                    className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-xs shadow-sm transition-colors"
                  >
                    清理
                  </button>
                  <button
                    onClick={() => handleStorageRecoveryChoice('backup')}
                    className="w-full py-2.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-xs transition-colors"
                  >
                    其他方案
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Backup Modal */}
          {showBackupModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start sm:items-center justify-center overflow-y-auto p-4 z-50">
              <div className="w-full max-w-md my-2 sm:my-0 p-5 rounded-2xl border shadow-xl bg-white space-y-4 max-h-[calc(100vh-2rem)] overflow-y-auto text-xs box-border">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700 flex items-center gap-1.5">
                    <Icon name="database" className="w-4 h-4" />
                    備份與還原
                  </h3>
                  <button onClick={() => setShowBackupModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2 bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-900">
                    <h4 className="font-bold text-xs">📤 匯出備份</h4>
                    <p className="text-[11px] leading-relaxed">
                      更換裝置或備份資料時使用，可以匯出完整的紀錄檔案。
                    </p>
                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={handleExportBackupJSON}
                        className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-1 shadow-sm transition-colors"
                      >
                        <Icon name="download" className="w-3.5 h-3.5" />
                        下載備份檔案
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 bg-blue-50 p-3 rounded-xl border border-blue-200 text-blue-900">
                    <h4 className="font-bold text-xs">📥 還原資料</h4>
                    <p className="text-[11px] leading-relaxed">
                      更換裝置或還原資料時使用，可以匯入完整的紀錄檔案。
                    </p>
                    <div className="space-y-2 pt-1">
                      <label className="block w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-center cursor-pointer shadow-sm transition-colors">
                        <Icon name="upload" className="w-3.5 h-3.5 inline mr-1" />
                        選擇備份檔案
                        <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                      </label>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Data Management Modal */}
          {showDataMgmtModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start sm:items-center justify-center overflow-y-auto p-4 z-50">
              <div className="w-full max-w-md my-2 sm:my-0 p-5 rounded-2xl border shadow-xl bg-white space-y-4 max-h-[calc(100vh-2rem)] overflow-y-auto text-xs box-border">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700 flex items-center gap-1.5">
                    <Icon name="trash" className="w-4 h-4" />
                    資料管理與清除
                  </h3>
                  <button onClick={() => setShowDataMgmtModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-700">
                    <p className="font-bold text-xs">🧹 個別清除功能</p>
                    <p className="text-[11px] leading-relaxed">
                      提供各類資料的單獨清除選項。請先確認是否已備份重要資料，再進行清除。
                    </p>
                  </div>

                  <div className="grid gap-2">
                    <button
                      onClick={handleClearBabyProfile}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除寶寶基本資料
                    </button>
                    <button
                      onClick={handleClearLogs}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除照護日誌
                    </button>
                    <button
                      onClick={handleClearCareReminders}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除照護提醒
                    </button>
                    <button
                      onClick={handleClearDoctorNotes}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除看診備忘
                    </button>
                    <button
                      onClick={handleClearNotes}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除筆記本
                    </button>
                    <button
                      onClick={handleClearGrowthData}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除所有生長測量紀錄
                    </button>
                    <button
                      onClick={handleClearMilestones}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除發展里程碑
                    </button>
                    <button
                      onClick={handleResetMilkSettings}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      重設奶量設定/目標
                    </button>
                    <button
                      onClick={handleResetNightMode}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="moon" className="w-4 h-4" />
                      重設夜間模式設定
                    </button>
                    <button
                      onClick={handleResetPdfExportSettings}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="settings" className="w-4 h-4" />
                      重設匯出 PDF 設定
                    </button>
                    <button
                      onClick={handleResetGrowthChartSettings}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="settings" className="w-4 h-4" />
                      重設生長曲線/月齡模式顯示設定
                    </button>
                  </div>

                  <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-2.5 text-amber-900">
                    <p className="font-bold text-[11px] mb-1">⚠️ 還原與清除前請注意</p>
                    <p className="text-[10.5px] leading-relaxed">
                      如果要把資料還原到另一台手機或裝置，先做好備份最安心。至於任何清除操作，這些都是不可逆的動作，請務必先確認是否已備份再執行。
                    </p>
                  </div>

                  <div className="pt-2 border-t">
                    <button
                      onClick={handleResetData}
                      className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-xl font-bold flex items-center justify-center gap-1 transition-colors"
                    >
                      <Icon name="trash" className="w-3.5 h-3.5" />
                      清除應用程式所有資料
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showPdfSettingsModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start sm:items-center justify-center overflow-y-auto p-4 z-[60]">
              <div className="w-full max-w-md my-2 sm:my-0 p-5 rounded-2xl border shadow-xl bg-white space-y-4 max-h-[calc(100vh-2rem)] overflow-y-auto text-xs">
                <div className="flex items-center justify-between pb-3 border-b">
                  <h3 className="font-bold text-base text-amber-800 flex items-center gap-2">
                    <Icon name="settings" className="w-5 h-5" />
                    匯出 PDF 設定
                  </h3>
                  <button onClick={closePdfSettingsModal} className="p-1.5 rounded-lg hover:bg-slate-100" title="關閉">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-slate-700">匯出資料</p>
                  {[
                    ['profile', '寶寶基本資料與最新數值'],
                    ['growthRecords', '生長測量紀錄表'],
                    ['growthChart', '生長曲線圖'],
                    ['careLogs', '照護日誌'],
                    ['doctor', '看診備忘與門診提問'],
                    ['notes', '筆記本']
                  ].map(([key, label]) => (
                    <div key={key} className="space-y-1">
                      <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 cursor-pointer hover:bg-amber-50/60">
                        <input
                          type="checkbox"
                          checked={pdfExportDraft[key]}
                          onChange={(event) => setPdfExportDraft((current) => ({ ...current, [key]: event.target.checked }))}
                          className="accent-blue-600"
                        />
                        <span className="font-bold text-slate-700">{label}</span>
                      </label>
                      {key === 'growthChart' && pdfExportDraft.growthChart && (!showPercentiles || !showZeroBaseline) && (
                        <p className="ml-1 rounded-lg bg-amber-50 px-3 py-2 text-amber-800">
                          目前圖表的{!showPercentiles && !showZeroBaseline ? '百分位曲線與基準線' : !showPercentiles ? '百分位曲線' : '基準線'}為隱藏，匯出 PDF 時也不會顯示。
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 cursor-pointer hover:bg-amber-50/60">
                  <input
                    type="checkbox"
                    checked={pdfExportDraft.showExportTime}
                    onChange={(event) => setPdfExportDraft((current) => ({ ...current, showExportTime: event.target.checked }))}
                    className="accent-blue-600"
                  />
                  <span className="font-bold text-slate-700">顯示匯出時間</span>
                </label>

                <div className="space-y-1">
                  <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 cursor-pointer hover:bg-amber-50/60">
                    <input
                      type="checkbox"
                      checked={pdfExportDraft.encryptPdf}
                      onChange={(event) => setPdfExportDraft((current) => ({ ...current, encryptPdf: event.target.checked }))}
                      className="accent-blue-600"
                    />
                    <span className="font-bold text-slate-700">匯出加密 PDF</span>
                  </label>
                  {pdfExportDraft.encryptPdf && (
                    <p className="ml-1 rounded-lg bg-amber-50 px-3 py-2 text-amber-800">
                      匯出時需設定 4 至 8 個字元的密碼，PDF 採 AES-256 加密。密碼不會儲存；忘記密碼後，巴掌小太陽無法取回。
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-slate-700 block">時間範圍</label>
                  <select
                    value={pdfExportDraft.range}
                    onChange={(event) => setPdfExportDraft((current) => ({ ...current, range: event.target.value }))}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2.5 bg-white"
                  >
                    <option value="all">全部日期</option>
                    <option value="7">最近 7 天</option>
                    <option value="30">最近 30 天</option>
                    <option value="90">最近 3 個月</option>
                    <option value="custom">自訂日期範圍</option>
                  </select>
                  {pdfExportDraft.range === 'custom' && (
                    <div className="grid grid-cols-2 gap-2">
                      <label className="space-y-1">
                        <span className="font-bold text-slate-600">開始日期</span>
                        <input
                          type="date"
                          value={pdfExportDraft.startDate}
                          onChange={(event) => setPdfExportDraft((current) => ({ ...current, startDate: event.target.value }))}
                          className="w-full border border-slate-300 rounded-xl px-2 py-2"
                        />
                      </label>
                      <label className="space-y-1">
                        <span className="font-bold text-slate-600">結束日期</span>
                        <input
                          type="date"
                          value={pdfExportDraft.endDate}
                          onChange={(event) => setPdfExportDraft((current) => ({ ...current, endDate: event.target.value }))}
                          className="w-full border border-slate-300 rounded-xl px-2 py-2"
                        />
                      </label>
                    </div>
                  )}
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-amber-900 leading-relaxed">
                  PDF 可能包含寶寶健康與個人資料；請確認只匯出需要的項目，並妥善保管或刪除不再需要的檔案。
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={closePdfSettingsModal}
                    className="py-2.5 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-50"
                  >
                    取消
                  </button>
                  <button
                    onClick={() => {
                      try {
                        localStorage.setItem('sun_baby_pdf_export_options_v1', JSON.stringify(pdfExportDraft));
                        setPdfExportOptions({ ...pdfExportDraft });
                        setShowPdfSettingsModal(false);
                        showToast('✅ PDF 匯出設定已儲存');
                      } catch (error) {
                        console.error('Failed to save PDF export settings:', error);
                        showToast('⚠️ 無法儲存 PDF 匯出設定，請稍後再試。');
                      }
                    }}
                    className="py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold"
                  >
                    儲存設定
                  </button>
                </div>
              </div>
            </div>
          )}

          {showPdfPasswordModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[70]">
              <form
                autoComplete="off"
                noValidate
                onSubmit={(event) => {
                  event.preventDefault();
                  handleConfirmPdfPassword();
                }}
                className="w-full max-w-md p-5 rounded-2xl border shadow-xl bg-white space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b">
                  <h3 className="font-bold text-base text-amber-800">設定 PDF 開啟密碼</h3>
                  <button type="button" onClick={closePdfPasswordModal} className="p-1.5 rounded-lg hover:bg-slate-100" title="取消">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-3">
                  密碼需為 4 至 8 個字元，開啟 PDF 時會需要此密碼。PDF 採 AES-256 加密，請使用支援此格式的閱讀器。密碼不會儲存；若忘記，巴掌小太陽無法取回。
                </p>
                <div className="space-y-1">
                  <label htmlFor="pdf-export-password" className="block font-bold text-slate-700">密碼</label>
                  <div className="relative">
                    <input
                      id="pdf-export-password"
                      type={showPdfPassword ? 'text' : 'password'}
                      value={pdfPassword}
                      onChange={(event) => {
                        setPdfPassword(event.target.value);
                        setPdfPasswordError('');
                      }}
                      autoComplete="off"
                      autoFocus
                      className="w-full border border-slate-300 rounded-xl px-3 py-2.5 pr-11 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPdfPassword((visible) => !visible)}
                      aria-label={showPdfPassword ? '隱藏密碼' : '顯示密碼'}
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-slate-600"
                    >
                      <Icon name="eye" className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="pdf-export-password-confirm" className="block font-bold text-slate-700">請再次輸入密碼</label>
                  <div className="relative">
                    <input
                      id="pdf-export-password-confirm"
                      type={showPdfPasswordConfirm ? 'text' : 'password'}
                      value={pdfPasswordConfirm}
                      onChange={(event) => {
                        setPdfPasswordConfirm(event.target.value);
                        setPdfPasswordError('');
                      }}
                      autoComplete="off"
                      className="w-full border border-slate-300 rounded-xl px-3 py-2.5 pr-11 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPdfPasswordConfirm((visible) => !visible)}
                      aria-label={showPdfPasswordConfirm ? '隱藏確認密碼' : '顯示確認密碼'}
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-slate-600"
                    >
                      <Icon name="eye" className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
                {pdfPasswordError && <p className="text-red-600" role="alert">{pdfPasswordError}</p>}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={closePdfPasswordModal}
                    className="py-2.5 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-50"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold"
                  >
                    加密並匯出
                  </button>
                </div>
              </form>
            </div>
          )}

          {showMilestoneModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className={`w-full max-w-md p-5 rounded-2xl border shadow-xl ${cardBg}`}>
                <div className="flex justify-between items-center pb-3 border-b mb-4">
                  <h3 className="font-bold text-base text-emerald-800">
                    {editingMilestoneId === null ? '新增發展里程碑' : '編輯發展里程碑'}
                  </h3>
                  <button onClick={() => setShowMilestoneModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>
                <label className="block text-xs font-bold text-slate-600 mb-1">里程碑內容</label>
                <textarea
                  value={milestoneText}
                  onChange={(event) => setMilestoneText(event.target.value)}
                  rows="4"
                  autoFocus
                  placeholder="例如：能自行翻身（矯正 5-6 個月）"
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => setShowMilestoneModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                  >
                    取消
                  </button>
                  <button
                    onClick={handleSaveMilestone}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold"
                  >
                    儲存
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Restored HTML Card Modal: About & Feature Description */}
          {showHelpModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className={`w-full max-w-xl p-5 rounded-2xl border shadow-xl max-h-[90vh] flex flex-col ${cardBg}`}>
                <div className="flex justify-between items-center pb-3 border-b mb-3">
                  <h3 className="font-bold text-base text-amber-800 flex items-center gap-2">
                    📖 「巴掌小太陽」說明與特色
                  </h3>
                  <button onClick={() => setShowHelpModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-1 no-scrollbar text-xs">
                  {/* Grid of 6 Feature Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Card 1 */}
                    <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                      <div className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
                        🍼 日常照護與生長紀錄
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        輕鬆記錄每日餵奶量、尿布情況與體重，掌握寶寶每一天的微小進步。
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                      <div className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                        🌱 發展里程碑清單
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        精選關鍵成長指標，幫助爸媽安心追蹤寶寶的發展。
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                      <div className="font-bold text-blue-900 text-sm flex items-center gap-1.5">
                        ⚙️ 彈性雙月齡切換
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        支援對齊【預產期】之矯正月齡與【實際出生日】之實際月齡，並可自由切換生長曲線圖表對照。
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl space-y-1">
                      <div className="font-bold text-purple-900 text-sm flex items-center gap-1.5">
                        📝 筆記本
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        快速記錄門診提問、成長大事記與照護備忘，支援語音輸入、自訂分類篩選與編輯，讓照護資訊更好整理。
                      </p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1">
                      <div className="font-bold text-indigo-900 text-sm flex items-center gap-1.5">
                        📄 一鍵匯出 PDF 報表
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        看診或回診時，能直接將記錄匯出成整潔清晰的 PDF，方便與醫療團隊溝通。
                      </p>
                    </div>

                    <div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl space-y-1">
                      <div className="font-bold text-purple-900 text-sm flex items-center gap-1.5">
                        💉 疫苗接種紀錄
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        記下疫苗名稱、劑次、接種地點與副作用，回診時能快速提供完整資訊。
                      </p>
                    </div>

                    <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                      <div className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                        🥣 副食品試吃紀錄
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        參考安全食材清單並記錄份量、過敏等級與反應，安心追蹤每次嘗試。
                      </p>
                    </div>

                    <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                      <div className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
                        ☀️ 照護提醒
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        設定照護事項與時間，網頁開啟時會提示；提醒也會納入備份與還原，更換裝置時可先備份再匯入。
                      </p>
                    </div>

                  </div>

                  {/* 🌸 溫馨陪伴理念卡片 */}
                  <div className="p-3.5 bg-pink-50/80 border border-pink-200 rounded-xl space-y-1.5">
                    <div className="font-bold text-pink-900 text-sm flex items-center gap-1.5">
                      🌸 溫馨陪伴理念
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      這款工具不帶任何商業盈利目的或複雜條款，只希望能像它的名字一樣，靜靜地陪伴、溫暖每一個需要的家庭。
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      如果您身邊有早產兒新手爸媽，歡迎將「巴掌小太陽」分享給他們；如果您正走在這段旅程中，也希望這份小工具能陪伴您。願每一位像小太陽般勇敢的孩子，都能在大家的守護下，平安健康地長大！ ❤️
                    </p>
                  </div>

                  {/* ☀️ 給早產兒爸媽的一封信卡片 */}
                  <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl space-y-2.5 text-amber-950 shadow-sm">
                    <div className="font-bold text-amber-900 text-sm flex items-center gap-1.5 border-b border-amber-200 pb-2">
                      ☀️ 給早產兒爸媽的一封信
                    </div>
                    <p className="leading-relaxed">
                      各位辛苦的爸爸媽媽們好，我是亮愷。
                    </p>
                    <p className="leading-relaxed">
                      我是一名在 30 週、僅 1450 公克時出生的早產兒（也就是大家常說的「巴掌仙子」）。一路走來，我深深明白早產兒家庭在育兒起步時，常要面對許多焦慮、手忙腳亂，以及繁瑣的成長紀錄。
                    </p>
                    <p className="leading-relaxed">
                      因此，我利用空閒時間，運用工程師的背景，從無到有打造了一款完全免費、無商業氣息的網頁工具——「巴掌小太陽」，希望能給予這群辛苦的爸媽們一些最實質的陪伴與幫助。
                    </p>
                    <p className="leading-relaxed font-semibold pt-1 border-t border-amber-200/60 text-amber-900">
                      本應用程式由早產兒亮愷為公益個人開發，免費提供予所有早產兒家庭使用。
                    </p>
                  </div>

                  {/* 🔒 隱私權與資料安全保護聲明 */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                    <div className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                      🔒 隱私權與資料安全保護聲明
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      巴掌小太陽重視您與寶寶的隱私。本網頁使用瀏覽器本機儲存（Local Storage），保存您輸入的寶寶姓名、生日、預產期，以及體重、身高、頭圍等日常照護紀錄；本工具不會主動將這些紀錄上傳至伺服器。
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      語音辨識的處理方式依您使用的瀏覽器與裝置服務而異。
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      『巴掌小太陽』純粹為公益與照護輔助而生，沒有會員登入或廣告追蹤。請妥善保管您的裝置，並定期備份重要紀錄。希望這份小工具能成為您與寶寶安心育兒路上的陪伴。尊重隱私，也請安心使用。
                    </p>
                  </div>

                  {/* 開發日期 */}
                </div>

                <div className="pt-3 border-t mt-3 flex justify-end">
                  <button
                    onClick={() => setShowHelpModal(false)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
                  >
                    了解，開始使用！
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  