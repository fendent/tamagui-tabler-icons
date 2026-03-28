var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var IconSchoolBell_exports = {};
__export(IconSchoolBell_exports, {
  IconSchoolBell: () => IconSchoolBell
});
module.exports = __toCommonJS(IconSchoolBell_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconSchoolBell = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_react_native_svg.Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M4 17a3 3 0 0 0 3 3",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M14.805 6.37l2.783 -2.784a2 2 0 1 1 2.829 2.828l-2.784 2.786",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M16.505 7.495a5.105 5.105 0 0 1 .176 7.035l-.176 .184l-1.867 1.867a3.48 3.48 0 0 0 -1.013 2.234l-.008 .23v.934c0 .327 -.13 .64 -.36 .871a.51 .51 0 0 1 -.652 .06l-.07 -.06l-9.385 -9.384a.51 .51 0 0 1 0 -.722c.198 -.198 .456 -.322 .732 -.353l.139 -.008h.933c.848 0 1.663 -.309 2.297 -.864l.168 -.157l1.867 -1.867l.16 -.153a5.105 5.105 0 0 1 7.059 .153",
      stroke: color
    })]
  });
}));
