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
var IconMacroFilled_exports = {};
__export(IconMacroFilled_exports, {
  IconMacroFilled: () => IconMacroFilled
});
module.exports = __toCommonJS(IconMacroFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconMacroFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M17.994 2.888l.006 .112v3a6 6 0 0 1 -5 5.916v4.186a6.98 6.98 0 0 1 5 -2.102a1 1 0 0 1 1 1a7 7 0 0 1 -14 0a1 1 0 0 1 1 -1c1.96 0 3.731 .805 5.002 2.103l-.002 -4.186a6 6 0 0 1 -5 -5.917v-3a1 1 0 0 1 1.555 -.832l2.317 1.544l1.42 -1.42a1 1 0 0 1 1.32 -.082l.095 .083l1.42 1.419l2.318 -1.544a1 1 0 0 1 1.55 .72m-10.865 13.24l.03 .134a5.01 5.01 0 0 0 3.71 3.61a5 5 0 0 0 -3.74 -3.744m9.742 .002l-.134 .03a5.01 5.01 0 0 0 -3.61 3.71a5 5 0 0 0 3.744 -3.74"
    })
    });
  }));
