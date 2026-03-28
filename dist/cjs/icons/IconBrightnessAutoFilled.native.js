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
var IconBrightnessAutoFilled_exports = {};
__export(IconBrightnessAutoFilled_exports, {
  IconBrightnessAutoFilled: () => IconBrightnessAutoFilled
});
module.exports = __toCommonJS(IconBrightnessAutoFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconBrightnessAutoFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M12.707 2.793l2.208 2.207h3.085a1 1 0 0 1 .993 .883l.007 .117v3.085l2.207 2.208a1 1 0 0 1 .083 1.32l-.083 .094l-2.207 2.207v3.086a1 1 0 0 1 -.883 .993l-.117 .007h-3.086l-2.207 2.207a1 1 0 0 1 -1.32 .083l-.094 -.083l-2.208 -2.207h-3.085a1 1 0 0 1 -.993 -.883l-.007 -.117v-3.085l-2.207 -2.208a1 1 0 0 1 -.083 -1.32l.083 -.094l2.207 -2.209v-3.084a1 1 0 0 1 .883 -.993l.117 -.007h3.084l2.209 -2.207a1 1 0 0 1 1.414 0m-.707 5.207a3 3 0 0 0 -3 3v3.5a1 1 0 0 0 2 0v-.5h2v.5a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-3.5a3 3 0 0 0 -3 -3m0 2a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 .883 -.993z"
    })
    });
  }));
