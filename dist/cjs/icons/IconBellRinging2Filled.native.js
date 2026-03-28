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
var IconBellRinging2Filled_exports = {};
__export(IconBellRinging2Filled_exports, {
  IconBellRinging2Filled: () => IconBellRinging2Filled
});
module.exports = __toCommonJS(IconBellRinging2Filled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconBellRinging2Filled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M9.63 17.531c.612 .611 .211 1.658 -.652 1.706a3.992 3.992 0 0 1 -3.05 -1.166a3.992 3.992 0 0 1 -1.165 -3.049c.046 -.826 1.005 -1.228 1.624 -.726l.082 .074l3.161 3.16z"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M20.071 3.929c.96 .96 1.134 2.41 .52 3.547l-.09 .153l-.024 .036a8.013 8.013 0 0 1 -1.446 7.137l-.183 .223l-.191 .218l-2.073 2.072l-.08 .112a3 3 0 0 0 -.499 2.113l.035 .201l.045 .185c.264 .952 -.853 1.645 -1.585 1.051l-.086 -.078l-11.313 -11.313c-.727 -.727 -.017 -1.945 .973 -1.671a3 3 0 0 0 2.5 -.418l.116 -.086l2.101 -2.1a8 8 0 0 1 7.265 -1.86l.278 .071l.037 -.023a3.003 3.003 0 0 1 3.432 .192l.14 .117l.128 .12z"
    })]
    });
  }));
