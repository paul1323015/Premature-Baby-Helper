(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };

  // js/app.jsx
  var Icon = (_a) => {
    var _b = _a, { name, className = "w-5 h-5" } = _b, props = __objRest(_b, ["name", "className"]);
    const icons = {
      sun: /* @__PURE__ */ React.createElement("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" }),
      edit: /* @__PURE__ */ React.createElement("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }),
      heart: /* @__PURE__ */ React.createElement("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }),
      calendar: /* @__PURE__ */ React.createElement("path", { d: "M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" }),
      droplet: /* @__PURE__ */ React.createElement("path", { d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 15.1 5 17 5 15a7 7 0 0 0 7 7z" }),
      clock: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M12 6v6l4 2" })),
      moon: /* @__PURE__ */ React.createElement("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }),
      plus: /* @__PURE__ */ React.createElement("path", { d: "M5 12h14m-7-7v14" }),
      check: /* @__PURE__ */ React.createElement("path", { d: "M20 6 9 17l-5-5" }),
      x: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M18 6 6 18" }), /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12" })),
      send: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "m22 2-7 20-4-9-9-4Z" }), /* @__PURE__ */ React.createElement("path", { d: "M22 2 11 13" })),
      trendingUp: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }), /* @__PURE__ */ React.createElement("polyline", { points: "17 6 23 6 23 12" })),
      eye: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" })),
      stethoscope: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M4.8 2.3A.3.3 0 0 0 4.5 2.6V8A6 6 0 0 0 16.5 8V2.6a.3.3 0 0 0-.3-.3h-1.4a.3.3 0 0 0-.3.3V8a4 4 0 0 1-8 0V2.6a.3.3 0 0 0-.3-.3z" }), /* @__PURE__ */ React.createElement("path", { d: "M12 14v4a2 2 0 0 0 2 2h2a3 3 0 0 0 3-3V11" })),
      sparkles: /* @__PURE__ */ React.createElement("path", { d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" }),
      user: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "7", r: "4" })),
      info: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M12 16v-4M12 8h.01" })),
      download: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "7 10 12 15 17 10" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" })),
      upload: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "17 8 12 3 7 8" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "3", x2: "12", y2: "15" })),
      database: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }), /* @__PURE__ */ React.createElement("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })),
      copy: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })),
      trash: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M3 6h18" }), /* @__PURE__ */ React.createElement("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })),
      alertTriangle: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })),
      refresh: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M21.5 2v6h-6" }), /* @__PURE__ */ React.createElement("path", { d: "M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" })),
      book: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }), /* @__PURE__ */ React.createElement("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "7", x2: "15", y2: "7" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "11", x2: "15", y2: "11" })),
      tag: /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d: "M12 2H2v10l11 11 10-10L12 2z" }), /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "7", r: "1.5" }))
    };
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className
      }, props),
      icons[name] || /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" })
    );
  };
  var WHO_GROWTH_DATA = {
    boy: {
      weight: [
        [-2, 1.2, 1.5, 2, 2.5, 3],
        [0, 2.5, 2.9, 3.3, 3.9, 4.4],
        [1, 3.4, 3.9, 4.5, 5.1, 5.8],
        [2, 4.3, 4.9, 5.6, 6.3, 7.1],
        [3, 5, 5.7, 6.4, 7.2, 8],
        [4, 5.6, 6.2, 7, 7.8, 8.7],
        [5, 6, 6.7, 7.5, 8.4, 9.3],
        [6, 6.4, 7.1, 7.9, 8.8, 9.8],
        [8, 6.9, 7.7, 8.6, 9.6, 10.7],
        [10, 7.4, 8.2, 9.2, 10.2, 11.4],
        [12, 7.8, 8.6, 9.6, 10.8, 12],
        [18, 8.8, 9.8, 10.9, 12.2, 13.7],
        [24, 9.7, 10.8, 12.2, 13.6, 15.3]
      ],
      height: [
        [-2, 38, 40, 43, 46, 48],
        [0, 46.3, 48, 49.9, 51.8, 53.4],
        [1, 50.8, 52.8, 54.7, 56.7, 58.6],
        [2, 54.4, 56.4, 58.4, 60.4, 62.4],
        [3, 57.3, 59.3, 61.4, 63.5, 65.5],
        [4, 59.7, 61.8, 63.9, 66, 68],
        [5, 61.7, 63.8, 65.9, 68, 70.1],
        [6, 63.3, 65.5, 67.6, 69.8, 71.9],
        [8, 66.2, 68.4, 70.6, 72.8, 75],
        [10, 68.7, 71, 73.3, 75.6, 77.9],
        [12, 71, 73.4, 75.7, 78.1, 80.5],
        [18, 76.9, 79.6, 82.3, 85, 87.7],
        [24, 81.7, 84.6, 87.8, 90.9, 93.9]
      ],
      head: [
        [-2, 27, 28.5, 30.5, 32.5, 34],
        [0, 31.9, 33.1, 34.5, 35.8, 37],
        [1, 34.9, 36.1, 37.3, 38.6, 39.7],
        [2, 36.9, 38, 39.1, 40.3, 41.3],
        [3, 38.3, 39.4, 40.5, 41.6, 42.6],
        [4, 39.4, 40.5, 41.6, 42.7, 43.7],
        [5, 40.3, 41.4, 42.5, 43.6, 44.6],
        [6, 41, 42.1, 43.3, 44.4, 45.4],
        [8, 42.2, 43.3, 44.5, 45.6, 46.6],
        [10, 43.1, 44.2, 45.4, 46.5, 47.6],
        [12, 43.8, 45, 46.1, 47.3, 48.3],
        [18, 45.3, 46.5, 47.7, 48.9, 50],
        [24, 46.3, 47.5, 48.7, 50, 51.1]
      ]
    },
    girl: {
      weight: [
        [-2, 1.1, 1.4, 1.9, 2.4, 2.9],
        [0, 2.4, 2.8, 3.2, 3.7, 4.2],
        [1, 3.2, 3.6, 4.2, 4.8, 5.5],
        [2, 3.9, 4.5, 5.1, 5.8, 6.6],
        [3, 4.5, 5.2, 5.8, 6.6, 7.5],
        [4, 5, 5.7, 6.4, 7.3, 8.2],
        [5, 5.4, 6.1, 6.9, 7.8, 8.8],
        [6, 5.7, 6.5, 7.3, 8.2, 9.3],
        [8, 6.3, 7, 7.9, 9, 10.2],
        [10, 6.7, 7.5, 8.5, 9.6, 10.9],
        [12, 7, 7.9, 8.9, 10.1, 11.5],
        [18, 8.1, 9.1, 10.2, 11.5, 13],
        [24, 9, 10.2, 11.5, 13, 14.8]
      ],
      height: [
        [-2, 37, 39, 42, 45, 47],
        [0, 45.4, 47.3, 49.1, 51, 52.7],
        [1, 49.8, 51.7, 53.7, 55.6, 57.6],
        [2, 53, 55, 57.1, 59.1, 61.1],
        [3, 55.6, 57.7, 59.8, 61.9, 64],
        [4, 57.8, 59.9, 62.1, 64.2, 66.4],
        [5, 59.6, 61.8, 64, 66.2, 68.5],
        [6, 61.2, 63.5, 65.7, 68, 70.3],
        [8, 64, 66.3, 68.7, 71, 73.4],
        [10, 66.4, 68.8, 71.2, 73.6, 76.1],
        [12, 68.5, 71, 73.5, 76, 78.5],
        [18, 74.9, 77.8, 80.7, 83.6, 86.5],
        [24, 80, 83.2, 86.4, 89.6, 92.9]
      ],
      head: [
        [-2, 26.5, 28, 30, 32, 33.5],
        [0, 31.5, 32.7, 33.9, 35.1, 36.2],
        [1, 34.2, 35.4, 36.5, 37.7, 38.8],
        [2, 36, 37.1, 38.3, 39.4, 40.5],
        [3, 37.3, 38.4, 39.5, 40.6, 41.7],
        [4, 38.3, 39.4, 40.6, 41.7, 42.8],
        [5, 39.2, 40.3, 41.5, 42.6, 43.7],
        [6, 39.9, 41, 42.2, 43.3, 44.4],
        [8, 41, 42.2, 43.4, 44.5, 45.6],
        [10, 41.9, 43.1, 44.3, 45.4, 46.5],
        [12, 42.6, 43.8, 45, 46.2, 47.3],
        [18, 44.2, 45.4, 46.6, 47.8, 48.9],
        [24, 45.2, 46.4, 47.6, 48.9, 50]
      ]
    }
  };
  var formatLocalDateTime = (date = /* @__PURE__ */ new Date()) => {
    const pad = (value) => String(value).padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    return `${year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;
  };
  var formatLocalDateTimeForFileName = (date = /* @__PURE__ */ new Date()) => {
    const pad = (value) => String(value).padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    return `${year}${month}${day}_${hours}-${minutes}-${seconds}`;
  };
  var getLocalDateString = (date = /* @__PURE__ */ new Date()) => {
    const pad = (value) => String(value).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  };
  var parseDateOnly = (value) => {
    if (!value || typeof value !== "string") return null;
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
  var formatAgeText = (value, prefix = "\u77EF\u6B63", isDays = false) => {
    const totalDays = isDays ? value : Math.round(Math.abs(value) * 30.4375);
    const absDays = Math.abs(totalDays);
    if (absDays > 24 * 30.4375) return "\u5DF2\u6EFF 2 \u6B72";
    if (totalDays < 0) {
      return `\u9810\u7522\u671F\u524D ${Math.max(0, Math.floor(absDays))} \u5929`;
    }
    const wholeMonths = Math.floor(absDays / 30.4375);
    const remainingDays = Math.floor(absDays % 30.4375);
    return `${prefix} ${wholeMonths} \u500B\u6708 ${remainingDays} \u5929`;
  };
  var sanitizeDateStr = (str) => {
    if (!str || typeof str !== "string") return getLocalDateString();
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
      const now = /* @__PURE__ */ new Date();
      dateObj.setFullYear(now.getFullYear());
    }
    return getLocalDateString(dateObj);
  };
  var getAgesForDate = (measurementDateStr, birthDateStr, dueDateStr) => {
    const MS_PER_DAY = 1e3 * 60 * 60 * 24;
    const measurementClean = measurementDateStr ? sanitizeDateStr(measurementDateStr) : getLocalDateString();
    const measurementDate = parseDateOnly(measurementClean);
    const birthClean = birthDateStr ? sanitizeDateStr(birthDateStr) : null;
    const dueClean = dueDateStr ? sanitizeDateStr(dueDateStr) : null;
    const birthDate = birthClean ? parseDateOnly(birthClean) : null;
    const dueDate = dueClean ? parseDateOnly(dueClean) : null;
    let chronoDays = 0;
    if (birthDate && measurementDate) {
      chronoDays = Math.floor((measurementDate - birthDate) / MS_PER_DAY);
      if (chronoDays < 0) chronoDays = 0;
    }
    let correctedDays = 0;
    if (dueDate && measurementDate) {
      correctedDays = Math.floor((measurementDate - dueDate) / MS_PER_DAY);
    } else {
      correctedDays = chronoDays;
    }
    const chronoMonths = chronoDays / 30.4375;
    const correctedMonths = correctedDays / 30.4375;
    const chronoMInt = Math.floor(chronoMonths);
    const chronoDaysRemaining = Math.floor(chronoDays % 30.4375);
    let correctedText = "";
    if (dueDate && correctedDays < 0) {
      const remainingWeeks = Math.ceil(Math.abs(correctedDays) / 7);
      correctedText = `\u5C1A\u672A\u6EFF\u9810\u7522\u671F (\u5DEE\u7D04 ${remainingWeeks} \u9031)`;
    } else if (correctedMonths > 24) {
      correctedText = "\u5DF2\u6EFF 2 \u6B72\uFF08\u5EFA\u8B70\u53C3\u8003\u5E38\u898F\u5152\u7AE5\u751F\u9577\u66F2\u7DDA\uFF09";
    } else {
      const correctedMInt = Math.floor(correctedDays / 30.4375);
      const correctedDaysRemaining = Math.floor(correctedDays % 30.4375);
      correctedText = `\u77EF\u6B63 ${correctedMInt} \u500B\u6708 ${correctedDaysRemaining} \u5929`;
    }
    return {
      measurementStr: measurementClean,
      measurementDate,
      chronoDays,
      chronoMonths,
      correctedDays,
      correctedMonths,
      chronoText: `\u5BE6\u969B ${chronoMInt} \u500B\u6708 ${chronoDaysRemaining} \u5929`,
      correctedText,
      isSet: !!birthDate && !!dueDate,
      inconsistent: typeof chronoDays === "number" && typeof correctedDays === "number" && chronoDays < correctedDays
    };
  };
  var calculateAges = (birthDateStr, dueDateStr) => {
    if (!birthDateStr || !dueDateStr) {
      return {
        chronoText: "\u51FA\u751F\u65E5\u671F\u672A\u8A2D\u5B9A",
        correctedText: "\u8ACB\u9EDE\u64CA\u300C\u81EA\u8A02/\u4FEE\u6539\u300D\u8A2D\u5B9A\u751F\u65E5\u8207\u9810\u7522\u671F",
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
  var getCorrectedAgeAtDate = (measurementDateStr, birthDateStr, dueDateStr) => {
    const ages = getAgesForDate(measurementDateStr, birthDateStr, dueDateStr);
    return ages.correctedMonths;
  };
  var PretermGrowthChart = ({ metric, gender, babyInfo, growthHistory, onAddGrowthRecord, onDeleteGrowthRecord }) => {
    const [showRecordModal, setShowRecordModal] = React.useState(false);
    const [useChronoAxis, setUseChronoAxis] = React.useState(false);
    const [showPercentiles, setShowPercentiles] = React.useState(true);
    const [recDate, setRecDate] = React.useState(getLocalDateString());
    const [recWeight, setRecWeight] = React.useState(babyInfo.currentWeight || "");
    const [recHeight, setRecHeight] = React.useState(babyInfo.currentHeight || "");
    const [recHead, setRecHead] = React.useState(babyInfo.currentHead || "");
    const metricConfig = {
      weight: { label: "\u9AD4\u91CD", unit: "kg", minY: 0, maxY: 15, yTicks: [0, 2, 4, 6, 8, 10, 12, 14] },
      height: { label: "\u8EAB\u9577", unit: "cm", minY: 35, maxY: 95, yTicks: [35, 45, 55, 65, 75, 85, 95] },
      head: { label: "\u982D\u570D", unit: "cm", minY: 25, maxY: 52, yTicks: [25, 30, 35, 40, 45, 50] }
    }[metric];
    const refData = (WHO_GROWTH_DATA[gender] || WHO_GROWTH_DATA.boy)[metric];
    const width = 600;
    const height = 340;
    const padding = { top: 25, right: 35, bottom: 55, left: 45 };
    const MS_PER_DAY = 1e3 * 60 * 60 * 24;
    const babyPoints = growthHistory.map((item) => {
      let val = parseFloat(item[metric]);
      if (isNaN(val)) return null;
      if (metric === "weight" && val > 30) {
        val = val / 1e3;
      }
      const measurementStr = sanitizeDateStr(item.date);
      const measurementDate = parseDateOnly(measurementStr);
      const birthStr = babyInfo.birthDate ? sanitizeDateStr(babyInfo.birthDate) : null;
      const dueStr = babyInfo.dueDate ? sanitizeDateStr(babyInfo.dueDate) : null;
      const birthDate = birthStr ? parseDateOnly(birthStr) : null;
      const dueDate = dueStr ? parseDateOnly(dueStr) : null;
      if (!measurementDate) return null;
      const ages = getAgesForDate(measurementStr, babyInfo.birthDate, babyInfo.dueDate);
      const chronoAgeDays = ages.chronoDays;
      const correctedAgeDays = ages.correctedDays;
      const chronoAgeM = ages.chronoMonths;
      const correctedAgeM = ages.correctedMonths;
      if (ages.inconsistent) {
        console.warn("Age inconsistency detected for measurement", measurementStr, "\u2014 chronoDays < correctedDays. Please verify birthDate/dueDate inputs.");
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
    }).filter((p) => p !== null && !isNaN(p.value));
    const babyMonths = babyPoints.map((p) => p.plotMonths);
    const minBabyMonth = babyMonths.length > 0 ? Math.min(...babyMonths) : 0;
    const maxBabyMonth = babyMonths.length > 0 ? Math.max(...babyMonths) : 12;
    const minX = Math.min(-2, Math.floor(minBabyMonth - 0.5));
    const maxX = Math.max(12, Math.ceil(Math.min(24, maxBabyMonth + 1)));
    const xScale = (month) => padding.left + (month - minX) / (maxX - minX) * (width - padding.left - padding.right);
    const yScale = (val) => height - padding.bottom - (val - metricConfig.minY) / (metricConfig.maxY - metricConfig.minY) * (height - padding.top - padding.bottom);
    const zeroInRange = 0 >= minX && 0 <= maxX;
    const zeroX = xScale(0);
    babyPoints.forEach((p) => {
      p.x = xScale(p.plotMonths);
      p.y = yScale(p.value);
    });
    let debugEnabled = false;
    try {
      if (typeof window !== "undefined") {
        const qp = new URLSearchParams(window.location.search);
        debugEnabled = qp.get("debug") === "true" || localStorage.getItem("debug") === "true";
      }
    } catch (e) {
      debugEnabled = false;
    }
    const debugRows = babyPoints.map((p) => ({
      Date: p.date,
      "Chrono Days": p.chronoDays,
      "Chrono Months": Number(p.chronoMonths.toFixed(3)),
      "Corrected Days": p.correctedDays,
      "Corrected Months": Number(p.correctedMonths.toFixed(3)),
      "Plot Months": Number(p.plotMonths.toFixed(3)),
      "Pixel X": Number(p.x.toFixed(1))
    }));
    babyPoints.sort((a, b) => a.plotMonths - b.plotMonths);
    const percentileIndices = [1, 2, 3, 4, 5];
    const percentileLabels = ["3%", "15%", "50%", "85%", "97%"];
    const percentileColors = ["#cbd5e1", "#94a3b8", "#3b82f6", "#94a3b8", "#cbd5e1"];
    const monthTicks = [];
    const step = maxX - minX > 16 ? 2 : 1;
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
    return /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed flex items-start gap-2 shadow-sm" }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", className: "w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold block text-amber-800" }, "\u26A1\uFE0F \u751F\u9577\u66F2\u7DDA\u8EF8\u7DDA\u8A2D\u5B9A\uFF1A"), "\u9810\u8A2D\u4EE5\u3010\u9810\u7522\u671F\u3011\u70BA 0 \u500B\u6708\u5C0D\u9F4A\u77EF\u6B63\u6708\u9F61\uFF1B\u5982\u9700\u67E5\u770B\u5BE6\u969B\u51FA\u751F\u6708\u9F61\uFF0C\u53EF\u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u5207\u63DB\u89C0\u770B\u3002"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setUseChronoAxis(!useChronoAxis),
        className: "px-2.5 py-1 bg-amber-200 hover:bg-amber-300 text-amber-900 rounded-lg text-xs font-bold transition-colors border border-amber-300 shadow-sm",
        title: useChronoAxis ? "\u76EE\u524D\u986F\u793A\uFF1A\u5BE6\u969B\u6708\u9F61\u3002\u9EDE\u64CA\u5207\u63DB\u70BA \u77EF\u6B63\u6708\u9F61\u3002" : "\u76EE\u524D\u986F\u793A\uFF1A\u77EF\u6B63\u6708\u9F61\u3002\u9EDE\u64CA\u5207\u63DB\u70BA \u5BE6\u969B\u6708\u9F61\u3002"
      },
      useChronoAxis ? "\u986F\u793A\uFF1A\u5BE6\u969B\u6708\u9F61\uFF08\u9EDE\u64CA\u5207\u63DB\u70BA \u77EF\u6B63\u6708\u9F61\uFF09" : "\u986F\u793A\uFF1A\u77EF\u6B63\u6708\u9F61\uFF08\u9EDE\u64CA\u5207\u63DB\u70BA \u5BE6\u969B\u6708\u9F61\uFF09"
    )), /* @__PURE__ */ React.createElement("div", { className: "relative bg-white rounded-2xl border p-3 shadow-inner overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-2 px-1" }, /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-slate-700 flex items-center gap-1.5 flex-wrap" }, /* @__PURE__ */ React.createElement("span", null, gender === "boy" ? "\u{1F466} \u7537\u5BF6" : "\u{1F467} \u5973\u5BF6", " WHO ", metricConfig.label, "\u751F\u9577\u66F2\u7DDA\u5716"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full font-bold" }, "X\u8EF8 = ", useChronoAxis ? "\u5BE6\u969B\u6708\u9F61" : "\u77EF\u6B63\u6708\u9F61")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowPercentiles(!showPercentiles),
        className: `px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors border shadow-sm ${showPercentiles ? "bg-amber-100 border-amber-300 text-amber-900 hover:bg-amber-200" : "bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200"}`,
        title: "\u5207\u63DB\u986F\u793A/\u96B1\u85CF\u80CC\u666F WHO \u767E\u5206\u4F4D\u53C3\u8003\u865B\u7DDA"
      },
      /* @__PURE__ */ React.createElement("span", { className: `w-2 h-2 rounded-full ${showPercentiles ? "bg-amber-500" : "bg-slate-400"}` }),
      /* @__PURE__ */ React.createElement("span", null, "\u767E\u5206\u4F4D\u66F2\u7DDA\uFF1A", showPercentiles ? "\u986F\u793A" : "\u96B1\u85CF")
    ), debugEnabled && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          try {
            console.groupCollapsed(`PretermGrowthChart Debug - X axis = ${useChronoAxis ? "Chronological (\u5BE6\u969B)" : "Corrected (\u77EF\u6B63)"} mode`);
            console.table(debugRows);
            console.groupEnd();
          } catch (e) {
          }
        },
        className: "px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors",
        title: "\u5728 Console \u4E2D\u8F38\u51FA Debug \u8868\u683C\uFF08\u53EA\u65BC\u6309\u4E0B\u6642\u57F7\u884C\uFF09"
      },
      /* @__PURE__ */ React.createElement("span", null, "\u8F38\u51FA Debug")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowRecordModal(true),
        className: "px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "plus", className: "w-3.5 h-3.5" }),
      /* @__PURE__ */ React.createElement("span", null, "\u65B0\u589E\u6E2C\u91CF\u9EDE")
    ))), /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${width} ${height}`, className: "w-full h-auto text-xs select-none" }, metricConfig.yTicks.map((yVal) => /* @__PURE__ */ React.createElement("g", { key: `y-${yVal}` }, /* @__PURE__ */ React.createElement("line", { x1: padding.left, y1: yScale(yVal), x2: width - padding.right, y2: yScale(yVal), stroke: "#f1f5f9", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("text", { x: padding.left - 6, y: yScale(yVal) + 4, textAnchor: "end", className: "fill-slate-400 font-mono text-[10px]" }, yVal, " ", metricConfig.unit))), monthTicks.map((mVal) => {
      const xPos = xScale(mVal);
      const isZero = mVal === 0;
      return /* @__PURE__ */ React.createElement("g", { key: `x-${mVal}` }, /* @__PURE__ */ React.createElement("line", { x1: xPos, y1: padding.top, x2: xPos, y2: height - padding.bottom, stroke: isZero ? "#f59e0b" : "#f1f5f9", strokeWidth: isZero ? "2" : "1", strokeDasharray: isZero ? "3,3" : "none" }), /* @__PURE__ */ React.createElement("line", { x1: xPos, y1: height - padding.bottom, x2: xPos, y2: height - padding.bottom + 5, stroke: isZero ? "#d97706" : "#cbd5e1", strokeWidth: isZero ? "2" : "1" }), /* @__PURE__ */ React.createElement("text", { x: xPos, y: height - padding.bottom + 17, textAnchor: "middle", className: `font-mono text-[9px] ${isZero ? "fill-amber-600 font-extrabold text-[10px]" : "fill-slate-500 font-medium"}` }, isZero ? "0\u500B\u6708" : `${mVal}\u500B`), isZero && !useChronoAxis && /* @__PURE__ */ React.createElement("text", { x: xPos, y: height - padding.bottom + 28, textAnchor: "middle", className: "fill-amber-600 font-bold text-[8px]" }, "(\u9810\u7522\u671F)"));
    }), zeroInRange && /* @__PURE__ */ React.createElement("g", { key: "zero-ref" }, /* @__PURE__ */ React.createElement("line", { x1: zeroX, y1: padding.top, x2: zeroX, y2: height - padding.bottom, stroke: "#d97706", strokeWidth: "3", strokeDasharray: "6,3", opacity: "0.95" }), /* @__PURE__ */ React.createElement("circle", { cx: zeroX, cy: height - padding.bottom, r: "5", className: "fill-amber-600 stroke-white stroke-1" }), /* @__PURE__ */ React.createElement("text", { x: zeroX, y: padding.top - 6, textAnchor: "middle", className: "fill-amber-700 font-bold text-[10px]" }, "\u57FA\u6E96 0 \u500B\u6708"), /* @__PURE__ */ React.createElement("text", { x: zeroX, y: height - padding.bottom + 33, textAnchor: "middle", className: "fill-amber-700 font-bold text-[9px]" }, useChronoAxis ? "\uFF08\u51FA\u751F\u65E5\uFF09" : "\uFF08\u9810\u7522\u671F\uFF09")), /* @__PURE__ */ React.createElement("line", { x1: padding.left, y1: height - padding.bottom, x2: width - padding.right, y2: height - padding.bottom, stroke: "#94a3b8", strokeWidth: "1.5" }), showPercentiles && percentileIndices.map((pIndex, i) => {
      const pathD = refData.map((d, idx) => `${idx === 0 ? "M" : "L"} ${xScale(d[0])} ${yScale(d[pIndex])}`).join(" ");
      const lastPt = refData[refData.length - 1];
      return /* @__PURE__ */ React.createElement("g", { key: `p-${i}` }, /* @__PURE__ */ React.createElement("path", { d: pathD, fill: "none", stroke: percentileColors[i], strokeWidth: pIndex === 3 ? "2" : "1", strokeDasharray: pIndex === 3 ? "none" : "2,2" }), lastPt[0] <= maxX && /* @__PURE__ */ React.createElement("text", { x: xScale(lastPt[0]) + 4, y: yScale(lastPt[pIndex]) + 3, className: "fill-slate-400 text-[8px] font-bold" }, percentileLabels[i]));
    }), babyPoints.map((p, i) => {
      const chartAgeDays = useChronoAxis ? p.chronoDays : p.correctedDays;
      const labelText = formatAgeText(chartAgeDays, useChronoAxis ? "\u5BE6\u969B" : "\u77EF\u6B63", true);
      const compactLabel = labelText.replace(/^矯正\s*/, "").replace(/^實際\s*/, "").replace(/個月/g, "\u6708").replace(/天/g, "\u5929");
      const labelY = height - padding.bottom - 10;
      const labelRectX = p.x - 28;
      const labelRectWidth = 56;
      return /* @__PURE__ */ React.createElement("g", { key: `vline-${p.id || i}` }, /* @__PURE__ */ React.createElement("line", { x1: p.x, y1: p.y, x2: p.x, y2: height - padding.bottom, stroke: "#f59e0b", strokeWidth: "2", strokeDasharray: "3,3" }), /* @__PURE__ */ React.createElement("circle", { cx: p.x, cy: height - padding.bottom, r: "4", className: "fill-amber-500 stroke-white stroke-2" }), /* @__PURE__ */ React.createElement("rect", { x: labelRectX, y: labelY - 9, width: labelRectWidth, height: "13", rx: "4", className: "fill-amber-500 shadow-sm" }), /* @__PURE__ */ React.createElement("text", { x: p.x, y: labelY - 1, textAnchor: "middle", className: "fill-white font-extrabold text-[7.5px] font-mono" }, compactLabel));
    }), babyPoints.length > 1 && /* @__PURE__ */ React.createElement("path", { d: babyPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" "), fill: "none", stroke: "#f59e0b", strokeWidth: "3", strokeLinecap: "round" }), babyPoints.map((p, i) => /* @__PURE__ */ React.createElement("g", { key: `pt-${p.id || i}`, className: "group cursor-pointer" }, /* @__PURE__ */ React.createElement("circle", { cx: p.x, cy: p.y, r: "7", className: "fill-amber-500 stroke-white stroke-2 shadow-lg hover:r-9 transition-all" }), /* @__PURE__ */ React.createElement("rect", { x: p.x - 26, y: p.y - 22, width: "52", height: "15", rx: "4", className: "fill-slate-900/80 shadow" }), /* @__PURE__ */ React.createElement("text", { x: p.x, y: p.y - 11, textAnchor: "middle", className: "fill-amber-300 font-extrabold text-[10px]" }, p.value, " ", metricConfig.unit))), /* @__PURE__ */ React.createElement("text", { x: width / 2, y: height - 8, textAnchor: "middle", className: "fill-amber-700 text-[11px] font-bold" }, useChronoAxis ? "\u5BE6\u969B\u51FA\u751F\u6708\u9F61\u523B\u5EA6" : "\u77EF\u6B63\u6708\u9F61\u523B\u5EA6\uFF08\u4EE5\u9810\u7522\u671F\u70BA 0 \u500B\u6708\u5C0D\u9F4A X \u8EF8\uFF09")), babyPoints.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "p-3 text-center text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl my-2" }, "\u26A0\uFE0F \u76EE\u524D\u6B77\u53F2\u5217\u8868\u4E2D\u7121\u3010", metricConfig.label, "\u3011\u6578\u64DA\u9EDE\uFF0C\u9EDE\u64CA\u4E0A\u65B9\u300C\u65B0\u589E\u6E2C\u91CF\u9EDE\u300D\u767B\u8A18", metricConfig.label, "\u3002")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl border p-3 shadow-sm space-y-2" }, /* @__PURE__ */ React.createElement("h4", { className: "font-bold text-xs text-slate-700 flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", null, "\u6B77\u53F2\u6E2C\u91CF\u5217\u8868"), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] text-slate-400 font-normal" }, "\u5171 ", growthHistory.length, " \u7B46\u7D00\u9304")), growthHistory.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "p-3 text-center text-xs text-slate-400 border rounded-xl bg-slate-50" }, "\u5C1A\u7121\u7D00\u9304\uFF0C\u9EDE\u64CA\u4E0A\u65B9\u300C\u65B0\u589E\u6E2C\u91CF\u9EDE\u300D\u767B\u8A18\u8EAB\u9AD8\u3001\u9AD4\u91CD\u8207\u982D\u570D\u3002") : /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5 max-h-52 overflow-y-auto pr-1 text-xs" }, growthHistory.map((rec) => {
      const cleanDate = sanitizeDateStr(rec.date);
      const ages = getAgesForDate(cleanDate, babyInfo.birthDate, babyInfo.dueDate);
      return /* @__PURE__ */ React.createElement("div", { key: rec.id, className: "p-2 border rounded-xl flex items-center justify-between bg-slate-50/70 hover:bg-amber-50/50 transition-colors" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-slate-800 flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", null, cleanDate), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold" }, ages.correctedText, " / ", ages.chronoText), ages.inconsistent && /* @__PURE__ */ React.createElement("span", { className: "ml-2 inline-flex items-center gap-1 text-red-600 font-bold text-[11px]" }, /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-3 h-3", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ React.createElement("path", { d: "M12 9v4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 17h.01" }), /* @__PURE__ */ React.createElement("path", { d: "M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" })), "\u8CC7\u6599\u7570\u5E38")), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-500 mt-0.5 space-x-2" }, rec.weight && /* @__PURE__ */ React.createElement("span", null, "\u9AD4\u91CD: ", /* @__PURE__ */ React.createElement("b", { className: "text-slate-700" }, rec.weight, " kg")), rec.height && /* @__PURE__ */ React.createElement("span", null, "\u8EAB\u9577: ", /* @__PURE__ */ React.createElement("b", { className: "text-slate-700" }, rec.height, " cm")), rec.head && /* @__PURE__ */ React.createElement("span", null, "\u982D\u570D: ", /* @__PURE__ */ React.createElement("b", { className: "text-slate-700" }, rec.head, " cm")))), /* @__PURE__ */ React.createElement("button", { onClick: () => onDeleteGrowthRecord(rec.id), className: "p-1 text-slate-400 hover:text-red-500 transition-colors", title: "\u522A\u9664\u7D00\u9304" }, /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-4 h-4" })));
    }))), showRecordModal && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b pb-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm text-amber-700" }, "\u65B0\u589E\u751F\u9577\u6578\u64DA\u7D00\u9304"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowRecordModal(false), className: "text-slate-400 hover:text-slate-600" }, /* @__PURE__ */ React.createElement(Icon, { name: "x", className: "w-4 h-4" }))), /* @__PURE__ */ React.createElement("form", { onSubmit: handleFormSubmit, className: "space-y-3 text-xs" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u6E2C\u91CF\u65E5\u671F"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        required: true,
        min: "2020-01-01",
        max: "2030-12-31",
        value: recDate,
        onChange: (e) => setRecDate(e.target.value),
        className: "w-full p-2 border rounded-xl"
      }
    ), babyInfo.dueDate && /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-amber-600 mt-1 font-medium" }, "\u5C0D\u61C9\u77EF\u6B63\u6708\u9F61\uFF1A", getCorrectedAgeAtDate(recDate, babyInfo.birthDate, babyInfo.dueDate) > 24 ? "\u5DF2\u6EFF 2 \u6B72" : getCorrectedAgeAtDate(recDate, babyInfo.birthDate, babyInfo.dueDate) < 0 ? `\u9810\u7522\u671F\u524D` : `${getCorrectedAgeAtDate(recDate, babyInfo.birthDate, babyInfo.dueDate).toFixed(1)} \u500B\u6708`)), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u9AD4\u91CD(kg)"), /* @__PURE__ */ React.createElement("input", { type: "number", step: "0.01", placeholder: "3.2", value: recWeight, onChange: (e) => setRecWeight(e.target.value), className: "w-full p-2 border rounded-xl" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u8EAB\u9577(cm)"), /* @__PURE__ */ React.createElement("input", { type: "number", step: "0.1", placeholder: "48", value: recHeight, onChange: (e) => setRecHeight(e.target.value), className: "w-full p-2 border rounded-xl" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u982D\u570D(cm)"), /* @__PURE__ */ React.createElement("input", { type: "number", step: "0.1", placeholder: "34", value: recHead, onChange: (e) => setRecHead(e.target.value), className: "w-full p-2 border rounded-xl" }))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-2" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setShowRecordModal(false), className: "flex-1 py-2 text-xs border rounded-xl text-slate-500 font-bold" }, "\u53D6\u6D88"), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "flex-1 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md" }, "\u5132\u5B58\u6578\u64DA"))))));
  };
  function App() {
    const [isNightMode, setIsNightMode] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState("dashboard");
    const [showHelpModal, setShowHelpModal] = React.useState(false);
    const [showBackupModal, setShowBackupModal] = React.useState(false);
    const [showDataMgmtModal, setShowDataMgmtModal] = React.useState(false);
    const [showNotesModal, setShowNotesModal] = React.useState(false);
    const [isExporting, setIsExporting] = React.useState(false);
    const [toastMsg, setToastMsg] = React.useState("");
    const showToast = (msg) => {
      setToastMsg(msg);
      setTimeout(() => setToastMsg(""), 3e3);
    };
    const [selectedMetric, setSelectedMetric] = React.useState("weight");
    const [selectedGender, setSelectedGender] = React.useState("boy");
    const [babyInfo, setBabyInfo] = React.useState(() => {
      const saved = localStorage.getItem("sun_baby_profile_v5");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.birthDate) parsed.birthDate = sanitizeDateStr(parsed.birthDate);
          if (parsed.dueDate) parsed.dueDate = sanitizeDateStr(parsed.dueDate);
          try {
            const pb = parsed.birthDate ? parseDateOnly(parsed.birthDate) : null;
            const pd = parsed.dueDate ? parseDateOnly(parsed.dueDate) : null;
            if (pb && pd && pb.getTime() > pd.getTime()) {
              const corrected = __spreadProps(__spreadValues({}, parsed), { birthDate: parsed.dueDate, dueDate: parsed.birthDate });
              try {
                localStorage.setItem("sun_baby_profile_v5", JSON.stringify(corrected));
                if (typeof window !== "undefined") window.__sun_profile_fix_notice = "\u{1F527} \u5DF2\u81EA\u52D5\u4FEE\u6B63\u5BF6\u5BF6\u51FA\u751F\u65E5\u671F\u8207\u9810\u7522\u671F\u7684\u9806\u5E8F\uFF08\u5075\u6E2C\u5230\u985B\u5012\uFF09";
              } catch (e) {
              }
              return corrected;
            }
          } catch (e) {
          }
          return parsed;
        } catch (e) {
        }
      }
      return {
        name: "",
        gender: "boy",
        gestationalWeeks: "",
        birthWeight: "",
        birthDate: "",
        dueDate: "",
        currentWeight: "",
        currentHeight: "",
        currentHead: "",
        targetDailyMilk: ""
      };
    });
    const [growthHistory, setGrowthHistory] = React.useState(() => {
      const saved = localStorage.getItem("sun_baby_growth_history_v1");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            return parsed.map((item) => __spreadProps(__spreadValues({}, item), {
              date: sanitizeDateStr(item.date)
            }));
          }
        } catch (e) {
        }
      }
      return [];
    });
    const [logs, setLogs] = React.useState(() => {
      const saved = localStorage.getItem("sun_baby_logs_v1");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
        }
      }
      return [];
    });
    const [doctorNotes, setDoctorNotes] = React.useState(() => {
      const saved = localStorage.getItem("sun_baby_doctor_notes_v1");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
        }
      }
      return [];
    });
    const [notes, setNotes] = React.useState(() => {
      const saved = localStorage.getItem("sun_baby_notes_v1");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
        }
      }
      return [];
    });
    const [noteCategory, setNoteCategory] = React.useState("\u56DE\u8A3A\u63D0\u554F");
    const [noteTitle, setNoteTitle] = React.useState("");
    const [noteContent, setNoteContent] = React.useState("");
    const [filterNoteCategory, setFilterNoteCategory] = React.useState("\u5168\u90E8");
    const [editingNoteId, setEditingNoteId] = React.useState(null);
    const [milestones, setMilestones] = React.useState([
      { id: 1, text: "\u4FEF\u81E5\uFF08\u8DB4\u8457\uFF09\u6642\u80FD\u77ED\u66AB\u62AC\u8D77\u982D\u90E8 45 \u5EA6 (\u77EF\u6B63 1-2 \u500B\u6708)", done: false },
      { id: 2, text: "\u773C\u795E\u80FD\u8DDF\u96A8\u8996\u7DDA\u79FB\u52D5\u6216\u95DC\u6CE8\u9ED1\u767D\u5361 10 \u79D2 (\u77EF\u6B63 1-2 \u500B\u6708)", done: false },
      { id: 3, text: "\u807D\u5230\u5927\u4EBA\u6EAB\u67D4\u8AAA\u8A71\u6703\u505C\u6B62\u54ED\u6CE3\u6216\u767C\u51FA\u5495\u5695\u8072 (\u77EF\u6B63 2 \u500B\u6708)", done: false },
      { id: 4, text: "\u624B\u638C\u80FD\u7531\u7DCA\u63E1\u9010\u6F38\u653E\u9B06\uFF0C\u96D9\u624B\u5076\u723E\u78B0\u89F8 (\u77EF\u6B63 2-3 \u500B\u6708)", done: false }
    ]);
    const [showEditProfileModal, setShowEditProfileModal] = React.useState(false);
    const [editFormData, setEditFormData] = React.useState(__spreadValues({}, babyInfo));
    const [pastedJson, setPastedJson] = React.useState("");
    React.useEffect(() => {
      if (babyInfo.gender) setSelectedGender(babyInfo.gender);
    }, [babyInfo.gender]);
    React.useEffect(() => {
      try {
        if (typeof window !== "undefined" && window.__sun_profile_fix_notice) {
          showToast(window.__sun_profile_fix_notice);
          try {
            delete window.__sun_profile_fix_notice;
          } catch (e) {
            window.__sun_profile_fix_notice = null;
          }
        }
      } catch (e) {
      }
    }, []);
    React.useEffect(() => {
      localStorage.setItem("sun_baby_profile_v5", JSON.stringify(babyInfo));
    }, [babyInfo]);
    React.useEffect(() => {
      localStorage.setItem("sun_baby_growth_history_v1", JSON.stringify(growthHistory));
    }, [growthHistory]);
    React.useEffect(() => {
      localStorage.setItem("sun_baby_logs_v1", JSON.stringify(logs));
    }, [logs]);
    React.useEffect(() => {
      localStorage.setItem("sun_baby_doctor_notes_v1", JSON.stringify(doctorNotes));
    }, [doctorNotes]);
    React.useEffect(() => {
      localStorage.setItem("sun_baby_notes_v1", JSON.stringify(notes));
    }, [notes]);
    React.useEffect(() => {
      let hasFixed = false;
      const cleaned = growthHistory.map((item) => {
        const sanitized = sanitizeDateStr(item.date);
        if (sanitized !== item.date) {
          hasFixed = true;
        }
        return __spreadProps(__spreadValues({}, item), { date: sanitized });
      });
      if (hasFixed) {
        setGrowthHistory(cleaned);
        showToast("\u{1F527} \u5DF2\u81EA\u52D5\u4FEE\u6B63\u6B77\u53F2\u6578\u64DA\u4E2D\u7684\u65E5\u671F\u683C\u5F0F\uFF01");
      }
    }, []);
    const handleExportBackupJSON = () => {
      const backupData = {
        version: "1.2",
        exportTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
        babyInfo,
        growthHistory,
        logs,
        doctorNotes,
        milestones,
        notes
      };
      const jsonString = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `\u5DF4\u638C\u5C0F\u592A\u967D_\u7167\u8B77\u8207\u6B77\u53F2\u6E2C\u91CF\u5099\u4EFD_${babyInfo.name || "\u5BF6\u5BF6"}_${formatLocalDateTimeForFileName()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("\u2705 \u5099\u4EFD\u6A94\u6848\u5DF2\u6210\u529F\u4E0B\u8F09\uFF01");
    };
    const handleCopyBackupToClipboard = () => {
      const backupData = {
        version: "1.2",
        exportTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
        babyInfo,
        growthHistory,
        logs,
        doctorNotes,
        milestones,
        notes
      };
      const jsonString = JSON.stringify(backupData, null, 2);
      const textarea = document.createElement("textarea");
      textarea.value = jsonString;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showToast("\u{1F4CB} \u5099\u4EFD\u6587\u5B57\u5DF2\u8907\u88FD\u81F3\u526A\u8CBC\u7C3F\uFF01");
    };
    const handleImportBackupObj = (backupData) => {
      if (!backupData || typeof backupData !== "object") {
        showToast("\u274C \u5099\u4EFD\u8CC7\u6599\u683C\u5F0F\u4E0D\u6B63\u78BA\uFF0C\u8ACB\u91CD\u65B0\u9078\u64C7\u5099\u4EFD\u6A94\u6848\u3002");
        return;
      }
      if (backupData.babyInfo) {
        const cleanedProfile = __spreadValues({}, backupData.babyInfo);
        if (cleanedProfile.birthDate) cleanedProfile.birthDate = sanitizeDateStr(cleanedProfile.birthDate);
        if (cleanedProfile.dueDate) cleanedProfile.dueDate = sanitizeDateStr(cleanedProfile.dueDate);
        setBabyInfo(cleanedProfile);
      }
      if (Array.isArray(backupData.growthHistory)) {
        const cleanedHistory = backupData.growthHistory.map((item) => __spreadProps(__spreadValues({}, item), {
          date: sanitizeDateStr(item.date)
        }));
        setGrowthHistory(cleanedHistory);
      }
      if (Array.isArray(backupData.logs)) setLogs(backupData.logs);
      if (Array.isArray(backupData.doctorNotes)) setDoctorNotes(backupData.doctorNotes);
      if (Array.isArray(backupData.milestones)) setMilestones(backupData.milestones);
      if (Array.isArray(backupData.notes)) setNotes(backupData.notes);
      setShowBackupModal(false);
      setPastedJson("");
      showToast("\u{1F389} \u5099\u4EFD\u6A94\u6848\u5DF2\u9084\u539F\u6210\u529F\uFF01");
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
          showToast("\u274C \u5099\u4EFD\u6A94\u6848\u5167\u5BB9\u4E0D\u5B8C\u6574\uFF0C\u8ACB\u78BA\u8A8D\u5F8C\u518D\u8A66\u4E00\u6B21\u3002");
        }
      };
      reader.readAsText(file);
    };
    const handlePasteImport = () => {
      if (!pastedJson.trim()) {
        showToast("\u26A0\uFE0F \u8ACB\u5148\u8CBC\u4E0A\u5099\u4EFD\u6587\u5B57\u5167\u5BB9");
        return;
      }
      try {
        const parsed = JSON.parse(pastedJson);
        handleImportBackupObj(parsed);
      } catch (err) {
        showToast("\u274C \u5099\u4EFD\u8CC7\u6599\u683C\u5F0F\u4E0D\u6B63\u78BA\uFF0C\u9084\u539F\u5931\u6557");
      }
    };
    const handleSaveNote = (e) => {
      e.preventDefault();
      if (!noteTitle.trim()) {
        showToast("\u26A0\uFE0F \u8ACB\u8F38\u5165\u7B46\u8A18\u6A19\u984C\uFF01");
        return;
      }
      if (editingNoteId !== null) {
        setNotes(notes.map((n) => {
          if (n.id === editingNoteId) {
            return __spreadProps(__spreadValues({}, n), {
              category: noteCategory,
              title: noteTitle.slice(0, 30).trim(),
              content: noteContent.slice(0, 1e3).trim()
            });
          }
          return n;
        }));
        setEditingNoteId(null);
        setNoteTitle("");
        setNoteContent("");
        showToast("\u270F\uFE0F \u5DF2\u6210\u529F\u66F4\u65B0\u7B46\u8A18\uFF01");
      } else {
        if (notes.length >= 1e3) {
          showToast("\u26A0\uFE0F \u7B46\u8A18\u7E3D\u6578\u5DF2\u9054 1000 \u689D\u4E0A\u9650\uFF0C\u8ACB\u5148\u522A\u9664\u820A\u7B46\u8A18\uFF01");
          return;
        }
        const now = /* @__PURE__ */ new Date();
        const dateStr = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        const newNote = {
          id: Date.now(),
          category: noteCategory,
          title: noteTitle.slice(0, 30).trim(),
          content: noteContent.slice(0, 1e3).trim(),
          createdAt: dateStr
        };
        setNotes([newNote, ...notes]);
        setNoteTitle("");
        setNoteContent("");
        showToast("\u{1F4DD} \u5DF2\u65B0\u589E\u7B46\u8A18\uFF01");
      }
    };
    const handleStartEditNote = (note) => {
      setEditingNoteId(note.id);
      setNoteCategory(note.category);
      setNoteTitle(note.title || "");
      setNoteContent(note.content || "");
    };
    const handleCancelEditNote = () => {
      setEditingNoteId(null);
      setNoteCategory("\u56DE\u8A3A\u63D0\u554F");
      setNoteTitle("");
      setNoteContent("");
    };
    const handleDeleteNote = (id) => {
      if (editingNoteId === id) {
        handleCancelEditNote();
      }
      setNotes(notes.filter((n) => n.id !== id));
      showToast("\u{1F5D1}\uFE0F \u5DF2\u522A\u9664\u7B46\u8A18");
    };
    const handleOpenEditModal = () => {
      setEditFormData(__spreadValues({}, babyInfo));
      setShowEditProfileModal(true);
    };
    const handleSaveProfile = (e) => {
      e.preventDefault();
      const cleanedForm = __spreadProps(__spreadValues({}, editFormData), {
        birthDate: sanitizeDateStr(editFormData.birthDate),
        dueDate: sanitizeDateStr(editFormData.dueDate)
      });
      setBabyInfo(cleanedForm);
      setShowEditProfileModal(false);
      const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const existingTodayIndex = growthHistory.findIndex((g) => g.date === todayStr);
      if (existingTodayIndex >= 0) {
        const updated = [...growthHistory];
        updated[existingTodayIndex] = __spreadProps(__spreadValues({}, updated[existingTodayIndex]), {
          // Use explicit checks so an empty string from the form overwrites previous values
          weight: typeof cleanedForm.currentWeight !== "undefined" ? cleanedForm.currentWeight : updated[existingTodayIndex].weight,
          height: typeof cleanedForm.currentHeight !== "undefined" ? cleanedForm.currentHeight : updated[existingTodayIndex].height,
          head: typeof cleanedForm.currentHead !== "undefined" ? cleanedForm.currentHead : updated[existingTodayIndex].head
        });
        setGrowthHistory(updated);
      } else {
        const hasAnyValue = typeof cleanedForm.currentWeight !== "undefined" && cleanedForm.currentWeight !== "" || typeof cleanedForm.currentHeight !== "undefined" && cleanedForm.currentHeight !== "" || typeof cleanedForm.currentHead !== "undefined" && cleanedForm.currentHead !== "";
        if (hasAnyValue) {
          setGrowthHistory([
            ...growthHistory,
            {
              id: Date.now(),
              date: todayStr,
              weight: cleanedForm.currentWeight || "",
              height: cleanedForm.currentHeight || "",
              head: cleanedForm.currentHead || ""
            }
          ]);
        }
      }
      showToast("\u{1F4BE} \u7167\u8B77\u6A94\u6848\u8A2D\u5B9A\u5DF2\u5132\u5B58\uFF01");
    };
    const handleAddGrowthRecord = (newRec) => {
      const cleanedRec = __spreadProps(__spreadValues({}, newRec), {
        date: sanitizeDateStr(newRec.date)
      });
      setGrowthHistory([cleanedRec, ...growthHistory]);
      if (typeof cleanedRec.weight !== "undefined") setBabyInfo((prev) => __spreadProps(__spreadValues({}, prev), { currentWeight: cleanedRec.weight }));
      if (typeof cleanedRec.height !== "undefined") setBabyInfo((prev) => __spreadProps(__spreadValues({}, prev), { currentHeight: cleanedRec.height }));
      if (typeof cleanedRec.head !== "undefined") setBabyInfo((prev) => __spreadProps(__spreadValues({}, prev), { currentHead: cleanedRec.head }));
      showToast("\u{1F4C8} \u5DF2\u65B0\u589E\u6E2C\u91CF\u6578\u64DA\u9EDE\uFF01");
    };
    const handleDeleteGrowthRecord = (id) => {
      setGrowthHistory(growthHistory.filter((item) => item.id !== id));
      showToast("\u{1F5D1}\uFE0F \u5DF2\u522A\u9664\u6E2C\u91CF\u9EDE");
    };
    const handleResetData = () => {
      const confirmed = window.confirm(
        "\u8B66\u544A\uFF1A\u6B64\u64CD\u4F5C\u5C07\u6E05\u9664\u6240\u6709\u5BF6\u5BF6\u7167\u8B77\u8207\u7B46\u8A18\u672C\u8CC7\u6599\uFF01\u8CC7\u6599\u522A\u9664\u5F8C\u7121\u6CD5\u5FA9\u539F\u3002\u5EFA\u8B70\u5148\u4F7F\u7528\u756B\u9762\u4E0A\u65B9\u7684\u300E\u5099\u4EFD/\u9084\u539F\u300F\u529F\u80FD\u532F\u51FA\u5099\u4EFD\u6A94\u6848\u3002\u78BA\u5B9A\u8981\u7E7C\u7E8C\u6E05\u7A7A\u6240\u6709\u8CC7\u6599\u55CE\uFF1F"
      );
      if (!confirmed) return;
      localStorage.removeItem("sun_baby_profile_v5");
      localStorage.removeItem("sun_baby_growth_history_v1");
      localStorage.removeItem("sun_baby_logs_v1");
      localStorage.removeItem("sun_baby_doctor_notes_v1");
      localStorage.removeItem("sun_baby_notes_v1");
      setBabyInfo({
        name: "",
        gender: "boy",
        gestationalWeeks: "",
        birthWeight: "",
        birthDate: "",
        dueDate: "",
        currentWeight: "",
        currentHeight: "",
        currentHead: "",
        targetDailyMilk: ""
      });
      setGrowthHistory([]);
      setLogs([]);
      setDoctorNotes([]);
      setNotes([]);
      setShowEditProfileModal(false);
      showToast("\u{1F9F9} \u5DF2\u91CD\u7F6E\u6E05\u7A7A\u6240\u6709\u672C\u5730\u8CC7\u6599");
    };
    const handleClearLogs = () => {
      const confirmed = window.confirm(
        "\u26A0\uFE0F \u6B64\u64CD\u4F5C\u5C07\u6E05\u9664\u6240\u6709\u7167\u8B77\u65E5\u8A8C\uFF08\u9935\u5976\u3001\u5C3F\u5E03\u7B49\u7D00\u9304\uFF09\u3002\u78BA\u5B9A\u8981\u7E7C\u7E8C\u55CE\uFF1F"
      );
      if (!confirmed) return;
      setLogs([]);
      showToast("\u{1F5D1}\uFE0F \u5DF2\u6E05\u9664\u7167\u8B77\u65E5\u8A8C");
    };
    const handleClearDoctorNotes = () => {
      const confirmed = window.confirm(
        "\u26A0\uFE0F \u6B64\u64CD\u4F5C\u5C07\u6E05\u9664\u6240\u6709\u770B\u8A3A\u5099\u5FD8\u8207\u7B46\u8A18\u3002\u78BA\u5B9A\u8981\u7E7C\u7E8C\u55CE\uFF1F"
      );
      if (!confirmed) return;
      setDoctorNotes([]);
      showToast("\u{1F5D1}\uFE0F \u5DF2\u6E05\u9664\u770B\u8A3A\u5099\u5FD8/\u7B46\u8A18");
    };
    const handleClearGrowthData = () => {
      const confirmed = window.confirm(
        "\u26A0\uFE0F \u6B64\u64CD\u4F5C\u5C07\u6E05\u9664\u6240\u6709\u751F\u9577\u6E2C\u91CF\u6578\u64DA\u3002\u78BA\u5B9A\u8981\u7E7C\u7E8C\u55CE\uFF1F"
      );
      if (!confirmed) return;
      setGrowthHistory([]);
      showToast("\u{1F5D1}\uFE0F \u5DF2\u6E05\u9664\u751F\u9577\u6578\u64DA");
    };
    const handleResetMilkSettings = () => {
      const confirmed = window.confirm(
        "\u26A0\uFE0F \u6B64\u64CD\u4F5C\u5C07\u91CD\u7F6E\u6BCF\u65E5\u5976\u91CF\u9032\u5EA6\u8207\u76EE\u6A19\u3002\u78BA\u5B9A\u8981\u7E7C\u7E8C\u55CE\uFF1F"
      );
      if (!confirmed) return;
      setLogs((prevLogs) => prevLogs.filter((item) => item.type !== "feeding"));
      setBabyInfo((prev) => __spreadProps(__spreadValues({}, prev), { targetDailyMilk: "" }));
      showToast("\u{1F9F4} \u5DF2\u91CD\u7F6E\u5976\u91CF\u8A2D\u5B9A/\u76EE\u6A19");
    };
    const handleDownloadPDF = () => {
      setIsExporting(true);
      showToast("\u{1F4C4} \u6B63\u5728\u751F\u6210 PDF \u5831\u544A\uFF0C\u8ACB\u7A0D\u5019...");
      setTimeout(() => {
        const element = document.getElementById("pdf-report-content");
        if (!element) {
          setIsExporting(false);
          showToast("\u274C \u532F\u51FA\u5931\u6557\uFF0C\u7121\u6CD5\u627E\u5230 PDF \u5831\u544A\u5167\u5BB9\u7D44\u4EF6\u3002");
          return;
        }
        element.style.display = "block";
        const opt = {
          margin: 10,
          filename: `${babyInfo.name || "\u5BF6\u5BF6"}_\u5DF4\u638C\u5C0F\u592A\u967D\xB7\u65E9\u7522\u5152\u9580\u8A3A\u7167\u8B77\u8207\u751F\u9577\u5831\u544A_${formatLocalDateTimeForFileName()}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };
        if (window.html2pdf) {
          window.html2pdf().set(opt).from(element).save().then(() => {
            element.style.display = "none";
            setIsExporting(false);
            showToast("\u2705 PDF \u5831\u544A\u5DF2\u9806\u5229\u532F\u51FA\u4E0B\u8F09\uFF01");
          }).catch((err) => {
            console.error(err);
            element.style.display = "none";
            setIsExporting(false);
            showToast("\u274C PDF \u7522\u751F\u904E\u7A0B\u4E2D\u767C\u751F\u932F\u8AA4\u3002");
          });
        } else {
          window.print();
          element.style.display = "none";
          setIsExporting(false);
        }
      }, 150);
    };
    const ageData = React.useMemo(() => {
      return calculateAges(babyInfo.birthDate, babyInfo.dueDate);
    }, [babyInfo.birthDate, babyInfo.dueDate]);
    const latestWeightDisplay = React.useMemo(() => {
      const latestEntry = [...growthHistory].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0)).find((item) => typeof item.weight !== "undefined" && item.weight !== null);
      return latestEntry ? latestEntry.weight : "";
    }, [growthHistory]);
    const [newDoctorQuestion, setNewDoctorQuestion] = React.useState("");
    const [showAddLogModal, setShowAddLogModal] = React.useState(false);
    const [newLogType, setNewLogType] = React.useState("feeding");
    const [newLogDetail, setNewLogDetail] = React.useState("");
    const [newLogAmount, setNewLogAmount] = React.useState("");
    const [chatMessages, setChatMessages] = React.useState([
      { sender: "bot", text: "\u4F60\u597D\uFF01\u6211\u662F\u5DF4\u638C\u5C0F\u592A\u967D\u7684 AI \u7167\u8B77\u52A9\u624B \u2600\uFE0F\u3002\u60A8\u53EF\u4EE5\u8A62\u554F\u95DC\u65BC\u3010\u77EF\u6B63\u6708\u9F61\u751F\u9577\u66F2\u7DDA\u3011\u8A08\u7B97\u3001\u6BCF\u65E5\u5976\u91CF\u8A55\u4F30\u3001\u8CC7\u6599\u540C\u6B65\u5099\u4EFD\u8207\u9084\u539F\u3001\u7B46\u8A18\u672C\u4F7F\u7528\u7B49\u554F\u984C\u5594\uFF01" }
    ]);
    const [inputMessage, setInputMessage] = React.useState("");
    const todayTotalMilk = React.useMemo(() => {
      return logs.filter((l) => l.type === "feeding" && l.amount).reduce((sum, l) => sum + parseInt(l.amount || "0", 10), 0);
    }, [logs]);
    const targetMilkNum = parseInt(babyInfo.targetDailyMilk || "0", 10);
    const milkPercent = targetMilkNum > 0 ? Math.min(100, Math.round(todayTotalMilk / targetMilkNum * 100)) : 0;
    const handleAddLog = (e) => {
      e.preventDefault();
      const now = /* @__PURE__ */ new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      const newEntry = {
        id: Date.now(),
        type: newLogType,
        time: timeStr,
        detail: newLogDetail || (newLogType === "feeding" ? "\u74F6\u9935\u6BCD\u4E73/\u914D\u65B9\u5976" : "\u6FD5\u5C3F\u5E03"),
        amount: newLogType === "feeding" && newLogAmount ? `${newLogAmount}ml` : null
      };
      setLogs([newEntry, ...logs]);
      setShowAddLogModal(false);
      setNewLogDetail("");
      setNewLogAmount("");
      showToast("\u{1F37C} \u5DF2\u4E0A\u8A18\u9304\uFF01");
    };
    const handleAddDoctorNote = (e) => {
      e.preventDefault();
      if (!newDoctorQuestion.trim()) return;
      setDoctorNotes([
        ...doctorNotes,
        { id: Date.now(), question: newDoctorQuestion, answered: false, tag: "\u9580\u8A3A\u63D0\u554F" }
      ]);
      setNewDoctorQuestion("");
      showToast("\u{1F3E5} \u5DF2\u65B0\u589E\u770B\u8A3A\u554F\u984C\uFF01");
    };
    const handleSendMessage = (e) => {
      e.preventDefault();
      if (!inputMessage.trim()) return;
      const userText = inputMessage;
      setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
      setInputMessage("");
      setTimeout(() => {
        let replyText = "\u65E9\u7522\u5152\u8ACB\u52D9\u5FC5\u6839\u64DA\u3010\u77EF\u6B63\u6708\u9F61\u3011\u4F86\u5C0D\u7167\u751F\u9577\u8207\u767C\u5C55\u6307\u6A19\uFF01\u82E5\u8981\u8DE8\u88DD\u7F6E\u6216\u5099\u4EFD\u8CC7\u6599\uFF0C\u53EF\u96A8\u6642\u9EDE\u64CA\u53F3\u4E0A\u89D2\u300C\u5099\u4EFD/\u9084\u539F\u300D\u532F\u51FA\u5099\u4EFD\u6A94\u6848\u3002";
        const babyName = babyInfo.name || "\u5BF6\u5BF6";
        if (userText.includes("\u5099\u4EFD") || userText.includes("\u9084\u539F") || userText.includes("\u532F\u5165") || userText.includes("\u532F\u51FA")) {
          replyText = `\u9EDE\u64CA\u4E0A\u65B9\u9078\u55AE\u5217\u7684\u3010\u5099\u4EFD/\u9084\u539F\u3011\u6309\u9215\uFF0C\u5373\u53EF\u5C07 ${babyName} \u7684\u300C\u57FA\u672C\u8A2D\u5B9A\u6A94\u300D\u3001\u300C\u6B77\u53F2\u6E2C\u91CF\u5217\u8868\u300D\u4EE5\u53CA\u300C\u7B46\u8A18\u672C\u300D\u5B8C\u6574\u4E0B\u8F09\u6210\u5099\u4EFD\u6A94\u6848\u3002\u66F4\u63DB\u624B\u6A5F\u6216\u700F\u89BD\u5668\u6642\u8CBC\u4E0A\u5373\u53EF\u79D2\u901F\u9084\u539F\uFF01`;
        } else if (userText.includes("\u7B46\u8A18") || userText.includes("\u8A18")) {
          replyText = `\u9EDE\u64CA\u9801\u9762\u9802\u90E8\u7684\u3010\u7B46\u8A18\u672C\u3011\u6309\u9215\u5373\u53EF\u5FEB\u901F\u7D00\u9304\u3010\u56DE\u8A3A\u63D0\u554F\u3011\u3001\u3010\u6210\u9577\u5927\u4E8B\u8A18\u3011\u8207\u3010\u5176\u4ED6\u5099\u5FD8\u3011\u3002\u55AE\u7BC7\u4E0A\u9650 1000 \u5B57\uFF0C\u6700\u591A\u53EF\u5132\u5B58 1000 \u689D\u7B46\u8A18\uFF0C\u4E26\u96A8\u6642\u652F\u63F4\u7DE8\u8F2F\u8207\u8986\u84CB\u66F4\u65B0\u5594\uFF01`;
        } else if (userText.includes("\u77EF\u6B63") || userText.includes("\u7B97") || userText.includes("\u66F2\u7DDA")) {
          replyText = `\u8A55\u4F30 ${babyName} \u7684\u8EAB\u9AD8\u3001\u9AD4\u91CD\u8207\u982D\u570D\u6642\uFF0C\u8ACB\u7D71\u4E00\u67E5\u770B\u3010\u751F\u9577\u8207\u767C\u5C55\u3011\u5206\u9801\u7684\u751F\u9577\u66F2\u7DDA\u5716\uFF0C\u5176 X \u8EF8\u5DF2\u9396\u5B9A\u9810\u7522\u671F\u7B97\u7684\u3010\u77EF\u6B63\u6708\u9F61\u3011\uFF08\u76EE\u524D\u70BA ${ageData.correctedText}\uFF09\u3002`;
        } else if (userText.includes("\u5976\u91CF") || userText.includes("\u559D")) {
          const weight = parseFloat(babyInfo.currentWeight || "0");
          if (weight > 0) {
            const minMilk = Math.round(weight * 150);
            const maxMilk = Math.round(weight * 180);
            replyText = `\u65E9\u7522\u5152\u6BCF\u65E5\u5EFA\u8B70\u7E3D\u5976\u91CF\u516C\u5F0F\u70BA\uFF1A\u9AD4\u91CD(kg) \xD7 150ml ~ 180ml\u3002\u4EE5 ${babyName} \u76EE\u524D\u9AD4\u91CD ${weight}kg \u8A08\u7B97\uFF0C\u4E00\u5929\u5EFA\u8B70\u7E3D\u5976\u91CF\u7D04\u70BA ${minMilk}ml ~ ${maxMilk}ml\u3002`;
          } else {
            replyText = `\u65E9\u7522\u5152\u6BCF\u65E5\u5EFA\u8B70\u7E3D\u5976\u91CF\u516C\u5F0F\u70BA\uFF1A\u9AD4\u91CD(kg) \xD7 150ml ~ 180ml\u3002\u60A8\u53EF\u4EE5\u5148\u9EDE\u64CA\u300C\u81EA\u8A02/\u4FEE\u6539\u300D\u586B\u5165\u5BF6\u5BF6\u9AD4\u91CD\u4F86\u8A08\u7B97\u5594\uFF01`;
          }
        }
        setChatMessages((prev) => [...prev, { sender: "bot", text: replyText }]);
      }, 600);
    };
    const filteredNotes = notes.filter((n) => filterNoteCategory === "\u5168\u90E8" || n.category === filterNoteCategory);
    const themeBg = isNightMode ? "bg-slate-900 text-slate-100" : "bg-amber-50/50 text-slate-800";
    const cardBg = isNightMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-100";
    return /* @__PURE__ */ React.createElement("div", { className: `min-h-screen font-sans ${themeBg} transition-colors duration-200 relative` }, toastMsg && /* @__PURE__ */ React.createElement("div", { className: "fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl flex items-center gap-2 border border-slate-700 animate-bounce" }, /* @__PURE__ */ React.createElement("span", null, toastMsg)), /* @__PURE__ */ React.createElement("header", { className: `sticky top-0 z-30 border-b ${isNightMode ? "bg-slate-900 border-slate-800" : "bg-amber-500 text-white border-amber-600"}` }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto px-4 py-3 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 bg-yellow-400 text-amber-900 rounded-full shadow-md" }, /* @__PURE__ */ React.createElement(Icon, { name: "sun", className: "w-5 h-5 fill-current" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "font-bold text-base flex items-center gap-2" }, "\u5DF4\u638C\u5C0F\u592A\u967D"), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] opacity-90" }, "\u65E9\u7522\u5152\u7167\u8B77\u5C0F\u5E6B\u624B"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowNotesModal(true),
        className: "px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-sm",
        title: "\u958B\u555F\u7B46\u8A18\u672C"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "book", className: "w-4 h-4" }),
      /* @__PURE__ */ React.createElement("span", null, "\u7B46\u8A18\u672C")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowBackupModal(true),
        className: "px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-sm",
        title: "\u958B\u555F\u8CC7\u6599\u5099\u4EFD\u8207\u9084\u539F"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "database", className: "w-4 h-4" }),
      /* @__PURE__ */ React.createElement("span", null, "\u5099\u4EFD/\u9084\u539F")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowDataMgmtModal(true),
        className: "px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-sm",
        title: "\u958B\u555F\u8CC7\u6599\u7BA1\u7406"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-4 h-4" }),
      /* @__PURE__ */ React.createElement("span", null, "\u8CC7\u6599\u7BA1\u7406")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleDownloadPDF,
        disabled: isExporting,
        className: "px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-sm disabled:opacity-50",
        title: "\u4E0B\u8F09\u5B8C\u6574\u8A18\u9304 PDF"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "download", className: "w-4 h-4" }),
      /* @__PURE__ */ React.createElement("span", null, isExporting ? "\u532F\u51FA\u4E2D..." : "PDF")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowHelpModal(true),
        className: "p-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-colors",
        title: "\u8AAA\u660E\u8207\u7279\u8272"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "info", className: "w-4 h-4" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setIsNightMode(!isNightMode),
        className: "p-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-colors",
        title: "\u5207\u63DB\u591C\u9593\u6A21\u5F0F"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "moon", className: "w-4 h-4" })
    )))), /* @__PURE__ */ React.createElement("main", { className: "max-w-2xl mx-auto px-4 pt-4 pb-16" }, /* @__PURE__ */ React.createElement("div", { className: `p-4 rounded-2xl border shadow-sm mb-4 ${cardBg}` }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 rounded-full bg-amber-200 border-2 border-amber-400 flex items-center justify-center text-2xl shadow-inner" }, "\u{1F476}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-bold" }, babyInfo.name ? `${babyInfo.name} \u5BF6\u5BF6` : "\u5C0F\u592A\u967D\u5BF6\u5BF6"), /* @__PURE__ */ React.createElement("span", { className: "text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold" }, babyInfo.gender === "girl" ? "\u{1F467} \u5973\u5BF6" : "\u{1F466} \u7537\u5BF6"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleOpenEditModal,
        className: "px-2 py-0.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs flex items-center gap-1 font-semibold transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "edit", className: "w-3 h-3" }),
      /* @__PURE__ */ React.createElement("span", null, "\u81EA\u8A02/\u4FEE\u6539")
    )), /* @__PURE__ */ React.createElement("div", { className: "text-xs font-bold text-amber-600 mt-0.5 flex items-center gap-1" }, /* @__PURE__ */ React.createElement("span", null, "\u26A1\uFE0F ", ageData.correctedText)), /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-400" }, ageData.chronoText, " ", babyInfo.gestationalWeeks ? `(${babyInfo.gestationalWeeks}\u9031\u51FA\u751F)` : ""))), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] text-slate-400" }, "\u7576\u524D\u9AD4\u91CD"), /* @__PURE__ */ React.createElement("div", { className: "text-xl font-black text-amber-600" }, latestWeightDisplay ? `${latestWeightDisplay} kg` : "\u2014 kg")))), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-2 overflow-x-auto pb-2 mb-4 no-scrollbar" }, [
      { id: "dashboard", label: "\u2600\uFE0F \u4ECA\u65E5\u5FEB\u7167" },
      { id: "growth", label: "\u{1F4C8} \u77EF\u6B63\u6708\u9F61\u751F\u9577\u66F2\u7DDA" },
      { id: "care", label: "\u{1F37C} \u7167\u8B77\u65E5\u8A8C" },
      { id: "doctor", label: "\u{1F3E5} \u770B\u8A3A\u5099\u5FD8" },
      { id: "chat", label: "\u{1F916} AI \u8AEE\u8A62" }
    ].map((tab) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: tab.id,
        onClick: () => setActiveTab(tab.id),
        className: `px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${activeTab === tab.id ? "bg-amber-500 text-white shadow-md" : "bg-white border text-slate-600 hover:bg-amber-50"}`
      },
      tab.label
    ))), activeTab === "dashboard" && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: `p-4 rounded-2xl border ${cardBg}` }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-2" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold text-sm flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(Icon, { name: "droplet", className: "text-amber-500 w-4 h-4" }), "\u4ECA\u65E5\u7E3D\u5976\u91CF\u9032\u5EA6"), /* @__PURE__ */ React.createElement("span", { className: "text-base font-bold text-amber-600" }, todayTotalMilk, " / ", babyInfo.targetDailyMilk || "0", " ml")), /* @__PURE__ */ React.createElement("div", { className: "w-full h-3 bg-slate-100 rounded-full overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "h-full bg-amber-400 rounded-full transition-all duration-500", style: { width: `${milkPercent}%` } })), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-slate-400 mt-2 text-right" }, targetMilkNum > 0 ? `\u5DF2\u9054\u6210\u6BCF\u65E5\u76EE\u6A19\u7684 ${milkPercent}%` : "\u672A\u8A2D\u5B9A\u6BCF\u65E5\u76EE\u6A19\u5976\u91CF (\u53EF\u9EDE\u64CA\u300C\u81EA\u8A02/\u4FEE\u6539\u300D\u8A2D\u5B9A)")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          setNewLogType("feeding");
          setShowAddLogModal(true);
        },
        className: "p-4 rounded-2xl border bg-amber-50 border-amber-200 text-amber-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-amber-100 transition-colors shadow-sm"
      },
      "\u{1F37C} \u8A18\u9935\u5976"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          setNewLogType("diaper");
          setShowAddLogModal(true);
        },
        className: "p-4 rounded-2xl border bg-blue-50 border-blue-200 text-blue-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors shadow-sm"
      },
      "\u{1F476} \u8A18\u5C3F\u5E03"
    ))), activeTab === "growth" && /* @__PURE__ */ React.createElement("div", { className: `p-4 rounded-2xl border space-y-4 ${cardBg}` }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Icon, { name: "trendingUp", className: "text-amber-500" }), "\u77EF\u6B63\u6708\u9F61\u751F\u9577\u66F2\u7DDA\u5716\u8868"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex rounded-xl bg-slate-100 p-1 text-xs" }, [
      { id: "weight", label: "\u9AD4\u91CD" },
      { id: "height", label: "\u8EAB\u9577" },
      { id: "head", label: "\u982D\u570D" }
    ].map((m) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: m.id,
        onClick: () => setSelectedMetric(m.id),
        className: `px-2.5 py-1 rounded-lg font-bold transition-all ${selectedMetric === m.id ? "bg-amber-500 text-white shadow-sm" : "text-slate-600"}`
      },
      m.label
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex rounded-xl bg-slate-100 p-1 text-xs" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setSelectedGender("boy"),
        className: `px-2 py-1 rounded-lg font-bold transition-all ${selectedGender === "boy" ? "bg-blue-500 text-white" : "text-slate-600"}`
      },
      "\u7537"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setSelectedGender("girl"),
        className: `px-2 py-1 rounded-lg font-bold transition-all ${selectedGender === "girl" ? "bg-pink-500 text-white" : "text-slate-600"}`
      },
      "\u5973"
    )))), /* @__PURE__ */ React.createElement(
      PretermGrowthChart,
      {
        metric: selectedMetric,
        gender: selectedGender,
        babyInfo,
        growthHistory,
        onAddGrowthRecord: handleAddGrowthRecord,
        onDeleteGrowthRecord: handleDeleteGrowthRecord
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 pt-2 border-t" }, /* @__PURE__ */ React.createElement("h4", { className: "font-bold text-xs text-slate-700" }, "\u77EF\u6B63\u6708\u9F61\u767C\u5C55\u91CC\u7A0B\u7891\u6AA2\u6838"), milestones.map((m) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: m.id,
        onClick: () => setMilestones(milestones.map((item) => item.id === m.id ? __spreadProps(__spreadValues({}, item), { done: !item.done }) : item)),
        className: "p-3 rounded-xl border flex items-center gap-3 cursor-pointer hover:bg-amber-50/50 transition-colors bg-white"
      },
      /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: m.done, readOnly: true, className: "w-4 h-4 accent-amber-500 rounded" }),
      /* @__PURE__ */ React.createElement("span", { className: `text-xs font-medium ${m.done ? "line-through text-slate-400" : "text-slate-700"}` }, m.text)
    )))), activeTab === "care" && /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-1" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm" }, "\u4ECA\u65E5\u7167\u8B77\u7D00\u9304"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowAddLogModal(true),
        className: "px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "plus", className: "w-3.5 h-3.5" }),
      "\u65B0\u589E\u7D00\u9304"
    )), logs.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "p-6 text-center text-xs text-slate-400 border rounded-2xl bg-slate-50/50" }, "\u5C1A\u7121\u7D00\u9304\uFF0C\u9EDE\u64CA\u300C+ \u65B0\u589E\u7D00\u9304\u300D\u958B\u59CB\u8A18\u9304\u9935\u5976\u8207\u5C3F\u5E03\u5427\uFF01") : logs.map((log) => /* @__PURE__ */ React.createElement("div", { key: log.id, className: `p-3 rounded-xl border flex justify-between items-center ${cardBg}` }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold text-amber-600" }, log.time), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-medium" }, log.detail)), log.amount && /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded" }, log.amount)))), activeTab === "doctor" && /* @__PURE__ */ React.createElement("div", { className: `p-4 rounded-2xl border space-y-4 ${cardBg}` }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Icon, { name: "stethoscope", className: "text-amber-500" }), " \u770B\u8A3A\u5099\u5FD8\u8207\u9580\u8A3A\u63D0\u554F")), /* @__PURE__ */ React.createElement("form", { onSubmit: handleAddDoctorNote, className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: newDoctorQuestion,
        onChange: (e) => setNewDoctorQuestion(e.target.value),
        placeholder: "\u5BEB\u4E0B\u60F3\u554F\u65B0\u751F\u5152\u52A0\u8B77\u75C5\u623F\u6216\u4E3B\u6CBB\u91AB\u5E2B\u7684\u554F\u984C...",
        className: "flex-1 p-2.5 border rounded-xl text-xs"
      }
    ), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "px-4 py-2.5 bg-amber-500 text-white rounded-xl text-xs font-bold shadow-sm" }, "\u65B0\u589E")), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, doctorNotes.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "p-4 text-center text-xs text-slate-400 border rounded-xl bg-slate-50" }, "\u5C1A\u7121\u770B\u8A3A\u554F\u984C\u5099\u5FD8") : doctorNotes.map((note) => /* @__PURE__ */ React.createElement("div", { key: note.id, className: "p-3 border rounded-xl text-xs space-y-1 bg-white" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold" }, note.tag), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setDoctorNotes(doctorNotes.map((n) => n.id === note.id ? __spreadProps(__spreadValues({}, n), { answered: !n.answered }) : n)),
        className: note.answered ? "text-green-600 font-bold" : "text-slate-400 hover:text-slate-600"
      },
      note.answered ? "\u2713 \u91AB\u5E2B\u5DF2\u89E3\u7B54" : "\u6A19\u8A18\u70BA\u5DF2\u89E3\u7B54"
    )), /* @__PURE__ */ React.createElement("p", { className: "font-medium text-slate-700" }, note.question))))), activeTab === "chat" && /* @__PURE__ */ React.createElement("div", { className: `p-4 rounded-2xl border flex flex-col h-[30rem] ${cardBg}` }, /* @__PURE__ */ React.createElement("div", { className: "mb-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5 shadow-sm" }, /* @__PURE__ */ React.createElement(Icon, { name: "alertTriangle", className: "w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ React.createElement("div", { className: "leading-snug" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold text-rose-800 block text-xs mb-0.5" }, "\u26A0\uFE0F \u91AB\u7642\u8AEE\u8A62\u91CD\u8981\u8072\u660E\uFF1A"), /* @__PURE__ */ React.createElement("p", { className: "text-rose-700" }, "\u672C AI \u8AEE\u8A62\u529F\u80FD\u7D50\u679C\u50C5\u4F9B\u53C3\u8003\uFF0C\u4E0D\u53EF\u4F5C\u70BA\u91AB\u7642\u8A3A\u65B7\u6216\u8655\u65B9\u4F9D\u64DA\u3002\u5BF6\u5BF6\u8EAB\u9AD4\u72C0\u6CC1\u96A8\u6642\u8B8A\u5316\uFF0C\u4ECD\u9808\u4EE5\u5C08\u696D\u91AB\u5E2B\u8A55\u4F30\u7D50\u679C\u70BA\u6E96\u3002"))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto space-y-2 pr-1 no-scrollbar" }, chatMessages.map((msg, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}` }, /* @__PURE__ */ React.createElement("div", { className: `p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${msg.sender === "user" ? "bg-amber-500 text-white" : "bg-amber-50 text-slate-800 border border-amber-200"}` }, msg.text)))), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSendMessage, className: "mt-3 flex gap-2" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: inputMessage,
        onChange: (e) => setInputMessage(e.target.value),
        placeholder: "\u8A62\u554F\u77EF\u6B63\u6708\u9F61\u8A08\u7B97\u3001\u5976\u91CF\u3001\u8CC7\u6599\u5099\u4EFD\u3001\u7B46\u8A18\u672C...",
        className: "flex-1 px-3 py-2 border rounded-xl text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
      }
    ), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-sm transition-colors" }, "\u9001\u51FA")))), /* @__PURE__ */ React.createElement("div", { id: "pdf-report-content", className: "hidden p-8 bg-white text-slate-800 space-y-6 font-sans" }, /* @__PURE__ */ React.createElement("div", { className: "border-b pb-4 flex justify-between items-center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-amber-700" }, "\u5DF4\u638C\u5C0F\u592A\u967D\xB7\u65E9\u7522\u5152\u9580\u8A3A\u7167\u8B77\u8207\u751F\u9577\u5831\u544A"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-500 mt-1" }, "\u532F\u51FA\u6642\u9593\uFF1A", formatLocalDateTime())), /* @__PURE__ */ React.createElement("div", { className: "text-right" }, /* @__PURE__ */ React.createElement("span", { className: "text-lg font-bold text-amber-800" }, babyInfo.name || "\u5C0F\u592A\u967D", " \u5BF6\u5BF6"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-500" }, babyInfo.gender === "girl" ? "\u{1F467} \u5973\u5BF6" : "\u{1F466} \u7537\u5BF6", " | ", ageData.correctedText))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-4 text-xs bg-amber-50/50 p-4 rounded-xl border border-amber-200" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "\u5BE6\u969B\u51FA\u751F\u65E5\uFF1A"), " ", babyInfo.birthDate || "\u672A\u586B\u5BEB"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "\u9810\u7522\u671F\uFF1A"), " ", babyInfo.dueDate || "\u672A\u586B\u5BEB"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "\u51FA\u751F\u9031\u6578\uFF1A"), " ", babyInfo.gestationalWeeks ? `${babyInfo.gestationalWeeks} \u9031` : "\u672A\u586B\u5BEB"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "\u51FA\u751F\u9AD4\u91CD\uFF1A"), " ", babyInfo.birthWeight ? `${babyInfo.birthWeight} kg` : "\u672A\u586B\u5BEB"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "\u5BE6\u969B\u6708\u9F61\uFF1A"), " ", ageData.chronoText), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "\u7576\u524D\u9AD4\u91CD/\u8EAB\u9577/\u982D\u570D\uFF1A"), " ", babyInfo.currentWeight ? `${babyInfo.currentWeight} kg` : "\u2014", " / ", babyInfo.currentHeight ? `${babyInfo.currentHeight} cm` : "\u2014", " / ", babyInfo.currentHead ? `${babyInfo.currentHead} cm` : "\u2014")), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm text-slate-800 border-b pb-1" }, "\u{1F4C8} \u6B77\u53F2\u6E2C\u91CF\u7D00\u9304\u8868"), growthHistory.length === 0 ? /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-400" }, "\u5C1A\u7121\u6E2C\u91CF\u7D00\u9304") : /* @__PURE__ */ React.createElement("table", { className: "w-full text-xs text-left border-collapse" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { className: "bg-slate-100 border-b" }, /* @__PURE__ */ React.createElement("th", { className: "p-2 border-b" }, "\u65E5\u671F"), /* @__PURE__ */ React.createElement("th", { className: "p-2 border-b" }, "\u9AD4\u91CD (kg)"), /* @__PURE__ */ React.createElement("th", { className: "p-2 border-b" }, "\u8EAB\u9577 (cm)"), /* @__PURE__ */ React.createElement("th", { className: "p-2 border-b" }, "\u982D\u570D (cm)"))), /* @__PURE__ */ React.createElement("tbody", null, growthHistory.map((rec) => /* @__PURE__ */ React.createElement("tr", { key: rec.id, className: "border-b" }, /* @__PURE__ */ React.createElement("td", { className: "p-2" }, rec.date), /* @__PURE__ */ React.createElement("td", { className: "p-2" }, rec.weight || "\u2014"), /* @__PURE__ */ React.createElement("td", { className: "p-2" }, rec.height || "\u2014"), /* @__PURE__ */ React.createElement("td", { className: "p-2" }, rec.head || "\u2014")))))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm text-slate-800 border-b pb-1" }, "\u{1F3E5} \u770B\u8A3A\u5099\u5FD8\u8207\u9580\u8A3A\u63D0\u554F"), doctorNotes.length === 0 ? /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-400" }, "\u7121\u9580\u8A3A\u63D0\u554F\u7D00\u9304") : /* @__PURE__ */ React.createElement("ul", { className: "space-y-1.5 text-xs" }, doctorNotes.map((n) => /* @__PURE__ */ React.createElement("li", { key: n.id, className: "p-2 bg-slate-50 border rounded-lg flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", null, "\u2022 ", n.question), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-700" }, n.answered ? "\u2713 \u91AB\u5E2B\u5DF2\u89E3\u7B54" : "\u5F85\u8A62\u554F"))))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm text-slate-800 border-b pb-1" }, "\u{1F4DD} \u7B46\u8A18\u672C\u91CD\u9EDE\u6458\u8981"), notes.length === 0 ? /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-400" }, "\u7121\u7B46\u8A18\u7D00\u9304") : /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-xs" }, notes.map((n) => /* @__PURE__ */ React.createElement("div", { key: n.id, className: "p-2.5 bg-slate-50 border rounded-lg space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-amber-800" }, "\u3010", n.category, "\u3011", n.title, " ", /* @__PURE__ */ React.createElement("span", { className: "text-[10px] font-normal text-slate-400" }, "(", n.createdAt, ")")), n.content && /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 whitespace-pre-wrap" }, n.content))))), /* @__PURE__ */ React.createElement("div", { className: "text-center text-[10px] text-slate-400 pt-6 border-t" }, "\u672C\u5831\u544A\u7531\u300C\u5DF4\u638C\u5C0F\u592A\u967D \xB7 \u65E9\u7522\u5152\u7167\u8B77\u5C0F\u5E6B\u624B\u300D\u81EA\u52D5\u751F\u6210\uFF0C\u50C5\u4F9B\u770B\u8A3A\u6642\u8F14\u52A9\u91AB\u7642\u5718\u968A\u53C3\u8003\u3002")), showEditProfileModal && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b pb-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm text-amber-700" }, "\u4FEE\u6539\u5BF6\u5BF6\u57FA\u672C\u8CC7\u6599"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowEditProfileModal(false), className: "text-slate-400 hover:text-slate-600" }, /* @__PURE__ */ React.createElement(Icon, { name: "x", className: "w-4 h-4" }))), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSaveProfile, className: "space-y-3 text-xs" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u5BF6\u5BF6\u66B1\u7A31"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "\u4F8B\u5982\uFF1A\u5C0F\u592A\u967D",
        value: editFormData.name,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { name: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u751F\u7406\u6027\u5225"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: editFormData.gender,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { gender: e.target.value })),
        className: "w-full p-2 border rounded-xl bg-white"
      },
      /* @__PURE__ */ React.createElement("option", { value: "boy" }, "\u{1F466} \u7537\u5BF6"),
      /* @__PURE__ */ React.createElement("option", { value: "girl" }, "\u{1F467} \u5973\u5BF6")
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u51FA\u751F\u9031\u6578(\u9031)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        placeholder: "\u4F8B\u5982\uFF1A30",
        value: editFormData.gestationalWeeks,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { gestationalWeeks: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u5BE6\u969B\u51FA\u751F\u65E5\u671F"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: editFormData.birthDate,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { birthDate: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u9810\u7522\u671F (\u7B97\u77EF\u6B63\u6708\u9F61)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: editFormData.dueDate,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { dueDate: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 gap-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u51FA\u751F\u9AD4\u91CD(kg)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        step: "0.01",
        placeholder: "2.8",
        value: editFormData.birthWeight,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { birthWeight: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u6700\u65B0\u9AD4\u91CD(kg)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        step: "0.01",
        placeholder: "3.2",
        value: editFormData.currentWeight,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { currentWeight: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u8EAB\u9577(cm)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        step: "0.1",
        placeholder: "48",
        value: editFormData.currentHeight,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { currentHeight: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u982D\u570D(cm)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        step: "0.1",
        placeholder: "34",
        value: editFormData.currentHead,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { currentHead: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u6BCF\u65E5\u76EE\u6A19\u7E3D\u5976\u91CF (ml)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        placeholder: "\u4F8B\u5982\uFF1A450",
        value: editFormData.targetDailyMilk,
        onChange: (e) => setEditFormData(__spreadProps(__spreadValues({}, editFormData), { targetDailyMilk: e.target.value })),
        className: "w-full p-2 border rounded-xl"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-2" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setShowEditProfileModal(false), className: "flex-1 py-2 text-xs border rounded-xl text-slate-500 font-bold" }, "\u53D6\u6D88"), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "flex-1 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md" }, "\u5132\u5B58\u8A2D\u5B9A"))))), showAddLogModal && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-sm p-5 rounded-2xl border shadow-xl bg-white space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b pb-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm text-amber-700" }, "\u65B0\u589E\u4ECA\u65E5\u7167\u8B77\u7D00\u9304"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowAddLogModal(false), className: "text-slate-400 hover:text-slate-600" }, /* @__PURE__ */ React.createElement(Icon, { name: "x", className: "w-4 h-4" }))), /* @__PURE__ */ React.createElement("form", { onSubmit: handleAddLog, className: "space-y-3 text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setNewLogType("feeding"),
        className: `flex-1 py-2 rounded-xl font-bold border transition-colors ${newLogType === "feeding" ? "bg-amber-500 text-white border-amber-500" : "bg-slate-50 text-slate-600"}`
      },
      "\u{1F37C} \u9935\u5976"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setNewLogType("diaper"),
        className: `flex-1 py-2 rounded-xl font-bold border transition-colors ${newLogType === "diaper" ? "bg-blue-500 text-white border-blue-500" : "bg-slate-50 text-slate-600"}`
      },
      "\u{1F476} \u5C3F\u5E03"
    )), newLogType === "feeding" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u9935\u5976\u91CF (ml)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        required: true,
        placeholder: "\u4F8B\u5982\uFF1A60",
        value: newLogAmount,
        onChange: (e) => setNewLogAmount(e.target.value),
        className: "w-full p-2 border rounded-xl"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "font-bold block mb-1" }, "\u5099\u8A3B/\u7D30\u7BC0"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: newLogType === "feeding" ? "\u6BCD\u4E73 / \u914D\u65B9\u5976 / \u74F6\u9935" : "\u6FD5\u5C3F\u5E03 / \u4FBF\u4FBF / \u91CF\u591A",
        value: newLogDetail,
        onChange: (e) => setNewLogDetail(e.target.value),
        className: "w-full p-2 border rounded-xl"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-2" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setShowAddLogModal(false), className: "flex-1 py-2 text-xs border rounded-xl text-slate-500 font-bold" }, "\u53D6\u6D88"), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "flex-1 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md" }, "\u5132\u5B58\u7D00\u9304"))))), showNotesModal && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: `w-full max-w-lg p-5 rounded-2xl border shadow-xl max-h-[90vh] flex flex-col ${cardBg}` }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center pb-3 border-b mb-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "p-1.5 bg-amber-100 text-amber-800 rounded-lg" }, /* @__PURE__ */ React.createElement(Icon, { name: "book", className: "w-5 h-5" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base text-amber-800 flex items-center gap-2" }, "\u7B46\u8A18\u672C", /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-normal px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full" }, "\u5DF2\u5B58 ", notes.length, " / 1000 \u689D")), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-slate-400" }, "\u5BB6\u9577\u5FEB\u901F\u7D00\u9304\u9580\u8A3A\u554F\u984C\u3001\u5927\u4E8B\u8A18\u8207\u5099\u5FD8"))), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowNotesModal(false), className: "text-slate-400 hover:text-slate-600 p-1" }, /* @__PURE__ */ React.createElement(Icon, { name: "x", className: "w-5 h-5" }))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto space-y-4 pr-1 no-scrollbar" }, /* @__PURE__ */ React.createElement("form", { onSubmit: handleSaveNote, className: `p-3 rounded-xl border space-y-2.5 transition-colors ${editingNoteId !== null ? "bg-amber-100/60 border-amber-400 shadow-md ring-2 ring-amber-300" : "bg-amber-50/70 border-amber-200"}` }, editingNoteId !== null && /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between text-xs text-amber-900 font-bold bg-amber-200 px-2.5 py-1 rounded-lg" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(Icon, { name: "edit", className: "w-3.5 h-3.5" }), "\u6B63\u65BC\u7DE8\u8F2F\u6A21\u5F0F\u4FEE\u6539\u4E2D..."), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: handleCancelEditNote,
        className: "text-amber-800 hover:text-red-600 underline text-[11px]"
      },
      "\u653E\u68C4\u4FEE\u6539"
    )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-1/3" }, /* @__PURE__ */ React.createElement("label", { className: "block text-[11px] font-bold text-slate-600 mb-1" }, "\u6A19\u7C64\u5206\u985E"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: noteCategory,
        onChange: (e) => setNoteCategory(e.target.value),
        className: "w-full p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
      },
      /* @__PURE__ */ React.createElement("option", { value: "\u56DE\u8A3A\u63D0\u554F" }, "\u3010\u56DE\u8A3A\u63D0\u554F\u3011"),
      /* @__PURE__ */ React.createElement("option", { value: "\u6210\u9577\u5927\u4E8B\u8A18" }, "\u3010\u6210\u9577\u5927\u4E8B\u8A18\u3011"),
      /* @__PURE__ */ React.createElement("option", { value: "\u5176\u4ED6\u5099\u5FD8" }, "\u3010\u5176\u4ED6\u5099\u5FD8\u3011")
    )), /* @__PURE__ */ React.createElement("div", { className: "w-2/3" }, /* @__PURE__ */ React.createElement("label", { className: "block text-[11px] font-bold text-slate-600 mb-1 flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "\u6A19\u984C (\u6700\u591A 30 \u5B57)"), /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-400" }, noteTitle.length, "/30")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        maxLength: 30,
        placeholder: "\u4F8B\u5982\uFF1A\u4E0B\u6B21\u56DE\u8A3A\u8ACB\u6559\u91AB\u5E2B...",
        value: noteTitle,
        onChange: (e) => setNoteTitle(e.target.value),
        className: "w-full p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
      }
    ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-[11px] font-bold text-slate-600 mb-1 flex justify-between" }, /* @__PURE__ */ React.createElement("span", null, "\u7B46\u8A18\u5167\u5BB9 (\u7D14\u6587\u5B57\uFF0C\u6700\u591A 1000 \u5B57)"), /* @__PURE__ */ React.createElement("span", { className: `text-[10px] ${noteContent.length >= 1e3 ? "text-red-500 font-bold" : "text-slate-400"}` }, noteContent.length, "/1000")), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        rows: 3,
        maxLength: 1e3,
        placeholder: "\u5728\u6B64\u8F38\u5165\u7B46\u8A18\u7D30\u7BC0...",
        value: noteContent,
        onChange: (e) => setNoteContent(e.target.value),
        className: "w-full p-2 text-xs border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        className: "flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs shadow-sm transition-colors"
      },
      editingNoteId !== null ? "\u{1F4BE} \u5132\u5B58\u4FEE\u6539" : "\u2795 \u65B0\u589E\u7B46\u8A18"
    ), editingNoteId !== null && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: handleCancelEditNote,
        className: "px-4 py-2 border border-slate-300 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-100 transition-colors"
      },
      "\u53D6\u6D88"
    ))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-2 pt-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex gap-1 overflow-x-auto no-scrollbar" }, ["\u5168\u90E8", "\u56DE\u8A3A\u63D0\u554F", "\u6210\u9577\u5927\u4E8B\u8A18", "\u5176\u4ED6\u5099\u5FD8"].map((cat) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: cat,
        onClick: () => setFilterNoteCategory(cat),
        className: `px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${filterNoteCategory === cat ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`
      },
      cat
    )))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 max-h-60 overflow-y-auto pr-1" }, filteredNotes.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "p-4 text-center text-xs text-slate-400 border rounded-xl bg-slate-50" }, "\u76EE\u524D\u6C92\u6709", filterNoteCategory === "\u5168\u90E8" ? "" : `\u3010${filterNoteCategory}\u3011`, "\u76F8\u95DC\u7B46\u8A18") : filteredNotes.map((note) => /* @__PURE__ */ React.createElement("div", { key: note.id, className: "p-3 border rounded-xl bg-white shadow-sm space-y-1.5 hover:border-amber-300 transition-colors" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-bold text-[10px]" }, note.category), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-slate-400" }, note.createdAt), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => handleStartEditNote(note),
        className: "text-amber-600 hover:text-amber-800 font-bold text-xs",
        title: "\u7DE8\u8F2F\u7B46\u8A18"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "edit", className: "w-3.5 h-3.5" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => handleDeleteNote(note.id),
        className: "text-slate-400 hover:text-red-500 text-xs",
        title: "\u522A\u9664\u7B46\u8A18"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-3.5 h-3.5" })
    ))), /* @__PURE__ */ React.createElement("h4", { className: "font-bold text-xs text-slate-800" }, note.title), note.content && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-600 whitespace-pre-wrap leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-100" }, note.content))))))), showBackupModal && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-md p-5 rounded-2xl border shadow-xl bg-white space-y-4 max-h-[90vh] overflow-y-auto text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b pb-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm text-amber-700 flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(Icon, { name: "database", className: "w-4 h-4" }), "\u8CC7\u6599\u5099\u4EFD\u8207\u9084\u539F"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowBackupModal(false), className: "text-slate-400 hover:text-slate-600" }, /* @__PURE__ */ React.createElement(Icon, { name: "x", className: "w-4 h-4" }))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-900" }, /* @__PURE__ */ React.createElement("h4", { className: "font-bold text-xs" }, "\u{1F4E4} \u532F\u51FA\u5099\u4EFD"), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] leading-relaxed" }, "\u53EF\u4EE5\u628A\u5BF6\u5BF6\u7684\u57FA\u672C\u8CC7\u6599\u3001\u6210\u9577\u7D00\u9304\u3001\u7167\u8B77\u65E5\u8A18\u8207\u7B46\u8A18\u5167\u5BB9\u4E00\u8D77\u5099\u4EFD\u8D77\u4F86\u3002\u7576\u60A8\u63DB\u624B\u6A5F\u3001\u63DB\u65B0\u88DD\u7F6E\uFF0C\u6216\u60F3\u628A\u5BF6\u5BF6\u8CC7\u6599\u5B89\u5168\u5E36\u8D70\u6642\uFF0C\u9019\u500B\u529F\u80FD\u5F88\u65B9\u4FBF\u3002"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-1" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleExportBackupJSON,
        className: "flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-1 shadow-sm transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "download", className: "w-3.5 h-3.5" }),
      "\u4E0B\u8F09\u5099\u4EFD\u6A94\u6848"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleCopyBackupToClipboard,
        className: "py-2 px-3 border border-amber-300 bg-white hover:bg-amber-100 text-amber-900 rounded-xl font-bold flex items-center justify-center gap-1 transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "copy", className: "w-3.5 h-3.5" }),
      "\u8907\u88FD\u5099\u4EFD\u6587\u5B57"
    ))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 bg-blue-50 p-3 rounded-xl border border-blue-200 text-blue-900" }, /* @__PURE__ */ React.createElement("h4", { className: "font-bold text-xs" }, "\u{1F4E5} \u9084\u539F\u8CC7\u6599"), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] leading-relaxed" }, "\u60A8\u53EF\u4EE5\u9078\u64C7\u5148\u524D\u4E0B\u8F09\u7684\u5099\u4EFD\u6A94\u6848\uFF0C\u6216\u76F4\u63A5\u8CBC\u4E0A\u5099\u4EFD\u6587\u5B57\u5167\u5BB9\u4F86\u628A\u8CC7\u6599\u9084\u539F\u56DE\u4F86\u3002\u5EFA\u8B70\u5148\u5099\u4EFD\u76EE\u524D\u8CC7\u6599\uFF0C\u518D\u9032\u884C\u9084\u539F\uFF0C\u907F\u514D\u8986\u84CB\u6389\u60F3\u4FDD\u7559\u7684\u5167\u5BB9\u3002"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 pt-1" }, /* @__PURE__ */ React.createElement("label", { className: "block w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-center cursor-pointer shadow-sm transition-colors" }, /* @__PURE__ */ React.createElement(Icon, { name: "upload", className: "w-3.5 h-3.5 inline mr-1" }), "\u9078\u64C7\u5099\u4EFD\u6A94\u6848", /* @__PURE__ */ React.createElement("input", { type: "file", accept: ".json", onChange: handleFileUpload, className: "hidden" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        rows: 2,
        placeholder: "\u6216\u8CBC\u4E0A\u5099\u4EFD\u6587\u5B57\u5167\u5BB9...",
        value: pastedJson,
        onChange: (e) => setPastedJson(e.target.value),
        className: "w-full p-2 border rounded-xl text-[11px] font-mono bg-white"
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handlePasteImport,
        className: "w-full py-1.5 bg-slate-700 hover:bg-slate-800 text-white rounded-xl font-bold text-xs transition-colors"
      },
      "\u8CBC\u4E0A\u6587\u5B57\u4E26\u9084\u539F"
    )))))), showDataMgmtModal && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-md p-5 rounded-2xl border shadow-xl bg-white space-y-4 max-h-[90vh] overflow-y-auto text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center border-b pb-2" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-sm text-amber-700 flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-4 h-4" }), "\u8CC7\u6599\u7BA1\u7406\u8207\u6E05\u9664"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowDataMgmtModal(false), className: "text-slate-400 hover:text-slate-600" }, /* @__PURE__ */ React.createElement(Icon, { name: "x", className: "w-4 h-4" }))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-700" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-xs" }, "\u{1F9F9} \u500B\u5225\u6E05\u9664\u529F\u80FD"), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] leading-relaxed" }, "\u63D0\u4F9B\u5404\u985E\u8CC7\u6599\u7684\u55AE\u7368\u6E05\u9664\u9078\u9805\u3002\u8ACB\u5148\u78BA\u8A8D\u662F\u5426\u5DF2\u5099\u4EFD\u91CD\u8981\u8CC7\u6599\uFF0C\u518D\u9032\u884C\u6E05\u9664\u3002")), /* @__PURE__ */ React.createElement("div", { className: "grid gap-2" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleClearLogs,
        className: "w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-4 h-4" }),
      "\u6E05\u9664\u7167\u8B77\u65E5\u8A8C"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleClearDoctorNotes,
        className: "w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-4 h-4" }),
      "\u6E05\u9664\u770B\u8A3A\u5099\u5FD8/\u7B46\u8A18"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleClearGrowthData,
        className: "w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-4 h-4" }),
      "\u6E05\u9664\u751F\u9577\u6578\u64DA"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleResetMilkSettings,
        className: "w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-4 h-4" }),
      "\u91CD\u7F6E\u5976\u91CF\u8A2D\u5B9A/\u76EE\u6A19"
    )), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-amber-200 bg-amber-50/80 p-2.5 text-amber-900" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-[11px] mb-1" }, "\u26A0\uFE0F \u9084\u539F\u8207\u6E05\u9664\u524D\u8ACB\u6CE8\u610F"), /* @__PURE__ */ React.createElement("p", { className: "text-[10.5px] leading-relaxed" }, "\u5982\u679C\u8981\u628A\u8CC7\u6599\u9084\u539F\u5230\u53E6\u4E00\u53F0\u624B\u6A5F\u6216\u88DD\u7F6E\uFF0C\u5148\u505A\u597D\u5099\u4EFD\u6700\u5B89\u5FC3\u3002\u81F3\u65BC\u4EFB\u4F55\u6E05\u9664\u64CD\u4F5C\uFF0C\u9019\u4E9B\u90FD\u662F\u4E0D\u53EF\u9006\u7684\u52D5\u4F5C\uFF0C\u8ACB\u52D9\u5FC5\u5148\u78BA\u8A8D\u662F\u5426\u5DF2\u5099\u4EFD\u518D\u57F7\u884C\u3002")), /* @__PURE__ */ React.createElement("div", { className: "pt-2 border-t" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: handleResetData,
        className: "w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-xl font-bold flex items-center justify-center gap-1 transition-colors"
      },
      /* @__PURE__ */ React.createElement(Icon, { name: "trash", className: "w-3.5 h-3.5" }),
      "\u6E05\u9664\u6240\u6709\u672C\u5730\u8CC7\u6599 (\u91CD\u7F6E)"
    ))))), showHelpModal && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" }, /* @__PURE__ */ React.createElement("div", { className: `w-full max-w-xl p-5 rounded-2xl border shadow-xl max-h-[90vh] flex flex-col ${cardBg}` }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center pb-3 border-b mb-3" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base text-amber-800 flex items-center gap-2" }, "\u{1F4D6} \u300C\u5DF4\u638C\u5C0F\u592A\u967D\u300D\u95DC\u65BC\u8207\u7279\u8272\u8AAA\u660E"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowHelpModal(false), className: "text-slate-400 hover:text-slate-600 p-1" }, /* @__PURE__ */ React.createElement(Icon, { name: "x", className: "w-5 h-5" }))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto space-y-4 pr-1 no-scrollbar text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-amber-900 text-sm flex items-center gap-1.5" }, "\u{1F37C} \u65E5\u5E38\u7167\u8B77\u8207\u751F\u9577\u7D00\u9304"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u8F15\u9B06\u8A18\u9304\u6BCF\u65E5\u9935\u5976\u91CF\u3001\u5C3F\u5E03\u60C5\u6CC1\u8207\u9AD4\u91CD\uFF0C\u638C\u63E1\u5BF6\u5BF6\u6BCF\u4E00\u5929\u7684\u5FAE\u5C0F\u9032\u6B65\u3002")), /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-emerald-900 text-sm flex items-center gap-1.5" }, "\u{1F331} \u767C\u5C55\u91CC\u7A0B\u7891\u6E05\u55AE"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u7CBE\u9078\u95DC\u9375\u6210\u9577\u6307\u6A19\uFF0C\u5E6B\u52A9\u7238\u5ABD\u5B89\u5FC3\u8FFD\u8E64\u5BF6\u5BF6\u7684\u767C\u5C55\u3002")), /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-blue-900 text-sm flex items-center gap-1.5" }, "\u2699\uFE0F \u5F48\u6027\u96D9\u6708\u9F61\u5207\u63DB"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u652F\u63F4\u5C0D\u9F4A\u3010\u9810\u7522\u671F\u3011\u4E4B\u77EF\u6B63\u6708\u9F61\u8207\u3010\u5BE6\u969B\u51FA\u751F\u65E5\u3011\u4E4B\u5BE6\u969B\u6708\u9F61\uFF0C\u4E26\u53EF\u81EA\u7531\u5207\u63DB\u751F\u9577\u66F2\u7DDA\u5716\u8868\u5C0D\u7167\u3002")), /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-purple-50/70 border border-purple-200 rounded-xl space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-purple-900 text-sm flex items-center gap-1.5" }, "\u{1F4DD} \u96A8\u624B\u7B46\u8A18\u672C"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u5FEB\u901F\u8A18\u9304\u9580\u8A3A\u63D0\u554F\u3001\u6210\u9577\u5927\u4E8B\u8A18\u8207\u7167\u8B77\u5099\u5FD8\uFF0C\u652F\u63F4\u5206\u985E\u7BE9\u9078\u8207\u7DE8\u8F2F\uFF0C\u8B93\u7167\u8B77\u8CC7\u8A0A\u4E0D\u907A\u6F0F\u3002")), /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-indigo-900 text-sm flex items-center gap-1.5" }, "\u{1F4C4} \u4E00\u9375\u532F\u51FA PDF \u5831\u8868"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u770B\u8A3A\u6216\u56DE\u8A3A\u6642\uFF0C\u80FD\u76F4\u63A5\u5C07\u8A18\u9304\u532F\u51FA\u6210\u6574\u6F54\u6E05\u6670\u7684 PDF\uFF0C\u65B9\u4FBF\u8207\u91AB\u7642\u5718\u968A\u6E9D\u901A\u3002")), /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-rose-900 text-sm flex items-center gap-1.5" }, "\u{1F916} \u6696\u5FC3\u7167\u8B77\u53EE\u5680\u8207 AI \u8AEE\u8A62"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u5167\u5EFA\u5BE6\u7528\u7684\u7167\u8B77\u5C0F\u53EE\u5680\u8207 AI \u8AEE\u8A62\u52A9\u624B\uFF0C\u96A8\u6642\u966A\u4F34\u7238\u5ABD\u8D70\u904E\u6BCF\u500B\u7126\u616E\u6642\u523B\u3002"))), /* @__PURE__ */ React.createElement("div", { className: "p-3.5 bg-pink-50/80 border border-pink-200 rounded-xl space-y-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-pink-900 text-sm flex items-center gap-1.5" }, "\u{1F338} \u6EAB\u99A8\u966A\u4F34\u7406\u5FF5"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-700 leading-relaxed" }, "\u9019\u6B3E\u5DE5\u5177\u4E0D\u5E36\u4EFB\u4F55\u5546\u696D\u76C8\u5229\u76EE\u7684\u6216\u8907\u96DC\u689D\u6B3E\uFF0C\u53EA\u5E0C\u671B\u80FD\u50CF\u5B83\u7684\u540D\u5B57\u4E00\u6A23\uFF0C\u975C\u975C\u5730\u966A\u4F34\u3001\u6EAB\u6696\u6BCF\u4E00\u500B\u9700\u8981\u7684\u5BB6\u5EAD\u3002"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-700 leading-relaxed" }, "\u5982\u679C\u4F60\u8EAB\u908A\u525B\u597D\u6709\u65E9\u7522\u5152\u65B0\u624B\u7238\u5ABD\uFF0C\u6216\u662F\u4F60\u81EA\u5DF1\u6B63\u7D93\u6B77\u9019\u6BB5\u5B88\u8B77\u7684\u65C5\u7A0B\uFF0C\u6B61\u8FCE\u76F4\u63A5\u9EDE\u64CA\u9023\u7D50\u53D6\u7528\u3002\u9858\u6BCF\u4E00\u4F4D\u50CF\u5C0F\u592A\u967D\u4E00\u6A23\u52C7\u6562\u7684\u5B69\u5B50\uFF0C\u90FD\u80FD\u5728\u5927\u5BB6\u7684\u5B88\u8B77\u4E0B\uFF0C\u5E73\u5B89\u5065\u5EB7\u5730\u9577\u5927\uFF01 \u2764\uFE0F")), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-amber-50 border border-amber-300 rounded-xl space-y-2.5 text-amber-950 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-amber-900 text-sm flex items-center gap-1.5 border-b border-amber-200 pb-2" }, "\u2600\uFE0F \u7D66\u65E9\u7522\u5152\u7238\u5ABD\u7684\u4E00\u5C01\u4FE1"), /* @__PURE__ */ React.createElement("p", { className: "leading-relaxed" }, "\u5404\u4F4D\u8F9B\u82E6\u7684\u7238\u7238\u5ABD\u5ABD\u5011\u597D\uFF0C\u6211\u662F\u4EAE\u6137\u3002"), /* @__PURE__ */ React.createElement("p", { className: "leading-relaxed" }, "\u6211\u662F\u4E00\u540D\u5728 30 \u9031\u3001\u50C5 1450 \u516C\u514B\u6642\u51FA\u751F\u7684\u65E9\u7522\u5152\uFF08\u4E5F\u5C31\u662F\u5927\u5BB6\u5E38\u8AAA\u7684\u300C\u5DF4\u638C\u4ED9\u5B50\u300D\uFF09\u3002\u4E00\u8DEF\u8D70\u4F86\uFF0C\u6211\u6DF1\u6DF1\u660E\u767D\u65E9\u7522\u5152\u5BB6\u5EAD\u5728\u80B2\u5152\u8D77\u6B65\u6642\uFF0C\u5E38\u8981\u9762\u5C0D\u8A31\u591A\u7126\u616E\u3001\u624B\u5FD9\u8173\u4E82\uFF0C\u4EE5\u53CA\u7E41\u7463\u7684\u6210\u9577\u7D00\u9304\u3002"), /* @__PURE__ */ React.createElement("p", { className: "leading-relaxed" }, "\u56E0\u6B64\uFF0C\u6211\u5229\u7528\u7A7A\u9592\u6642\u9593\uFF0C\u904B\u7528\u5DE5\u7A0B\u5E2B\u7684\u80CC\u666F\uFF0C\u5F9E\u7121\u5230\u6709\u6253\u9020\u4E86\u4E00\u6B3E\u5B8C\u5168\u514D\u8CBB\u3001\u7121\u5546\u696D\u6C23\u606F\u7684\u7DB2\u9801\u5DE5\u5177\u2014\u2014\u300C\u5DF4\u638C\u5C0F\u592A\u967D\u300D\uFF0C\u5E0C\u671B\u80FD\u7D66\u4E88\u9019\u7FA4\u8F9B\u82E6\u7684\u7238\u5ABD\u5011\u4E00\u4E9B\u6700\u5BE6\u8CEA\u7684\u966A\u4F34\u8207\u5E6B\u52A9\u3002"), /* @__PURE__ */ React.createElement("p", { className: "leading-relaxed font-semibold pt-1 border-t border-amber-200/60 text-amber-900" }, "\u672C\u61C9\u7528\u7A0B\u5F0F\u7531\u65E9\u7522\u5152\u4EAE\u6137\u70BA\u516C\u76CA\u500B\u4EBA\u958B\u767C\uFF0C\u514D\u8CBB\u63D0\u4F9B\u4E88\u6240\u6709\u65E9\u7522\u5152\u5BB6\u5EAD\u4F7F\u7528\u3002")), /* @__PURE__ */ React.createElement("div", { className: "p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "font-bold text-slate-800 text-sm flex items-center gap-1.5" }, "\u{1F512} \u96B1\u79C1\u6B0A\u8207\u8CC7\u6599\u5B89\u5168\u4FDD\u8B77\u8072\u660E"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u5DF4\u638C\u5C0F\u592A\u967D\u627F\u8AFE\uFF1A\u6211\u5011\u7121\u6BD4\u91CD\u8996\u60A8\u8207\u5BF6\u5BF6\u7684\u96B1\u79C1\u3002\u672C\u61C9\u7528\u7A0B\u5F0F\uFF08\u7DB2\u9801\uFF09\u63A1\u7528\u700F\u89BD\u5668\u672C\u5730\u5FEB\u53D6\u6280\u8853\uFF08Local Storage\uFF09\u3002\u60A8\u6240\u8F38\u5165\u7684\u5BF6\u5BF6\u59D3\u540D\u3001\u751F\u65E5\u3001\u9810\u7522\u671F\uFF0C\u4EE5\u53CA\u6BCF\u4E00\u7B46\u9AD4\u91CD\u3001\u8EAB\u9AD8\u3001\u982D\u570D\u7B49\u65E5\u5E38\u7167\u8B77\u7D00\u9304\uFF0C\u5168\u90E8\u90FD\u53EA\u6703\u5132\u5B58\u5728\u60A8\u81EA\u5DF1\u7684\u624B\u6A5F\u6216\u96FB\u8166\u700F\u89BD\u5668\u4E2D\u3002"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u6211\u5011\u7684\u7DB2\u9801\u4F3A\u670D\u5668\u7D55\u5C0D\u4E0D\u6703\u6536\u96C6\u3001\u50B3\u8F38\u3001\u6216\u7559\u5B58\u4EFB\u4F55\u60A8\u586B\u5BEB\u7684\u96B1\u79C1\u8CC7\u6599\u3002\u6574\u500B\u64CD\u4F5C\u904E\u7A0B\u5B8C\u5168\u5728\u60A8\u7684\u7D42\u7AEF\u8A2D\u5099\u7368\u7ACB\u57F7\u884C\uFF0C\u7DB2\u8DEF\u4E0A\u6C92\u6709\u4EFB\u4F55\u4EBA\u80FD\u7ABA\u63A2\u60A8\u5BF6\u5BF6\u7684\u6210\u9577\u6578\u64DA\u3002"), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed" }, "\u300E\u5DF4\u638C\u5C0F\u592A\u967D\u300F\u7D14\u7CB9\u70BA\u516C\u76CA\u8207\u7167\u8B77\u8F14\u52A9\u800C\u751F\u3002\u6C92\u6709\u6703\u54E1\u767B\u5165\u3001\u6C92\u6709\u5EE3\u544A\u8FFD\u8E64\uFF0C\u66F4\u6C92\u6709\u8CC7\u6599\u5916\u6D29\u7684\u98A8\u96AA\u3002\u60A8\u53EF\u4EE5\u767E\u5206\u4E4B\u767E\u653E\u5FC3\u5730\u5C07\u9019\u88E1\u7576\u4F5C\u5C08\u5C6C\u60A8\u8207\u5BF6\u5BF6\u7684\u5B89\u5FC3\u80B2\u5152\u907F\u98A8\u6E2F\u3002\u5C0A\u91CD\u96B1\u79C1\uFF0C\u8ACB\u5B89\u5FC3\u4F7F\u7528\u3002")), /* @__PURE__ */ React.createElement("div", { className: "text-center text-[11px] text-slate-400 font-medium pt-1" }, "\u958B\u767C\u65E5\u671F\uFF1A2026/7/27")), /* @__PURE__ */ React.createElement("div", { className: "pt-3 border-t mt-3 flex justify-end" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowHelpModal(false),
        className: "w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
      },
      "\u4E86\u89E3\uFF0C\u958B\u59CB\u4F7F\u7528\uFF01"
    )))));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
