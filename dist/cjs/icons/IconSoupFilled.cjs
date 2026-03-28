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
var IconSoupFilled_exports = {};
__export(IconSoupFilled_exports, {
  IconSoupFilled: () => IconSoupFilled
});
module.exports = __toCommonJS(IconSoupFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconSoupFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_react_native_svg.Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M20 10a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M11.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M15.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M7.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
    })]
  });
}));
