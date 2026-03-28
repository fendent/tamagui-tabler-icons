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
var IconFaceMaskFilled_exports = {};
__export(IconFaceMaskFilled_exports, {
  IconFaceMaskFilled: () => IconFaceMaskFilled
});
module.exports = __toCommonJS(IconFaceMaskFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconFaceMaskFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M12.825 4.196l5 1.43a3 3 0 0 1 2.175 2.884v.065c1.7 .33 3 1.72 3 3.425s-1.3 3.095 -3 3.425v.066a3 3 0 0 1 -2.175 2.885l-5 1.428a3 3 0 0 1 -1.65 0l-5 -1.429a3 3 0 0 1 -2.17 -2.702l-.005 -.247c-1.7 -.33 -3 -1.72 -3 -3.426c0 -1.705 1.3 -3.096 3 -3.426v-.064a3 3 0 0 1 2.175 -2.884l5 -1.428a3 3 0 0 1 1.65 0m2.175 8.802h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m-11 -2.349c-.6 .248 -1 .77 -1 1.349c0 .578 .4 1.101 1 1.349zm16.001 0v2.697c.599 -.248 .999 -.77 .999 -1.348s-.4 -1.1 -.999 -1.348m-5.001 -1.652h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 0 -2"
    })
  });
}));
