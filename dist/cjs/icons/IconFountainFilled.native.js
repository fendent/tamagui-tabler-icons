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
var IconFountainFilled_exports = {};
__export(IconFountainFilled_exports, {
  IconFountainFilled: () => IconFountainFilled
});
module.exports = __toCommonJS(IconFountainFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconFountainFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M15 2a4 4 0 0 1 4 4a1 1 0 0 1 -1.993 .117l-.007 -.117a2 2 0 0 0 -3.995 -.15l-.005 .15v9h1v-4a3 3 0 0 1 6 0a1 1 0 0 1 -1.993 .117l-.007 -.117a1 1 0 0 0 -1.993 -.117l-.007 .117v4h5a1 1 0 0 1 .993 .883l.007 .117v2a4 4 0 0 1 -3.8 3.995l-.2 .005h-12a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-2a1 1 0 0 1 .883 -.993l.117 -.007h5v-4a1 1 0 0 0 -1.993 -.117l-.007 .117a1 1 0 0 1 -2 0a3 3 0 0 1 5.995 -.176l.005 .176v4h1v-9a2 2 0 1 0 -4 0a1 1 0 1 1 -2 0a4 4 0 0 1 7.001 -2.645a3.983 3.983 0 0 1 2.999 -1.355z"
    })
    });
  }));
