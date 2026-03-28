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
var IconPacmanFilled_exports = {};
__export(IconPacmanFilled_exports, {
  IconPacmanFilled: () => IconPacmanFilled
});
module.exports = __toCommonJS(IconPacmanFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconPacmanFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M13.557 2.015a10 10 0 0 1 7.257 3.744a1 1 0 0 1 -.074 1.331l-4.912 4.91l4.912 4.91a1 1 0 0 1 .074 1.332a10 10 0 1 1 -15.112 -13.078l.235 -.242l.07 -.063a9.98 9.98 0 0 1 7.55 -2.844m-1.057 3.485c-1.02 0 -1.86 .762 -1.982 1.748l-.013 .15a1 1 0 0 0 -.005 .102a2 2 0 1 0 2 -2"
    })
  });
}));
