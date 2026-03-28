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
var IconClickFilled_exports = {};
__export(IconClickFilled_exports, {
  IconClickFilled: () => IconClickFilled
});
module.exports = __toCommonJS(IconClickFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconClickFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M7 12a1 1 0 0 1 -1 1h-3a1 1 0 0 1 0 -2h3a1 1 0 0 1 1 1m6 -9v3a1 1 0 0 1 -2 0v-3a1 1 0 0 1 2 0m-6.693 1.893l2.2 2.2a1 1 0 0 1 -1.414 1.414l-2.2 -2.2a1 1 0 0 1 1.414 -1.414m12.8 0a1 1 0 0 1 0 1.414l-2.2 2.2a1 1 0 0 1 -1.414 -1.414l2.2 -2.2a1 1 0 0 1 1.414 0m-10.6 10.6a1 1 0 0 1 0 1.414l-2.2 2.2a1 1 0 1 1 -1.414 -1.414l2.2 -2.2a1 1 0 0 1 1.414 0m3.42 -4.49l.049 -.003l.098 .003l.097 .012l.097 .022l9.048 3.014c.845 .282 .928 1.445 .131 1.843l-3.702 1.851l-1.85 3.702c-.399 .797 -1.562 .714 -1.844 -.13l-3.003 -9.011l-.033 -.135l-.012 -.097v-.148l.012 -.097l.022 -.097l.03 -.094l.04 -.09l.05 -.084l.086 -.117l.067 -.07l.037 -.034l.076 -.06l.081 -.052l.087 -.043l.103 -.04l.135 -.033z"
    })
  });
}));
