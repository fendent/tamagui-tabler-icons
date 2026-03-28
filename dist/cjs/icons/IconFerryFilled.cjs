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
var IconFerryFilled_exports = {};
__export(IconFerryFilled_exports, {
  IconFerryFilled: () => IconFerryFilled
});
module.exports = __toCommonJS(IconFerryFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconFerryFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M22 12a1 1 0 0 1 .86 1.51l-2.202 3.709a4.06 4.06 0 0 1 -3.365 1.781h-15.293a1 1 0 0 1 -.957 -1.291l1.521 -5a1 1 0 0 1 .957 -.709zm-3 1a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-5.106 -7.447l.723 1.447h.874a1 1 0 0 1 .864 .497l2.037 3.503h-12.832l.973 -3.284a1 1 0 0 1 .958 -.716h4.89l-.275 -.553a1 1 0 0 1 1.788 -.894"
    })
  });
}));
