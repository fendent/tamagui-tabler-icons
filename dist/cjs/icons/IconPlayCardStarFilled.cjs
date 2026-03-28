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
var IconPlayCardStarFilled_exports = {};
__export(IconPlayCardStarFilled_exports, {
  IconPlayCardStarFilled: () => IconPlayCardStarFilled
});
module.exports = __toCommonJS(IconPlayCardStarFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconPlayCardStarFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-4.98 -9.5l-.115 .005c-.384 .04 -.724 .273 -.898 .623l-.51 1.027l-1.138 .166c-.423 .059 -.78 .357 -.914 .768l-.033 .125a1.13 1.13 0 0 0 .322 1.039l.82 .797l-.194 1.127c-.07 .432 .107 .857 .454 1.108l.107 .068a1.13 1.13 0 0 0 1.078 .018l1.022 -.536l1.019 .535c.377 .2 .84 .168 1.19 -.086l.1 -.08c.281 -.259 .416 -.645 .35 -1.028l-.194 -1.126l.823 -.799c.31 -.302 .42 -.752 .287 -1.161l-.042 -.11a1.13 1.13 0 0 0 -.873 -.659l-1.138 -.166l-.508 -1.026a1.13 1.13 0 0 0 -1.014 -.63m-5.021 -4.499h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2"
    })
  });
}));
