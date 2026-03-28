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
var IconTransitionLeftFilled_exports = {};
__export(IconTransitionLeftFilled_exports, {
  IconTransitionLeftFilled: () => IconTransitionLeftFilled
});
module.exports = __toCommonJS(IconTransitionLeftFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconTransitionLeftFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M6 2a1 1 0 1 1 0 2a2 2 0 0 0 -2 2v12a2 2 0 0 0 1.85 1.995l.15 .005a1 1 0 0 1 0 2a4 4 0 0 1 -4 -4v-12a4 4 0 0 1 4 -4m12 0a4 4 0 0 1 4 4v12a4 4 0 1 1 -8 0v-5h-4.585l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-3 -3l-.097 -.112l-.071 -.11l-.031 -.062l-.034 -.081l-.024 -.076l-.025 -.118l-.007 -.058l-.004 -.108l.003 -.064l.017 -.119l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09l3 -3a1 1 0 0 1 1.414 1.414l-1.292 1.293h4.585v-5a4 4 0 0 1 4 -4"
    })
    });
  }));
