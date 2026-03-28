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
var IconZoomOutAreaFilled_exports = {};
__export(IconZoomOutAreaFilled_exports, {
  IconZoomOutAreaFilled: () => IconZoomOutAreaFilled
});
module.exports = __toCommonJS(IconZoomOutAreaFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconZoomOutAreaFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1 -1.414 1.414l-2.817 -2.816a6 6 0 0 1 -9.476 -4.891l.004 -.225a6 6 0 0 1 5.996 -5.775m2 5h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m-14 0a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2h-1a3 3 0 0 1 -3 -3v-1a1 1 0 0 1 1 -1m0 -5a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1 -1m3 -7a1 1 0 1 1 0 2h-1a1 1 0 0 0 -1 1v1a1 1 0 1 1 -2 0v-1a3 3 0 0 1 3 -3zm5 0a1 1 0 0 1 0 2h-1a1 1 0 1 1 0 -2zm5 0a3 3 0 0 1 3 3v1a1 1 0 0 1 -2 0v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 0 -2z"
    })
    });
  }));
