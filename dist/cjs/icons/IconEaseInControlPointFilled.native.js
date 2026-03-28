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
var IconEaseInControlPointFilled_exports = {};
__export(IconEaseInControlPointFilled_exports, {
  IconEaseInControlPointFilled: () => IconEaseInControlPointFilled
});
module.exports = __toCommonJS(IconEaseInControlPointFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconEaseInControlPointFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M19 16a3 3 0 1 1 -2.829 4h-1.171a1 1 0 0 1 0 -2h1.17a3 3 0 0 1 2.83 -2m2.53 -13.848a1 1 0 0 1 .318 1.378l-.286 .445l-.173 .264a73 73 0 0 1 -1.26 1.839a70 70 0 0 1 -4.376 5.58c-2.795 3.195 -5.544 5.638 -8.171 7.04c-1.593 .848 -3.123 1.302 -4.582 1.302a1 1 0 0 1 0 -2c1.097 0 2.317 -.361 3.64 -1.068c2.373 -1.265 4.958 -3.562 7.607 -6.59a68 68 0 0 0 4.25 -5.42a69 69 0 0 0 1.003 -1.456l.455 -.69q .133 -.204 .196 -.306a1 1 0 0 1 1.378 -.318m-9.529 15.848a1 1 0 0 1 0 2h-2a1 1 0 0 1 0 -2z"
    })
    });
  }));
