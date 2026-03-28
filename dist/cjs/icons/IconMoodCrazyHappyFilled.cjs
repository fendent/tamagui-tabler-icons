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
var IconMoodCrazyHappyFilled_exports = {};
__export(IconMoodCrazyHappyFilled_exports, {
  IconMoodCrazyHappyFilled: () => IconMoodCrazyHappyFilled
});
module.exports = __toCommonJS(IconMoodCrazyHappyFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconMoodCrazyHappyFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-1.8 10.946a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-7.493 -6.493a1 1 0 0 0 -1.414 1.414l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l.793 -.792l.793 .792a1 1 0 1 0 1.414 -1.414l-.792 -.793l.792 -.793a1 1 0 1 0 -1.414 -1.414l-.793 .792zm7 0a1 1 0 0 0 -1.414 1.414l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l.793 -.792l.793 .792a1 1 0 0 0 1.414 -1.414l-.792 -.793l.792 -.793a1 1 0 1 0 -1.414 -1.414l-.793 .792z"
    })
  });
}));
