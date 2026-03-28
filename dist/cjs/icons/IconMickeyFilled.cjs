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
var IconMickeyFilled_exports = {};
__export(IconMickeyFilled_exports, {
  IconMickeyFilled: () => IconMickeyFilled
});
module.exports = __toCommonJS(IconMickeyFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconMickeyFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M18.501 2a4.5 4.5 0 0 1 .878 8.913a8 8 0 1 1 -15.374 3.372l-.005 -.285l.005 -.285a7.991 7.991 0 0 1 .615 -2.803a4.5 4.5 0 0 1 -3.187 -6.348a4.505 4.505 0 0 1 3.596 -2.539l.225 -.018l.281 -.007l.244 .009a4.5 4.5 0 0 1 4.215 4.247a8.001 8.001 0 0 1 4.013 0a4.5 4.5 0 0 1 4.493 -4.256z"
    })
  });
}));
