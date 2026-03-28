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
var IconAerialLiftFilled_exports = {};
__export(IconAerialLiftFilled_exports, {
  IconAerialLiftFilled: () => IconAerialLiftFilled
});
module.exports = __toCommonJS(IconAerialLiftFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconAerialLiftFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M19.876 2.008a1 1 0 1 1 .248 1.984l-7.124 .891v2.117h4.2a1 1 0 0 1 .688 .274l.087 .093c2.79 3.417 2.717 9.963 -.226 13.295a1 1 0 0 1 -.749 .338h-10.106a1 1 0 0 1 -.763 -.353c-2.86 -3.373 -2.86 -9.92 0 -13.294a1 1 0 0 1 .763 -.353h4.106v-1.867l-6.876 .86a1 1 0 0 1 -1.095 -.754l-.021 -.115a1 1 0 0 1 .868 -1.116l7.996 -1l.011 -.001l.008 -.001zm-8.876 6.992h-3.617l-.051 .072c-.718 1.042 -1.149 2.41 -1.292 3.844l-.008 .084h4.968zm5.698 0h-3.698v4h4.979l-.005 -.072c-.123 -1.436 -.533 -2.811 -1.232 -3.864z"
    })
  });
}));
