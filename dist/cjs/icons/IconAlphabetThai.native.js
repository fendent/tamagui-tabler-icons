"use strict";

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
var IconAlphabetThai_exports = {};
__export(IconAlphabetThai_exports, {
  IconAlphabetThai: () => IconAlphabetThai
});
module.exports = __toCommonJS(IconAlphabetThai_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconAlphabetThai = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
    var {
      color = "black",
      size = 24,
      ...otherProps
    } = props;
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
      ...otherProps,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M8 18v-3.444c0 -.49 .165 -.924 .494 -1.363c.326 -.449 1.009 -.76 1.506 -.934c.032 -.011 .035 -.079 .004 -.095c-.434 -.22 -1.294 -.52 -1.626 -1.032l-.014 -.021l-.083 -.125c-.281 -.42 -.281 -1.246 -.281 -1.246c0 -1.456 .849 -2.62 1.837 -3.199q .9 -.54 2.137 -.541q 1.077 0 1.995 .47c1.328 .647 2.031 2.202 2.031 3.976v7.554",
      stroke: color
    })
    });
  }));
