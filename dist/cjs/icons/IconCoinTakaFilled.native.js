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
var IconCoinTakaFilled_exports = {};
__export(IconCoinTakaFilled_exports, {
  IconCoinTakaFilled: () => IconCoinTakaFilled
});
module.exports = __toCommonJS(IconCoinTakaFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconCoinTakaFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
    var {
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
      d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.211 4.384a2 2 0 0 0 -2.683 -.895l-.553 .277a1 1 0 0 0 .894 1.788l.553 -.276l-.001 1.382h-.999a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h.999l.001 3a3 3 0 0 0 2.824 2.995l.176 .005h.5a3.5 3.5 0 0 0 3.5 -3.5v-.5a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .876 .876l.032 .002l-.02 .057a1.5 1.5 0 0 1 -1.395 .948h-.5a1 1 0 0 1 -1 -1l-.001 -3h4.001a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-4.001l.001 -1.382a2 2 0 0 0 -.136 -.725l-.075 -.17z"
    })
    });
  }));
