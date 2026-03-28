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
var IconButterflyFilled_exports = {};
__export(IconButterflyFilled_exports, {
  IconButterflyFilled: () => IconButterflyFilled
});
module.exports = __toCommonJS(IconButterflyFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconButterflyFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
    var {
      color = "black",
      size = 24,
      ...otherProps
    } = props;
    return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_react_native_svg.Svg, {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      ...otherProps,
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M17.117 6.244l.228 .076a5.5 5.5 0 0 1 1.24 9.738l-.063 .039l.02 .034a4 4 0 0 1 .101 3.533l-.093 .19a4 4 0 0 1 -5.55 1.608v-14.857a5.5 5.5 0 0 1 4.118 -.36"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M8.505 6c.885 0 1.736 .21 2.495 .597v14.87a4 4 0 0 1 -1.012 .41l-.196 .045a4 4 0 0 1 -4.424 -5.587l.118 -.238l-.035 -.023a5.5 5.5 0 0 1 -2.397 -5.258l.034 -.233a5.5 5.5 0 0 1 5.417 -4.583"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M14.445 2.168a1 1 0 0 1 1.11 1.664l-3 2a1 1 0 0 1 -1.11 0l-3 -2a1 1 0 0 1 1.11 -1.664l2.444 1.63z"
    })]
    });
  }));
