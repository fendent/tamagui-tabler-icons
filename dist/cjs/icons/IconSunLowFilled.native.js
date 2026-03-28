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
var IconSunLowFilled_exports = {};
__export(IconSunLowFilled_exports, {
  IconSunLowFilled: () => IconSunLowFilled
});
module.exports = __toCommonJS(IconSunLowFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconSunLowFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M18.407 16.993l.01 .01a1 1 0 0 1 -1.32 1.497l-.104 -.093a1 1 0 0 1 1.414 -1.414m-11.4 0l.01 .01a1 1 0 0 1 -1.32 1.497l-.104 -.093a1 1 0 0 1 1.414 -1.414m4.993 -9.993a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783m-4.993 -1.407l.01 .01a1 1 0 0 1 -1.32 1.497l-.104 -.093a1 1 0 0 1 1.414 -1.414m11.4 0l.01 .01a1 1 0 0 1 -1.32 1.497l-.104 -.093a1 1 0 1 1 1.414 -1.414m-14.397 5.407a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm7.99 -8a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m8.01 8a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993zm-8.01 8a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1"
    })
    });
  }));
