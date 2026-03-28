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
var IconHeartBrokenFilled_exports = {};
__export(IconHeartBrokenFilled_exports, {
  IconHeartBrokenFilled: () => IconHeartBrokenFilled
});
module.exports = __toCommonJS(IconHeartBrokenFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconHeartBrokenFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M11.001 3.8l-.001 1.963l-1.894 3.79l-.047 .11a1 1 0 0 0 .341 1.137l3.332 2.499l-1.626 3.254a1 1 0 0 0 -.106 .447v3.417l-7.197 -7.127a6 6 0 0 1 6.956 -9.621zm5.77 -.739l.246 .037a6 6 0 0 1 3.184 10.193l-.044 .037l-7.157 7.088v-3.181l1.894 -3.788l.047 -.11a1 1 0 0 0 -.341 -1.137l-3.333 -2.5l1.627 -3.253a1 1 0 0 0 .106 -.447v-2.187a6 6 0 0 1 3.77 -.752"
    })
  });
}));
