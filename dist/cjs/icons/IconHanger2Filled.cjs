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
var IconHanger2Filled_exports = {};
__export(IconHanger2Filled_exports, {
  IconHanger2Filled: () => IconHanger2Filled
});
module.exports = __toCommonJS(IconHanger2Filled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconHanger2Filled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M12 2a3 3 0 0 1 3 3a1 1 0 0 1 -1.993 .117l-.007 -.117a1 1 0 0 0 -2 -.004c.006 1.516 .495 2.579 1.486 3.13l7.97 4.428a3 3 0 0 1 1.544 2.623v.823a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3a3 3 0 0 1 -3 -3v-.823a3 3 0 0 1 1.543 -2.623l6.695 -3.72c-.832 -.976 -1.232 -2.296 -1.238 -3.834a3 3 0 0 1 3 -3m0 8.144l-7.486 4.158a1 1 0 0 0 -.514 .875v.823a1 1 0 0 0 1 1h.17a3 3 0 0 1 2.83 -2h8c1.306 0 2.418 .835 2.83 2h.17a1 1 0 0 0 1 -1v-.823a1 1 0 0 0 -.515 -.875z"
    })
  });
}));
