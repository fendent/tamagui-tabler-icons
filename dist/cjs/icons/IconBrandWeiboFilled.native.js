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
var IconBrandWeiboFilled_exports = {};
__export(IconBrandWeiboFilled_exports, {
  IconBrandWeiboFilled: () => IconBrandWeiboFilled
});
module.exports = __toCommonJS(IconBrandWeiboFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconBrandWeiboFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M4.972 8.183c2.81 -2.987 6.162 -4.207 8.006 -2.24c.298 .316 .554 .773 .736 1.266l.127 -.031c2.064 -.469 4 1.287 3.817 3.544l-.005 .036l.15 .057c1.46 .574 2.14 1.355 2.193 3.081l.004 .231c0 3.776 -4.107 6.873 -9 6.873c-4.854 0 -9 -2.72 -9 -6.565c0 -2.04 1.068 -4.222 2.972 -6.252"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M16 3a6 6 0 0 1 6 6v1a1 1 0 0 1 -2 0v-1a4 4 0 0 0 -4 -4h-1a1 1 0 0 1 0 -2z"
    })]
    });
  }));
