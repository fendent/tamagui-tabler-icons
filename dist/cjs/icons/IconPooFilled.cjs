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
var IconPooFilled_exports = {};
__export(IconPooFilled_exports, {
  IconPooFilled: () => IconPooFilled
});
module.exports = __toCommonJS(IconPooFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconPooFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M11.063 2.995l.086 .009h.07c2.237 .098 3.87 1.686 4.214 4.046l.01 .075l.133 .04a3.5 3.5 0 0 1 1.718 1.22l.125 .179a3.5 3.5 0 0 1 .567 2.243l-.006 .049l.032 .025a4 4 0 0 1 1.476 2.8l.01 .191l.15 .125a4 4 0 0 1 1.29 3.693l-.042 .208c-.4 1.728 -1.89 2.986 -3.72 3.092h-10.176a4 4 0 0 1 -2.638 -7.008l.14 -.118l.011 -.19a4 4 0 0 1 1.476 -2.798l.032 -.025l-.006 -.048a3.5 3.5 0 0 1 .452 -2.058l.114 -.186c.603 -.912 1.598 -1.49 2.755 -1.564h.164c.743 0 1.26 -1.242 .606 -2.553l.006 .015l-.01 -.017a1 1 0 0 1 -.095 -.323l-.007 -.117c0 -.654 .539 -1.031 1.063 -1.005m3.758 12.434a1 1 0 0 0 -1.392 -.25a2.5 2.5 0 0 1 -2.858 0a1 1 0 0 0 -1.142 1.642a4.5 4.5 0 0 0 5.142 0a1 1 0 0 0 .25 -1.392m-4.811 -4.429h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m4 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2"
    })
  });
}));
