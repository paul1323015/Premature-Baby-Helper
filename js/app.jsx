
    const Icon = ({ name, className = "w-5 h-5", ...props }) => {
      const icons = {
        sun: <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />,
        edit: <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />,
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
        eye: <g><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7Z" /><circle cx="12" cy="12" r="3" /></g>,
        stethoscope: <g><path d="M4.8 2.3A.3.3 0 0 0 4.5 2.6V8A6 6 0 0 0 16.5 8V2.6a.3.3 0 0 0-.3-.3h-1.4a.3.3 0 0 0-.3.3V8a4 4 0 0 1-8 0V2.6a.3.3 0 0 0-.3-.3z" /><path d="M12 14v4a2 2 0 0 0 2 2h2a3 3 0 0 0 3-3V11" /></g>,
        sparkles: <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />,
        user: <g><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></g>,
        info: <g><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></g>,
        download: <g><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></g>,
        upload: <g><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></g>,
        database: <g><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></g>,
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
      return `${year}${month}${day}_${hours}-${minutes}-${seconds}`;
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

      const chronoMInt = Math.floor(chronoMonths);
      const chronoDaysRemaining = Math.floor(chronoDays % 30.4375);

      let correctedText = '';
      if (dueDate && correctedDays < 0) {
        const remainingWeeks = Math.ceil(Math.abs(correctedDays) / 7);
        correctedText = `尚未滿預產期 (差約 ${remainingWeeks} 週)`;
      } else if (correctedMonths > 24) {
        correctedText = '已滿 2 歲（建議參考常規兒童生長曲線）';
      } else {
        const correctedMInt = Math.floor(correctedDays / 30.4375);
        const correctedDaysRemaining = Math.floor(correctedDays % 30.4375);
        correctedText = `矯正 ${correctedMInt} 個月 ${correctedDaysRemaining} 天`;
      }

      return {
        measurementStr: measurementClean,
        measurementDate,
        chronoDays,
        chronoMonths,
        correctedDays,
        correctedMonths,
        chronoText: `實際 ${chronoMInt} 個月 ${chronoDaysRemaining} 天`,
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

    const PretermGrowthChart = ({ metric, gender, babyInfo, growthHistory, onAddGrowthRecord, onDeleteGrowthRecord }) => {
      const [showRecordModal, setShowRecordModal] = React.useState(false);
      const [useChronoAxis, setUseChronoAxis] = React.useState(false);
      const [showPercentiles, setShowPercentiles] = React.useState(true);
      const [recDate, setRecDate] = React.useState(getLocalDateString());
      const [recWeight, setRecWeight] = React.useState(babyInfo.currentWeight || '');
      const [recHeight, setRecHeight] = React.useState(babyInfo.currentHeight || '');
      const [recHead, setRecHead] = React.useState(babyInfo.currentHead || '');

      const metricConfig = {
        weight: { label: '體重', unit: 'kg', minY: 0, maxY: 15, yTicks: [0, 2, 4, 6, 8, 10, 12, 14] },
        height: { label: '身長', unit: 'cm', minY: 35, maxY: 95, yTicks: [35, 45, 55, 65, 75, 85, 95] },
        head: { label: '頭圍', unit: 'cm', minY: 25, maxY: 52, yTicks: [25, 30, 35, 40, 45, 50] },
      }[metric];

      const refData = (WHO_GROWTH_DATA[gender] || WHO_GROWTH_DATA.boy)[metric];

      const width = 600;
      const height = 340;
      const padding = { top: 25, right: 35, bottom: 55, left: 45 };

      const MS_PER_DAY = 1000 * 60 * 60 * 24;
      const babyPoints = growthHistory.map(item => {
        // parse numeric value; if empty or invalid, skip plotting
        let val = parseFloat(item[metric]);
        if (isNaN(val)) return null;

        if (metric === 'weight' && val > 30) {
          // some weight entries were stored in grams; convert large numbers to kg
          val = val / 1000;
        }

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
      const maxX = Math.max(12, Math.ceil(Math.min(24, maxBabyMonth + 1)));

      const xScale = (month) => padding.left + ((month - minX) / (maxX - minX)) * (width - padding.left - padding.right);
      const yScale = (val) => height - padding.bottom - ((val - metricConfig.minY) / (metricConfig.maxY - metricConfig.minY)) * (height - padding.top - padding.bottom);

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

      const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!recDate) return;

        const cleanDate = sanitizeDateStr(recDate);

        onAddGrowthRecord({
          id: Date.now(),
          date: cleanDate,
          weight: recWeight,
          height: recHeight,
          head: recHead
        });
        setShowRecordModal(false);
      };

      return (
        <div className="space-y-3">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed flex flex-col gap-2 shadow-sm sm:flex-row sm:items-start">
            <div className="flex items-start gap-2 flex-1 min-w-0">
              <Icon name="sparkles" className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <span className="font-bold block text-amber-800">⚡️ 生長曲線軸線設定：</span>
                <span className="block">預設以【預產期】為 0 個月對齊矯正月齡；如需查看實際出生月齡，可點擊上方按鈕切換觀看。</span>
              </div>
            </div>
            <button
              onClick={() => setUseChronoAxis(!useChronoAxis)}
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
                <span className="text-[10px] text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full font-bold">
                  X軸 = {useChronoAxis ? '實際月齡' : '矯正月齡'}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setShowPercentiles(!showPercentiles)}
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
                  onClick={() => setShowRecordModal(true)}
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
                return (
                  <g key={`x-${mVal}`}>
                    <line x1={xPos} y1={padding.top} x2={xPos} y2={height - padding.bottom} stroke={isZero ? "#f59e0b" : "#f1f5f9"} strokeWidth={isZero ? "2" : "1"} strokeDasharray={isZero ? "3,3" : "none"} />
                    <line x1={xPos} y1={height - padding.bottom} x2={xPos} y2={height - padding.bottom + 5} stroke={isZero ? "#d97706" : "#cbd5e1"} strokeWidth={isZero ? "2" : "1"} />
                    <text x={xPos} y={height - padding.bottom + 17} textAnchor="middle" className={`font-mono text-[9px] ${isZero ? 'fill-amber-600 font-extrabold text-[10px]' : 'fill-slate-500 font-medium'}`}>
                      {isZero ? '0個月' : `${mVal}個`}
                    </text>
                    {isZero && !useChronoAxis && (
                      <text x={xPos} y={height - padding.bottom + 28} textAnchor="middle" className="fill-amber-600 font-bold text-[8px]">(預產期)</text>
                    )}
                  </g>
                );
              })}

              {/* Emphasize the 0-month baseline (出生/預產期) with a prominent reference line and labels */}
              {zeroInRange && (
                <g key="zero-ref">
                  <line x1={zeroX} y1={padding.top} x2={zeroX} y2={height - padding.bottom} stroke="#d97706" strokeWidth="3" strokeDasharray="6,3" opacity="0.95" />
                  <circle cx={zeroX} cy={height - padding.bottom} r="5" className="fill-amber-600 stroke-white stroke-1" />
                  <text x={zeroX} y={padding.top - 6} textAnchor="middle" className="fill-amber-700 font-bold text-[10px]">基準 0 個月</text>
                  <text x={zeroX} y={height - padding.bottom + 33} textAnchor="middle" className="fill-amber-700 font-bold text-[9px]">
                    {useChronoAxis ? '（出生日）' : '（預產期）'}
                  </text>
                </g>
              )}

              <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="#94a3b8" strokeWidth="1.5" />

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
                const chartAgeDays = useChronoAxis ? p.chronoDays : p.correctedDays;
                const labelText = formatAgeText(chartAgeDays, useChronoAxis ? '實際' : '矯正', true);
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
                          <span>{cleanDate}</span>
                          <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold">
                            {ages.correctedText} / {ages.chronoText}
                          </span>
                          {ages.inconsistent && (
                            <span className="ml-2 inline-flex items-center gap-1 text-red-600 font-bold text-[11px]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"/></svg>
                              資料異常
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 space-x-2">
                          {rec.weight && <span>體重: <b className="text-slate-700">{rec.weight} kg</b></span>}
                          {rec.height && <span>身長: <b className="text-slate-700">{rec.height} cm</b></span>}
                          {rec.head && <span>頭圍: <b className="text-slate-700">{rec.head} cm</b></span>}
                        </div>
                      </div>
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
              <div className="w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700">新增生長數據紀錄</h3>
                  <button onClick={() => setShowRecordModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold block mb-1">測量日期</label>
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
                        對應矯正月齡：{
                          getCorrectedAgeAtDate(recDate, babyInfo.birthDate, babyInfo.dueDate) > 24
                            ? "已滿 2 歲"
                            : getCorrectedAgeAtDate(recDate, babyInfo.birthDate, babyInfo.dueDate) < 0
                            ? `預產期前`
                            : `${getCorrectedAgeAtDate(recDate, babyInfo.birthDate, babyInfo.dueDate).toFixed(1)} 個月`
                        }
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="font-bold block mb-1">體重(kg)</label>
                      <input type="number" step="0.01" placeholder="3.2" value={recWeight} onChange={(e) => setRecWeight(e.target.value)} className="w-full p-2 border rounded-xl" />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">身長(cm)</label>
                      <input type="number" step="0.1" placeholder="48" value={recHeight} onChange={(e) => setRecHeight(e.target.value)} className="w-full p-2 border rounded-xl" />
                    </div>
                    <div>
                      <label className="font-bold block mb-1">頭圍(cm)</label>
                      <input type="number" step="0.1" placeholder="34" value={recHead} onChange={(e) => setRecHead(e.target.value)} className="w-full p-2 border rounded-xl" />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setShowRecordModal(false)} className="flex-1 py-2 text-xs border rounded-xl text-slate-500 font-bold">取消</button>
                    <button type="submit" className="flex-1 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md">儲存數據</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    };

    function App() {
      const [isNightMode, setIsNightMode] = React.useState(false);
      const [activeTab, setActiveTab] = React.useState('dashboard');
      const [showHelpModal, setShowHelpModal] = React.useState(false);
      const [showBackupModal, setShowBackupModal] = React.useState(false);
      const [showDataMgmtModal, setShowDataMgmtModal] = React.useState(false);
      const [showNotesModal, setShowNotesModal] = React.useState(false);
      const [isExporting, setIsExporting] = React.useState(false);

      const [toastMsg, setToastMsg] = React.useState('');

      const showToast = (msg) => {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(''), 3000);
      };

      const [selectedMetric, setSelectedMetric] = React.useState('weight');
      const [selectedGender, setSelectedGender] = React.useState('boy');

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

      const [doctorNotes, setDoctorNotes] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_doctor_notes_v1');
        if (saved) {
          try { return JSON.parse(saved); } catch (e) {}
        }
        return [];
      });

      const [notes, setNotes] = React.useState(() => {
        const saved = localStorage.getItem('sun_baby_notes_v1');
        if (saved) {
          try { return JSON.parse(saved); } catch (e) {}
        }
        return [];
      });

      // Notebook Form & Editing States
      const [noteCategory, setNoteCategory] = React.useState('回診提問');
      const [noteTitle, setNoteTitle] = React.useState('');
      const [noteContent, setNoteContent] = React.useState('');
      const [filterNoteCategory, setFilterNoteCategory] = React.useState('全部');
      const [editingNoteId, setEditingNoteId] = React.useState(null);

      const [milestones, setMilestones] = React.useState([
        { id: 1, text: '俯臥（趴著）時能短暫抬起頭部 45 度 (矯正 1-2 個月)', done: false },
        { id: 2, text: '眼神能跟隨視線移動或關注黑白卡 10 秒 (矯正 1-2 個月)', done: false },
        { id: 3, text: '聽到大人溫柔說話會停止哭泣或發出咕嚕聲 (矯正 2 個月)', done: false },
        { id: 4, text: '手掌能由緊握逐漸放鬆，雙手偶爾碰觸 (矯正 2-3 個月)', done: false },
      ]);

      const [showEditProfileModal, setShowEditProfileModal] = React.useState(false);
      const [editFormData, setEditFormData] = React.useState({ ...babyInfo });
      const [pastedJson, setPastedJson] = React.useState('');
      const AUTO_BACKUP_STORAGE_KEY = 'sun_baby_recent_auto_backups_v1';
      const APP_STORAGE_KEYS = [
        'sun_baby_profile_v5',
        'sun_baby_growth_history_v1',
        'sun_baby_logs_v1',
        'sun_baby_doctor_notes_v1',
        'sun_baby_notes_v1',
        'sun_baby_emergency_snapshot_v1',
        AUTO_BACKUP_STORAGE_KEY
      ];

      const readRecentAutoBackups = () => {
        try {
          const saved = localStorage.getItem(AUTO_BACKUP_STORAGE_KEY);
          if (!saved) return [];
          const parsed = JSON.parse(saved);
          return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
          console.error('Failed to read recent auto backups:', error);
          return [];
        }
      };

      const [recentAutoBackups, setRecentAutoBackups] = React.useState(() => readRecentAutoBackups());
      const [showStorageRecoveryModal, setShowStorageRecoveryModal] = React.useState(false);
      const [storageRecoveryMeta, setStorageRecoveryMeta] = React.useState({
        title: '儲存空間不足',
        message: '本地儲存空間不足，資料還原已暫停，請先清理或另行備份。',
        backupData: null
      });

      const persistRecentAutoBackups = (entries) => {
        const trimmed = Array.isArray(entries) ? entries.slice(0, 3) : [];
        setRecentAutoBackups(trimmed);
        try {
          if (trimmed.length > 0) {
            localStorage.setItem(AUTO_BACKUP_STORAGE_KEY, JSON.stringify(trimmed));
          } else {
            localStorage.removeItem(AUTO_BACKUP_STORAGE_KEY);
          }
        } catch (error) {
          console.error('Failed to persist recent auto backups:', error);
          setStorageRecoveryMeta({
            title: '儲存空間不足',
            message: '進階還原紀錄無法寫入本機儲存空間，已暫停保存。請先清理或下載備份檔案後再繼續。',
            backupData: createBackupPayload()
          });
          setShowStorageRecoveryModal(true);
        }
      };

      const clearRecentAutoBackups = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除所有進階還原紀錄。清除後將無法再從最近 3 筆自動備份中還原。確定要繼續嗎？'
        );
        if (!confirmed) return;

        persistRecentAutoBackups([]);
        showToast('🗑️ 已清除所有自動備份紀錄');
      };

      const clearAppStorageData = () => {
        APP_STORAGE_KEYS.forEach((key) => {
          try { localStorage.removeItem(key); } catch (error) { console.error('Failed to remove key:', key, error); }
        });
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
        safeSetStorageItem('sun_baby_doctor_notes_v1', JSON.stringify(doctorNotes));
      }, [doctorNotes]);

      React.useEffect(() => {
        safeSetStorageItem('sun_baby_notes_v1', JSON.stringify(notes));
      }, [notes]);

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
        return `巴掌小太陽_照護與歷史測量${label}_${safeName}_${formatLocalDateTimeForFileName()}.json`;
      };

      const createBackupPayload = () => ({
        version: '1.3',
        exportTimestamp: new Date().toISOString(),
        babyInfo,
        growthHistory,
        logs,
        doctorNotes,
        milestones,
        notes,
        notebook: notes,
        notebookNotes: notes,
        doctorQuestions: doctorNotes
      });

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

      const recordBackupHistoryEntry = (label, fileName, payload) => {
        if (!payload || typeof payload !== 'object') return null;

        const entry = {
          id: `${label}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          label,
          fileName: fileName || `${label}_${formatLocalDateTimeForFileName()}.json`,
          timestamp: payload.exportTimestamp || new Date().toISOString(),
          payload
        };

        const nextEntries = [entry, ...readRecentAutoBackups()].slice(0, 3);
        persistRecentAutoBackups(nextEntries);
        return entry;
      };

      const autoBackupCurrentDataBeforeRestore = () => {
        try {
          const safeName = (babyInfo.name || '寶寶').replace(/[\\/:*?"<>|]/g, '').trim() || '寶寶';
          const fileName = `巴掌小太陽_還原前自動備份_${safeName}_${formatLocalDateTimeForFileName()}.json`;
          const backupData = downloadBackupPayload('還原前自動備份', fileName);
          recordBackupHistoryEntry('還原前自動備份', fileName, backupData);
          showToast('📦 已先自動備份目前資料，將在還原前下載。');
          return true;
        } catch (error) {
          console.error('Auto backup before restore failed:', error);
          showToast('⚠️ 自動備份目前資料失敗，但仍可繼續還原。');
          return false;
        }
      };

      const handleExportBackupJSON = () => {
        const backupData = downloadBackupPayload('備份');
        const fileName = buildBackupFileName('備份');
        recordBackupHistoryEntry('手動備份', fileName, backupData);
        showToast('✅ 備份檔案已成功下載！');
      };

      const handleRestoreRecentAutoBackup = (entry) => {
        if (!entry || !entry.payload) {
          showToast('⚠️ 此備份資料遺失，無法還原。');
          return;
        }

        const restoredAt = entry.timestamp ? new Date(entry.timestamp) : new Date();
        const timeText = !isNaN(restoredAt.getTime()) ? formatLocalDateTime(restoredAt) : '未知時間';
        const confirmed = window.confirm(
          `即將載入最近自動備份（建立時間：${timeText}）。\n\n此動作將覆蓋目前所有資料，請確認是否繼續？`
        );
        if (!confirmed) {
          showToast('⚠️ 已取消還原最近自動備份。');
          return;
        }

        handleImportBackupObj(entry.payload);
      };

      const handleCopyBackupToClipboard = () => {
        const backupData = {
          version: '1.3',
          exportTimestamp: new Date().toISOString(),
          babyInfo,
          growthHistory,
          logs,
          doctorNotes,
          milestones,
          notes,
          notebook: notes,
          notebookNotes: notes,
          doctorQuestions: doctorNotes
        };
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
        if (!backupData || typeof backupData !== 'object') {
          showToast('❌ 備份資料格式不正確，請重新選擇備份檔案。');
          return;
        }

        const backupTimestamp = backupData.exportTimestamp ? new Date(backupData.exportTimestamp) : null;
        const isValidDate = backupTimestamp && !isNaN(backupTimestamp.getTime());
        const backupTimeText = isValidDate
          ? formatLocalDateTime(backupTimestamp)
          : '未知時間';

        const restoreMessage = `即將載入還原檔案（建立時間：${backupTimeText}）。\n\n系統將先自動下載一份目前資料的備份檔案，避免還原後遺失現有紀錄。\n\n此動作會覆蓋目前所有資料，請確認是否繼續？`;
        const confirmed = window.confirm(restoreMessage);
        if (!confirmed) {
          setPastedJson('');
          showToast('⚠️ 已取消還原，未覆蓋目前資料。');
          return;
        }

        const emergencySnapshot = createBackupPayload();
        const snapshotPersisted = safeSetStorageItem('sun_baby_emergency_snapshot_v1', JSON.stringify(emergencySnapshot));
        if (!snapshotPersisted) {
          setPastedJson('');
          showToast('⚠️ 本機儲存空間不足，還原已暫停。');
          return;
        }

        autoBackupCurrentDataBeforeRestore();

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

        if (Array.isArray(backupData.doctorNotes) || Array.isArray(backupData.doctorQuestions)) {
          setDoctorNotes(Array.isArray(backupData.doctorNotes) ? backupData.doctorNotes : backupData.doctorQuestions);
        } else if (Object.prototype.hasOwnProperty.call(backupData, 'doctorNotes') || Object.prototype.hasOwnProperty.call(backupData, 'doctorQuestions')) {
          setDoctorNotes([]);
        }

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

        const restoredSections = [];
        if (backupData.notes || backupData.notebook || backupData.notebookNotes) restoredSections.push('筆記本');
        if (backupData.babyInfo) restoredSections.push('今日快照');
        if (backupData.growthHistory) restoredSections.push('歷史測量列表');
        if (backupData.logs) restoredSections.push('照護日誌');
        if (backupData.doctorNotes || backupData.doctorQuestions) restoredSections.push('看診備忘');

        setShowBackupModal(false);
        setPastedJson('');
        showToast(`🎉 已還原：${restoredSections.join(' / ') || '資料'}`);
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

      const handleSaveNote = (e) => {
        e.preventDefault();

        if (!noteTitle.trim()) {
          showToast('⚠️ 請輸入筆記標題！');
          return;
        }

        if (editingNoteId !== null) {
          setNotes(notes.map(n => {
            if (n.id === editingNoteId) {
              return {
                ...n,
                category: noteCategory,
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
          if (notes.length >= 1000) {
            showToast('⚠️ 筆記總數已達 1000 條上限，請先刪除舊筆記！');
            return;
          }

          const now = new Date();
          const dateStr = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

          const newNote = {
            id: Date.now(),
            category: noteCategory,
            title: noteTitle.slice(0, 30).trim(),
            content: noteContent.slice(0, 1000).trim(),
            createdAt: dateStr
          };

          setNotes([newNote, ...notes]);
          setNoteTitle('');
          setNoteContent('');
          showToast('📝 已新增筆記！');
        }
      };

      const handleStartEditNote = (note) => {
        setEditingNoteId(note.id);
        setNoteCategory(note.category);
        setNoteTitle(note.title || '');
        setNoteContent(note.content || '');
      };

      const handleCancelEditNote = () => {
        setEditingNoteId(null);
        setNoteCategory('回診提問');
        setNoteTitle('');
        setNoteContent('');
      };

      const handleDeleteNote = (id) => {
        if (editingNoteId === id) {
          handleCancelEditNote();
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
          birthDate: sanitizeDateStr(editFormData.birthDate),
          dueDate: sanitizeDateStr(editFormData.dueDate)
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

      const handleDeleteGrowthRecord = (id) => {
        setGrowthHistory(growthHistory.filter(item => item.id !== id));
        showToast('🗑️ 已刪除測量點');
      };

      const handleResetData = () => {
        const confirmed = window.confirm(
          "警告：此操作將清除所有寶寶照護與筆記本資料！資料刪除後無法復原。建議先使用畫面上方的『備份/還原』功能匯出備份檔案。確定要繼續清空所有資料嗎？"
        );
        if (!confirmed) return;

        localStorage.removeItem('sun_baby_profile_v5');
        localStorage.removeItem('sun_baby_growth_history_v1');
        localStorage.removeItem('sun_baby_logs_v1');
        localStorage.removeItem('sun_baby_doctor_notes_v1');
        localStorage.removeItem('sun_baby_notes_v1');

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
        setDoctorNotes([]);
        setNotes([]);
        setShowEditProfileModal(false);
        showToast('🧹 已重置清空所有本地資料');
      };

      const handleClearLogs = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除所有照護日誌（餵奶、尿布等紀錄）。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setLogs([]);
        showToast('🗑️ 已清除照護日誌');
      };

      const handleClearDoctorNotes = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除所有看診備忘與筆記。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setDoctorNotes([]);
        showToast('🗑️ 已清除看診備忘/筆記');
      };

      const handleClearGrowthData = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將清除所有生長測量數據。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setGrowthHistory([]);
        showToast('🗑️ 已清除生長數據');
      };

      const handleResetMilkSettings = () => {
        const confirmed = window.confirm(
          '⚠️ 此操作將重置每日奶量進度與目標。確定要繼續嗎？'
        );
        if (!confirmed) return;
        setLogs((prevLogs) => prevLogs.filter((item) => item.type !== 'feeding'));
        setBabyInfo((prev) => ({ ...prev, targetDailyMilk: '' }));
        showToast('🧴 已重置奶量設定/目標');
      };

      const handleDownloadPDF = () => {
        setIsExporting(true);
        showToast('📄 正在生成 PDF 報告，請稍候...');
        setTimeout(() => {
          const element = document.getElementById('pdf-report-content');
          if (!element) {
            setIsExporting(false);
            showToast('❌ 匯出失敗，無法找到 PDF 報告內容組件。');
            return;
          }

          element.style.display = 'block';

          const opt = {
            margin: 10,
            filename: `${babyInfo.name || '寶寶'}_巴掌小太陽·早產兒門診照護與生長報告_${formatLocalDateTimeForFileName()}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };

          if (window.html2pdf) {
            window.html2pdf().set(opt).from(element).save().then(() => {
              element.style.display = 'none';
              setIsExporting(false);
              showToast('✅ PDF 報告已順利匯出下載！');
            }).catch((err) => {
              console.error(err);
              element.style.display = 'none';
              setIsExporting(false);
              showToast('❌ PDF 產生過程中發生錯誤。');
            });
          } else {
            window.print();
            element.style.display = 'none';
            setIsExporting(false);
          }
        }, 150);
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

      const [newDoctorQuestion, setNewDoctorQuestion] = React.useState('');
      const [showAddLogModal, setShowAddLogModal] = React.useState(false);
      const [newLogType, setNewLogType] = React.useState('feeding');
      const [newLogDetail, setNewLogDetail] = React.useState('');
      const [newLogAmount, setNewLogAmount] = React.useState('');

      const [chatMessages, setChatMessages] = React.useState([
        { sender: 'bot', text: '你好！我是巴掌小太陽的 AI 照護助手 ☀️。您可以詢問關於【矯正月齡生長曲線】計算、每日奶量評估、資料同步備份與還原、筆記本使用等問題喔！' }
      ]);
      const [inputMessage, setInputMessage] = React.useState('');

      const todayTotalMilk = React.useMemo(() => {
        return logs
          .filter(l => l.type === 'feeding' && l.amount)
          .reduce((sum, l) => sum + parseInt(l.amount || '0', 10), 0);
      }, [logs]);

      const targetMilkNum = parseInt(babyInfo.targetDailyMilk || '0', 10);
      const milkPercent = targetMilkNum > 0 ? Math.min(100, Math.round((todayTotalMilk / targetMilkNum) * 100)) : 0;

      const handleAddLog = (e) => {
        e.preventDefault();
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        const newEntry = {
          id: Date.now(),
          type: newLogType,
          time: timeStr,
          detail: newLogDetail || (newLogType === 'feeding' ? '瓶餵母乳/配方奶' : '濕尿布'),
          amount: newLogType === 'feeding' && newLogAmount ? `${newLogAmount}ml` : null,
        };

        setLogs([newEntry, ...logs]);
        setShowAddLogModal(false);
        setNewLogDetail('');
        setNewLogAmount('');
        showToast('🍼 已上記錄！');
      };

      const handleAddDoctorNote = (e) => {
        e.preventDefault();
        if (!newDoctorQuestion.trim()) return;
        setDoctorNotes([
          ...doctorNotes,
          { id: Date.now(), question: newDoctorQuestion, answered: false, tag: '門診提問' }
        ]);
        setNewDoctorQuestion('');
        showToast('🏥 已新增看診問題！');
      };

      const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userText = inputMessage;
        setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
        setInputMessage('');

        setTimeout(() => {
          let replyText = "早產兒請務必根據【矯正月齡】來對照生長與發展指標！若要跨裝置或備份資料，可隨時點擊右上角「備份/還原」匯出備份檔案。";
          const babyName = babyInfo.name || '寶寶';
          if (userText.includes('備份') || userText.includes('還原') || userText.includes('匯入') || userText.includes('匯出')) {
            replyText = `點擊上方選單列的【備份/還原】按鈕，即可將 ${babyName} 的「基本設定檔」、「歷史測量列表」以及「筆記本」完整下載成備份檔案。更換手機或瀏覽器時貼上即可秒速還原！`;
          } else if (userText.includes('筆記') || userText.includes('記')) {
            replyText = `點擊頁面頂部的【筆記本】按鈕即可快速紀錄【回診提問】、【成長大事記】與【其他備忘】。單篇上限 1000 字，最多可儲存 1000 條筆記，並隨時支援編輯與覆蓋更新喔！`;
          } else if (userText.includes('矯正') || userText.includes('算') || userText.includes('曲線')) {
            replyText = `評估 ${babyName} 的身高、體重與頭圍時，請統一查看【生長與發展】分頁的生長曲線圖，其 X 軸已鎖定預產期算的【矯正月齡】（目前為 ${ageData.correctedText}）。`;
          } else if (userText.includes('奶量') || userText.includes('喝')) {
            const weight = parseFloat(babyInfo.currentWeight || '0');
            if (weight > 0) {
              const minMilk = Math.round(weight * 150);
              const maxMilk = Math.round(weight * 180);
              replyText = `早產兒每日建議總奶量公式為：體重(kg) × 150ml ~ 180ml。以 ${babyName} 目前體重 ${weight}kg 計算，一天建議總奶量約為 ${minMilk}ml ~ ${maxMilk}ml。`;
            } else {
              replyText = `早產兒每日建議總奶量公式為：體重(kg) × 150ml ~ 180ml。您可以先點擊「自訂/修改」填入寶寶體重來計算喔！`;
            }
          }
          setChatMessages(prev => [...prev, { sender: 'bot', text: replyText }]);
        }, 600);
      };

      const filteredNotes = notes.filter(n => filterNoteCategory === '全部' || n.category === filterNoteCategory);

      const themeBg = isNightMode ? 'bg-slate-900 text-slate-100' : 'bg-amber-50/50 text-slate-800';
      const cardBg = isNightMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-amber-100';

      return (
        <div className={`min-h-screen font-sans ${themeBg} transition-colors duration-200 relative`}>
          {toastMsg && (
            <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl flex items-center gap-2 border border-slate-700 animate-bounce">
              <span>{toastMsg}</span>
            </div>
          )}

          {/* Header Bar */}
          <header className={`sticky top-0 z-30 border-b ${isNightMode ? 'bg-slate-900 border-slate-800' : 'bg-amber-500 text-white border-amber-600'}`}>
            <div className="max-w-4xl mx-auto px-3 py-3 sm:px-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-2 min-w-0">
                <div className="p-2 bg-yellow-400 text-amber-900 rounded-full shadow-md shrink-0">
                  <Icon name="sun" className="w-5 h-5 fill-current" />
                </div>
                <div className="min-w-0">
                  <h1 className="font-bold text-base flex items-center gap-2">巴掌小太陽</h1>
                  <p className="text-[11px] opacity-90">早產兒照護小幫手</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-1.5 min-w-0 w-full sm:w-auto">
                <button
                  onClick={() => setShowNotesModal(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 shadow-sm flex-shrink-0"
                  title="開啟筆記本"
                >
                  <Icon name="book" className="w-4 h-4" />
                  <span>筆記本</span>
                </button>
                <button
                  onClick={() => setShowBackupModal(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 shadow-sm flex-shrink-0"
                  title="開啟資料備份與還原"
                >
                  <Icon name="database" className="w-4 h-4" />
                  <span>備份/還原</span>
                </button>
                <button
                  onClick={() => setShowDataMgmtModal(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 shadow-sm flex-shrink-0"
                  title="開啟資料管理"
                >
                  <Icon name="trash" className="w-4 h-4" />
                  <span>資料管理</span>
                </button>
                <button
                  onClick={handleDownloadPDF}
                  disabled={isExporting}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1 shadow-sm disabled:opacity-50 flex-shrink-0"
                  title="下載完整記錄 PDF"
                >
                  <Icon name="download" className="w-4 h-4" />
                  <span>{isExporting ? '匯出中...' : 'PDF'}</span>
                </button>
                <button
                  onClick={() => setShowHelpModal(true)}
                  className="p-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-colors flex-shrink-0"
                  title="說明與特色"
                >
                  <Icon name="info" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsNightMode(!isNightMode)}
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
                { id: 'chat', label: '🤖 AI 諮詢' },
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
                <div className={`p-4 rounded-2xl border ${cardBg}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      <Icon name="droplet" className="text-amber-500 w-4 h-4" />
                      今日總奶量進度
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

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
                  <button
                    onClick={() => { setNewLogType('feeding'); setShowAddLogModal(true); }}
                    className="p-4 rounded-2xl border bg-amber-50 border-amber-200 text-amber-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-amber-100 transition-colors shadow-sm md:p-5"
                  >
                    🍼 記餵奶
                  </button>
                  <button
                    onClick={() => { setNewLogType('diaper'); setShowAddLogModal(true); }}
                    className="p-4 rounded-2xl border bg-blue-50 border-blue-200 text-blue-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors shadow-sm md:p-5"
                  >
                    👶 記尿布
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Growth Chart */}
            {activeTab === 'growth' && (
              <div className={`p-4 rounded-2xl border space-y-4 md:p-5 ${cardBg}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 md:gap-3">
                  <h3 className="font-bold text-base flex items-center gap-2">
                    <Icon name="trendingUp" className="text-amber-500" />
                    矯正月齡生長曲線圖表
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
                  onDeleteGrowthRecord={handleDeleteGrowthRecord}
                />

                <div className="space-y-2 pt-2 border-t">
                  <h4 className="font-bold text-xs text-slate-700">矯正月齡發展里程碑檢核</h4>
                  {milestones.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setMilestones(milestones.map(item => item.id === m.id ? { ...item, done: !item.done } : item))}
                      className="p-3 rounded-xl border flex items-center gap-3 cursor-pointer hover:bg-amber-50/50 transition-colors bg-white"
                    >
                      <input type="checkbox" checked={m.done} readOnly className="w-4 h-4 accent-amber-500 rounded" />
                      <span className={`text-xs font-medium ${m.done ? 'line-through text-slate-400' : 'text-slate-700'}`}>{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Care Logs */}
            {activeTab === 'care' && (
              <div className="space-y-3">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-sm">今日照護紀錄</h3>
                  <button
                    onClick={() => setShowAddLogModal(true)}
                    className="px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm"
                  >
                    <Icon name="plus" className="w-3.5 h-3.5" />
                    新增紀錄
                  </button>
                </div>
                {logs.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400 border rounded-2xl bg-slate-50/50">
                    尚無紀錄，點擊「+ 新增紀錄」開始記錄餵奶與尿布吧！
                  </div>
                ) : (
                  logs.map((log) => (
                    <div key={log.id} className={`p-3 rounded-xl border flex justify-between items-center ${cardBg}`}>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-600">{log.time}</span>
                        <span className="text-xs font-medium">{log.detail}</span>
                      </div>
                      {log.amount && <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{log.amount}</span>}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Tab 4: Doctor Notes */}
            {activeTab === 'doctor' && (
              <div className={`p-4 rounded-2xl border space-y-4 ${cardBg}`}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base flex items-center gap-2">
                    <Icon name="stethoscope" className="text-amber-500" /> 看診備忘與門診提問
                  </h3>
                </div>
                <form onSubmit={handleAddDoctorNote} className="flex gap-2">
                  <input
                    type="text"
                    value={newDoctorQuestion}
                    onChange={(e) => setNewDoctorQuestion(e.target.value)}
                    placeholder="寫下想問新生兒加護病房或主治醫師的問題..."
                    className="flex-1 p-2.5 border rounded-xl text-xs"
                  />
                  <button type="submit" className="px-4 py-2.5 bg-amber-500 text-white rounded-xl text-xs font-bold shadow-sm">新增</button>
                </form>
                <div className="space-y-2">
                  {doctorNotes.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400 border rounded-xl bg-slate-50">
                      尚無看診問題備忘
                    </div>
                  ) : (
                    doctorNotes.map((note) => (
                      <div key={note.id} className="p-3 border rounded-xl text-xs space-y-1 bg-white">
                        <div className="flex justify-between items-center">
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold">{note.tag}</span>
                          <button
                            onClick={() => setDoctorNotes(doctorNotes.map(n => n.id === note.id ? { ...n, answered: !n.answered } : n))}
                            className={note.answered ? 'text-green-600 font-bold' : 'text-slate-400 hover:text-slate-600'}
                          >
                            {note.answered ? '✓ 醫師已解答' : '標記為已解答'}
                          </button>
                        </div>
                        <p className="font-medium text-slate-700">{note.question}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Tab 5: AI Consultation */}
            {activeTab === 'chat' && (
              <div className={`p-4 rounded-2xl border flex flex-col h-[30rem] ${cardBg}`}>
                <div className="mb-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5 shadow-sm">
                  <Icon name="alertTriangle" className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <span className="font-bold text-rose-800 block text-xs mb-0.5">⚠️ 醫療諮詢重要聲明：</span>
                    <p className="text-rose-700">
                      本 AI 諮詢功能結果僅供參考，不可作為醫療診斷或處方依據。寶寶身體狀況隨時變化，仍須以專業醫師評估結果為準。
                    </p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-1 no-scrollbar">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${msg.sender === 'user' ? 'bg-amber-500 text-white' : 'bg-amber-50 text-slate-800 border border-amber-200'}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendMessage} className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="詢問矯正月齡計算、奶量、資料備份、筆記本..."
                    className="flex-1 px-3 py-2 border rounded-xl text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                  <button type="submit" className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-sm transition-colors">送出</button>
                </form>
              </div>
            )}
          </main>

          {/* Printable PDF Report Element (Hidden on screen, target for html2pdf) */}
          <div id="pdf-report-content" className="hidden p-8 bg-white text-slate-800 space-y-6 font-sans">
            <div className="border-b pb-4 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-amber-700">巴掌小太陽·早產兒門診照護與生長報告</h1>
                <p className="text-xs text-slate-500 mt-1">匯出時間：{formatLocalDateTime()}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-amber-800">{babyInfo.name || '小太陽'} 寶寶</span>
                <p className="text-xs text-slate-500">{babyInfo.gender === 'girl' ? '👧 女寶' : '👦 男寶'} | {ageData.correctedText}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 text-xs bg-amber-50/50 p-4 rounded-xl border border-amber-200 sm:grid-cols-2">
              <div><b>實際出生日：</b> {babyInfo.birthDate || '未填寫'}</div>
              <div><b>預產期：</b> {babyInfo.dueDate || '未填寫'}</div>
              <div><b>出生週數：</b> {babyInfo.gestationalWeeks ? `${babyInfo.gestationalWeeks} 週` : '未填寫'}</div>
              <div><b>出生體重：</b> {babyInfo.birthWeight ? `${babyInfo.birthWeight} kg` : '未填寫'}</div>
              <div><b>實際月齡：</b> {ageData.chronoText}</div>
              <div className="sm:col-span-2"><b>當前體重/身長/頭圍：</b> {babyInfo.currentWeight ? `${babyInfo.currentWeight} kg` : '—'} / {babyInfo.currentHeight ? `${babyInfo.currentHeight} cm` : '—'} / {babyInfo.currentHead ? `${babyInfo.currentHead} cm` : '—'}</div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-sm text-slate-800 border-b pb-1">📈 歷史測量紀錄表</h3>
              {growthHistory.length === 0 ? (
                <p className="text-xs text-slate-400">尚無測量紀錄</p>
              ) : (
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b">
                      <th className="p-2 border-b">日期</th>
                      <th className="p-2 border-b">體重 (kg)</th>
                      <th className="p-2 border-b">身長 (cm)</th>
                      <th className="p-2 border-b">頭圍 (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {growthHistory.map((rec) => (
                      <tr key={rec.id} className="border-b">
                        <td className="p-2">{rec.date}</td>
                        <td className="p-2">{rec.weight || '—'}</td>
                        <td className="p-2">{rec.height || '—'}</td>
                        <td className="p-2">{rec.head || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-sm text-slate-800 border-b pb-1">🏥 看診備忘與門診提問</h3>
              {doctorNotes.length === 0 ? (
                <p className="text-xs text-slate-400">無門診提問紀錄</p>
              ) : (
                <ul className="space-y-1.5 text-xs">
                  {doctorNotes.map(n => (
                    <li key={n.id} className="p-2 bg-slate-50 border rounded-lg flex justify-between items-center">
                      <span>• {n.question}</span>
                      <span className="font-bold text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-700">{n.answered ? '✓ 醫師已解答' : '待詢問'}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-sm text-slate-800 border-b pb-1">📝 筆記本重點摘要</h3>
              {notes.length === 0 ? (
                <p className="text-xs text-slate-400">無筆記紀錄</p>
              ) : (
                <div className="space-y-2 text-xs">
                  {notes.map(n => (
                    <div key={n.id} className="p-2.5 bg-slate-50 border rounded-lg space-y-1">
                      <div className="font-bold text-amber-800">【{n.category}】{n.title} <span className="text-[10px] font-normal text-slate-400">({n.createdAt})</span></div>
                      {n.content && <p className="text-slate-600 whitespace-pre-wrap">{n.content}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-center text-[10px] text-slate-400 pt-6 border-t">
              本報告由「巴掌小太陽 · 早產兒照護小幫手」自動生成，僅供看診時輔助醫療團隊參考。
            </div>
          </div>

          {/* Edit Baby Profile Modal */}
          {showEditProfileModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700">修改寶寶基本資料</h3>
                  <button onClick={() => setShowEditProfileModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>
                <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold block mb-1">寶寶暱稱</label>
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
                    <label className="font-bold block mb-1">每日目標總奶量 (ml)</label>
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
              <div className="w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700">新增今日照護紀錄</h3>
                  <button onClick={() => setShowAddLogModal(false)} className="text-slate-400 hover:text-slate-600">
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
                  </div>

                  {newLogType === 'feeding' && (
                    <div>
                      <label className="font-bold block mb-1">餵奶量 (ml)</label>
                      <input
                        type="number"
                        required
                        placeholder="例如：60"
                        value={newLogAmount}
                        onChange={(e) => setNewLogAmount(e.target.value)}
                        className="w-full p-2 border rounded-xl"
                      />
                    </div>
                  )}

                  <div>
                    <label className="font-bold block mb-1">備註/細節</label>
                    <input
                      type="text"
                      placeholder={newLogType === 'feeding' ? '母乳 / 配方奶 / 瓶餵' : '濕尿布 / 便便 / 量多'}
                      value={newLogDetail}
                      onChange={(e) => setNewLogDetail(e.target.value)}
                      className="w-full p-2 border rounded-xl"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={() => setShowAddLogModal(false)} className="flex-1 py-2 text-xs border rounded-xl text-slate-500 font-bold">取消</button>
                    <button type="submit" className="flex-1 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md">儲存紀錄</button>
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
                          已存 {notes.length} / 1000 條
                        </span>
                      </h3>
                      <p className="text-[11px] text-slate-400">家長快速紀錄門診問題、大事記與備忘</p>
                    </div>
                  </div>
                  <button onClick={() => setShowNotesModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
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
                          value={noteCategory}
                          onChange={(e) => setNoteCategory(e.target.value)}
                          className="w-full p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                          <option value="回診提問">【回診提問】</option>
                          <option value="成長大事記">【成長大事記】</option>
                          <option value="其他備忘">【其他備忘】</option>
                        </select>
                      </div>
                      <div className="w-full sm:w-2/3">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1 flex justify-between">
                          <span>標題 (最多 30 字)</span>
                          <span className="text-[10px] text-slate-400">{noteTitle.length}/30</span>
                        </label>
                        <input
                          type="text"
                          maxLength={30}
                          placeholder="例如：下次回診請教醫師..."
                          value={noteTitle}
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
                      <textarea
                        rows={3}
                        maxLength={1000}
                        placeholder="在此輸入筆記細節..."
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                        className="w-full p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
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
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <div className="flex gap-1 overflow-x-auto no-scrollbar">
                      {['全部', '回診提問', '成長大事記', '其他備忘'].map((cat) => (
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

                  {/* Notes list */}
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {filteredNotes.length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-400 border rounded-xl bg-slate-50">
                        目前沒有{filterNoteCategory === '全部' ? '' : `【${filterNoteCategory}】`}相關筆記
                      </div>
                    ) : (
                      filteredNotes.map((note) => (
                        <div key={note.id} className="p-3 border rounded-xl bg-white shadow-sm space-y-1.5 hover:border-amber-300 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-bold text-[10px]">
                              {note.category}
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
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-md p-5 rounded-2xl border shadow-xl bg-white space-y-4 max-h-[90vh] overflow-y-auto text-xs">
                <div className="flex justify-between items-center border-b pb-2">
                  <h3 className="font-bold text-sm text-amber-700 flex items-center gap-1.5">
                    <Icon name="database" className="w-4 h-4" />
                    資料備份與還原
                  </h3>
                  <button onClick={() => setShowBackupModal(false)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2 bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-900">
                  <h4 className="font-bold text-xs">📤 匯出備份</h4>
                  <p className="text-[11px] leading-relaxed">
                    更換裝置或備份資料時使用，可以匯出完整的紀錄檔。
                  </p>
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={handleExportBackupJSON}
                      className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-1 shadow-sm transition-colors"
                    >
                      <Icon name="download" className="w-3.5 h-3.5" />
                      下載備份檔案
                    </button>
                    <button
                      onClick={handleCopyBackupToClipboard}
                      className="py-2 px-3 border border-amber-300 bg-white hover:bg-amber-100 text-amber-900 rounded-xl font-bold flex items-center justify-center gap-1 transition-colors"
                    >
                      <Icon name="copy" className="w-3.5 h-3.5" />
                      複製備份文字
                    </button>
                  </div>
                </div>

                <div className="space-y-2 bg-blue-50 p-3 rounded-xl border border-blue-200 text-blue-900">
                  <h4 className="font-bold text-xs">📥 還原資料</h4>
                  <p className="text-[11px] leading-relaxed">
                    更換裝置或備份資料時使用，可以還原完整的紀錄檔。
                  </p>
                  <div className="space-y-2 pt-1">
                    <label className="block w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-center cursor-pointer shadow-sm transition-colors">
                      <Icon name="upload" className="w-3.5 h-3.5 inline mr-1" />
                      選擇備份檔案
                      <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                    </label>
                    
                    <div className="space-y-1">
                      <textarea
                        rows={2}
                        placeholder="或貼上備份文字內容..."
                        value={pastedJson}
                        onChange={(e) => setPastedJson(e.target.value)}
                        className="w-full p-2 border rounded-xl text-[11px] font-mono bg-white"
                      />
                      <button
                        onClick={handlePasteImport}
                        className="w-full py-1.5 bg-slate-700 hover:bg-slate-800 text-white rounded-xl font-bold text-xs transition-colors"
                      >
                        貼上文字並還原
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 bg-violet-50 p-3 rounded-xl border border-violet-200 text-violet-900">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-xs">📦 進階還原（最近 3 筆備份紀錄）</h4>
                    <button
                      onClick={clearRecentAutoBackups}
                      className="text-[10px] font-bold text-violet-700 hover:text-violet-900 underline-offset-2 hover:underline"
                    >
                      清除所有紀錄
                    </button>
                  </div>
                  {recentAutoBackups.length === 0 ? (
                    <div className="p-3 rounded-xl border border-dashed border-violet-300 bg-white text-[11px] text-violet-700 leading-relaxed">
                      目前尚無備份紀錄。進行「匯出備份」或「還原前自動備份」後，這裡會自動顯示最近 3 筆可還原的紀錄。
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {recentAutoBackups.map((entry) => {
                        const entryDate = entry.timestamp ? new Date(entry.timestamp) : null;
                        const entryTimeText = entryDate && !isNaN(entryDate.getTime()) ? formatLocalDateTime(entryDate) : '未知時間';
                        return (
                          <div key={entry.id || entry.fileName} className="p-2 rounded-xl border border-violet-200 bg-white">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <div className="font-bold text-[11px] truncate">{entry.fileName || entry.label || '備份紀錄'}</div>
                                <div className="text-[10px] text-violet-700 mt-0.5">{entryTimeText}</div>
                              </div>
                              <button
                                onClick={() => handleRestoreRecentAutoBackup(entry)}
                                className="shrink-0 py-1.5 px-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-bold text-[10px] transition-colors"
                              >
                                還原
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* Data Management Modal */}
          {showDataMgmtModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="w-full max-w-md p-5 rounded-2xl border shadow-xl bg-white space-y-4 max-h-[90vh] overflow-y-auto text-xs">
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
                      onClick={handleClearLogs}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除照護日誌
                    </button>
                    <button
                      onClick={handleClearDoctorNotes}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除看診備忘/筆記
                    </button>
                    <button
                      onClick={handleClearGrowthData}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      清除生長數據
                    </button>
                    <button
                      onClick={handleResetMilkSettings}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Icon name="trash" className="w-4 h-4" />
                      重置奶量設定/目標
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
                      清除所有本地資料 (重置)
                    </button>
                  </div>
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
                    📖 「巴掌小太陽」關於與特色說明
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
                        📝 隨手筆記本
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        快速記錄門診提問、成長大事記與照護備忘，支援分類篩選與編輯，讓照護資訊不遺漏。
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

                    {/* Card 6 */}
                    <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1">
                      <div className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
                        🤖 暖心照護叮嚀與 AI 諮詢
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        內建實用的照護小叮嚀與 AI 諮詢助手，隨時陪伴爸媽走過每個焦慮時刻。
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
                      如果你身邊剛好有早產兒新手爸媽，或是你自己正經歷這段守護的旅程，歡迎直接點擊連結取用。願每一位像小太陽一樣勇敢的孩子，都能在大家的守護下，平安健康地長大！ ❤️
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
                      巴掌小太陽承諾：我們無比重視您與寶寶的隱私。本應用程式（網頁）採用瀏覽器本地快取技術（Local Storage）。您所輸入的寶寶姓名、生日、預產期，以及每一筆體重、身高、頭圍等日常照護紀錄，全部都只會儲存在您自己的手機或電腦瀏覽器中。
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      我們的網頁伺服器絕對不會收集、傳輸、或留存任何您填寫的隱私資料。整個操作過程完全在您的終端設備獨立執行，網路上沒有任何人能窺探您寶寶的成長數據。
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      『巴掌小太陽』純粹為公益與照護輔助而生。沒有會員登入、沒有廣告追蹤，更沒有資料外洩的風險。您可以百分之百放心地將這裡當作專屬您與寶寶的安心育兒避風港。尊重隱私，請安心使用。
                    </p>
                  </div>

                  {/* 開發日期 */}
                  <div className="text-center text-[11px] text-slate-400 font-medium pt-1">
                    開發日期：2026/7/27
                  </div>
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
  