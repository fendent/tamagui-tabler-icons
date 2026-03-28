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
var IconAdCircleFilled_exports = {};
__export(IconAdCircleFilled_exports, {
  IconAdCircleFilled: () => IconAdCircleFilled
});
module.exports = __toCommonJS(IconAdCircleFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconAdCircleFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10c-5.43 0 -9.848 -4.327 -9.996 -9.72l-.004 -.28l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm-3.5 6a2.5 2.5 0 0 0 -2.495 2.336l-.005 .164v4.5l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-1h1v1l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4.5l-.005 -.164a2.5 2.5 0 0 0 -2.495 -2.336zm6.5 0h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3zm0 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007v-4zm-6.5 0a.5 .5 0 0 1 .492 .41l.008 .09v1.5h-1v-1.5l.008 -.09a.5 .5 0 0 1 .492 -.41z"
    })
    });
  }));
