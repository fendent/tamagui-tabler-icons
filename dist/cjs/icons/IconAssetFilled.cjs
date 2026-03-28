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
var IconAssetFilled_exports = {};
__export(IconAssetFilled_exports, {
  IconAssetFilled: () => IconAssetFilled
});
module.exports = __toCommonJS(IconAssetFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconAssetFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M19 2a3 3 0 0 1 2.86 3.91l-.107 .291l-.046 .093q -.061 .128 -.134 .25l-6.476 11.909a1 1 0 0 1 -.066 .104a7 7 0 0 1 -13.031 -3.557l.004 -.24a7 7 0 0 1 3.342 -5.732l.256 -.15l11.705 -6.355q .18 -.123 .378 -.22l.215 -.096l.136 -.048c.302 -.103 .627 -.159 .964 -.159m-10 10a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3m7.04 -6.512l-5.12 2.778a7.01 7.01 0 0 1 4.816 4.824l2.788 -5.128a3 3 0 0 1 -2.485 -2.474m2.961 -1.488a1 1 0 0 0 -.317 .051l-.31 .17a1 1 0 1 0 1.465 1.325l.072 -.13a1 1 0 0 0 -.91 -1.416"
    })
  });
}));
