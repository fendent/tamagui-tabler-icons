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
var IconExchangeFilled_exports = {};
__export(IconExchangeFilled_exports, {
  IconExchangeFilled: () => IconExchangeFilled
});
module.exports = __toCommonJS(IconExchangeFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconExchangeFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M19 3a3 3 0 0 1 1 5.83v4.17a6 6 0 0 1 -6 6h-.585l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-2.959 -2.959a1 1 0 0 1 -.238 -.32l-.038 -.091l-.028 -.094a.98 .98 0 0 1 .187 -.866l.076 -.084l3 -3a1 1 0 0 1 1.414 1.414l-1.293 1.293h.586a4 4 0 0 0 3.995 -3.8l.005 -.2v-4.171a3 3 0 0 1 -2 -2.829l.005 -.176a3 3 0 0 1 2.995 -2.824m-8.293 -.707l3 3a.98 .98 0 0 1 .263 .95l-.01 .031l-.003 .018l-.008 .018l-.007 .027l-.016 .035l-.01 .032l-.007 .01l-.005 .014a1 1 0 0 1 -.232 .316l-2.965 2.963a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414l1.291 -1.293h-.584a4 4 0 0 0 -3.995 3.8l-.005 .2v4.171a3.001 3.001 0 1 1 -4 2.829l.005 -.176a3 3 0 0 1 1.995 -2.654v-4.17a6 6 0 0 1 6 -6h.585l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0"
    })
    });
  }));
