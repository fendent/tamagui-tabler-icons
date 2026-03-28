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
var IconHeadsetFilled_exports = {};
__export(IconHeadsetFilled_exports, {
  IconHeadsetFilled: () => IconHeadsetFilled
});
module.exports = __toCommonJS(IconHeadsetFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconHeadsetFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M12 2a9 9 0 0 1 9 9v6a3 3 0 0 1 -2.152 2.879c-.678 1.901 -3.538 3.121 -6.848 3.121a1 1 0 0 1 0 -2c1.889 0 3.482 -.482 4.334 -1.075a3 3 0 0 1 -2.334 -2.925l.001 -3.051l.004 -.051a2.995 2.995 0 0 1 2.995 -2.898h1c.351 0 .688 .06 1 .171v-.171a7 7 0 0 0 -13.996 -.24l-.004 .41c.313 -.11 .65 -.17 1 -.17h1a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3h-1a3 3 0 0 1 -3 -3v-6a9 9 0 0 1 9 -9"
    })
    });
  }));
