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
var IconCaravanFilled_exports = {};
__export(IconCaravanFilled_exports, {
  IconCaravanFilled: () => IconCaravanFilled
});
module.exports = __toCommonJS(IconCaravanFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconCaravanFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M15.949 3.684l.771 2.316h1.28a3 3 0 0 1 3 3v6h1a1 1 0 0 1 0 2h-1.17a3 3 0 0 1 -2.83 2h-6.17a3.001 3.001 0 0 1 -5.66 0h-1.17a3 3 0 0 1 -3 -3v-3.5a6.5 6.5 0 0 1 5.672 -6.448l6.934 -2.971a1 1 0 0 1 1.343 .603m-6.949 13.316a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m5.5 -7h-1a1.5 1.5 0 0 0 -1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5 -1.5v-1a1.5 1.5 0 0 0 -1.5 -1.5m-.105 -4.653l-1.524 .653h1.742z"
    })
  });
}));
