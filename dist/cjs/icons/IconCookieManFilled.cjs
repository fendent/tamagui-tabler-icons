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
var IconCookieManFilled_exports = {};
__export(IconCookieManFilled_exports, {
  IconCookieManFilled: () => IconCookieManFilled
});
module.exports = __toCommonJS(IconCookieManFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconCookieManFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M12.007 1l.238 .005a6 6 0 0 1 5.405 3.974l.078 .233a6 6 0 0 1 -.182 4.08l-.093 .21l.05 -.002a2.94 2.94 0 0 1 2.638 1.511l.081 .158a2.887 2.887 0 0 1 -1.234 3.764l-.19 .096l-1.798 .821v.963l1.166 1.166l.14 .154a2.96 2.96 0 0 1 -.17 4.002c-1.087 1.088 -2.827 1.161 -4.03 .144l-.16 -.146l-1.946 -1.948l-1.946 1.947a2.96 2.96 0 0 1 -3.95 .22l-.15 -.128c-1.17 -1.073 -1.284 -2.879 -.234 -4.12l.146 -.158l1.134 -1.134v-.962l-1.834 -.84l-.181 -.093a2.88 2.88 0 0 1 -1.205 -3.75a2.93 2.93 0 0 1 2.646 -1.661l.13 .003l-.03 -.064a6.1 6.1 0 0 1 -.503 -1.968l-.017 -.26v-.217a6 6 0 0 1 5.775 -5.996l.224 -.004zm.003 15h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m0 -3h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m0 -5h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-2 -3h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m4 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2"
    })
  });
}));
