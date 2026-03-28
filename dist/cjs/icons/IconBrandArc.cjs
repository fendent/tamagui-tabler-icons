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
var IconBrandArc_exports = {};
__export(IconBrandArc_exports, {
  IconBrandArc: () => IconBrandArc
});
module.exports = __toCommonJS(IconBrandArc_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBrandArc = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M4.687 14.694l-.987 2.103c-.502 1.07 -.125 2.387 .908 2.945c1.096 .59 2.444 .13 2.972 -.995l.9 -1.92",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M18.317 14.576c1.818 -1.6 3.16 -3.78 3.64 -6.217c.235 -1.194 -.525 -2.351 -1.695 -2.586a2.14 2.14 0 0 0 -1.625 .326c-.478 .323 -.81 .826 -.922 1.398c-.208 1.054 -.695 2.037 -1.366 2.872",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M12.68 12.759a5.4 5.4 0 0 1 -1.283 .157c-.336 0 -.683 -.04 -1.03 -.115c-1.44 -.31 -2.89 -1.215 -3.709 -2.315a3.7 3.7 0 0 1 -.487 -.853a2.157 2.157 0 0 0 -2.818 -1.213c-1.107 .455 -1.641 1.736 -1.196 2.86c.508 1.278 1.404 2.45 2.53 3.415a11.2 11.2 0 0 0 3.791 2.133c.953 .31 1.942 .483 2.916 .483a9.8 9.8 0 0 0 3.162 -.537",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M10.37 12.801l.943 -2.013c.09 -.19 .357 -.19 .446 0l.923 1.97h.006h-.006l1.88 4.015l.923 1.971a2.16 2.16 0 0 0 1.957 1.254q .29 0 .576 -.081c1.303 -.365 1.92 -1.887 1.339 -3.129l-1.04 -2.218l-1.968 -4.204l-.003 .003l.003 -.003l-2.862 -6.112a2.16 2.16 0 0 0 -1.954 -1.254c-.833 0 -1.593 .488 -1.953 1.254l-2.92 6.232",
      stroke: color
    })]
  });
}));
