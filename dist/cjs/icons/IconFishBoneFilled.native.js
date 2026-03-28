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
var IconFishBoneFilled_exports = {};
__export(IconFishBoneFilled_exports, {
  IconFishBoneFilled: () => IconFishBoneFilled
});
module.exports = __toCommonJS(IconFishBoneFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconFishBoneFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M16.675 6.44l.118 .005a1 1 0 0 1 .232 .052l.032 .015l.273 .103c1.936 .771 3.69 2.27 5.253 4.476l.245 .355a1 1 0 0 1 0 1.12c-1.702 2.519 -3.636 4.176 -5.792 4.947a1 1 0 0 1 -1.093 -.288a7.97 7.97 0 0 1 -1.883 -4.225h-2.06v3a1 1 0 0 1 -2 0v-3h-2v1a1 1 0 0 1 -2 0v-1h-1.166l-.335 .324a39 39 0 0 0 -1.751 1.846a1 1 0 0 1 -1.496 -1.328q .593 -.667 1.214 -1.308l.522 -.528l-.523 -.529a42 42 0 0 1 -.613 -.648l-.6 -.661a1 1 0 1 1 1.496 -1.328a40 40 0 0 0 2.069 2.161l1.183 -.001v-1a1 1 0 1 1 2 0v1h2v-3a1 1 0 0 1 2 0v3h2.062a7.97 7.97 0 0 1 1.656 -3.953l.196 -.24l.075 -.081l.105 -.088l.068 -.048l.097 -.052l.069 -.03l.138 -.042l.091 -.017q .059 -.007 .118 -.009m1.325 3.56a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1"
    })
    });
  }));
