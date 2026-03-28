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
var IconAlignBoxRightBottomFilled_exports = {};
__export(IconAlignBoxRightBottomFilled_exports, {
  IconAlignBoxRightBottomFilled: () => IconAlignBoxRightBottomFilled
});
module.exports = __toCommonJS(IconAlignBoxRightBottomFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconAlignBoxRightBottomFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-.333 15h-2l-.117 .007a1 1 0 0 0 .117 1.993h2l.117 -.007a1 1 0 0 0 -.117 -1.993zm0 -3h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993zm0 -3h-4l-.117 .007a1 1 0 0 0 .117 1.993h4l.117 -.007a1 1 0 0 0 -.117 -1.993z"
    })
    });
  }));
