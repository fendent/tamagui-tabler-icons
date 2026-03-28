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
var IconSatelliteFilled_exports = {};
__export(IconSatelliteFilled_exports, {
  IconSatelliteFilled: () => IconSatelliteFilled
});
module.exports = __toCommonJS(IconSatelliteFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconSatelliteFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M21 14a1 1 0 0 1 1 1a7 7 0 0 1 -7 7a1 1 0 0 1 0 -2a5 5 0 0 0 5 -5a1 1 0 0 1 1 -1m-4 -.5a1 1 0 0 1 1 1a3.5 3.5 0 0 1 -3.5 3.5a1 1 0 0 1 -.117 -1.993l.117 -.007a1.5 1.5 0 0 0 1.493 -1.356l.007 -.144a1 1 0 0 1 1 -1m-13.829 -2.087l4 4.001q .212 .212 .445 .384l-.909 .91a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 0 -1.415zm5.243 -8.413l5.586 5.586a2 2 0 0 1 0 2.828l-.586 .585l.793 .794a1 1 0 0 1 -1.414 1.414l-.793 -.794l-.586 .587a2 2 0 0 1 -2.828 0l-5.586 -5.586a2 2 0 0 1 -.18 -2.618l.127 -.152l.053 -.058l2.586 -2.586a2 2 0 0 1 2.828 0m5.293 -.707l3 3a1 1 0 0 1 0 1.414l-.908 .91a4 4 0 0 0 -.384 -.445l-4.001 -4l.879 -.88a1 1 0 0 1 1.414 0"
    })
    });
  }));
