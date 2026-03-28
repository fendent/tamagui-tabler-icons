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
var IconListDetailsFilled_exports = {};
__export(IconListDetailsFilled_exports, {
  IconListDetailsFilled: () => IconListDetailsFilled
});
module.exports = __toCommonJS(IconListDetailsFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconListDetailsFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M22 5a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0 -2h8a1 1 0 0 1 1 1m-3 4a1 1 0 0 1 -1 1h-5a1 1 0 0 1 0 -2h5a1 1 0 0 1 1 1m3 6a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0 -2h8a1 1 0 0 1 1 1m-3 4a1 1 0 0 1 -1 1h-5a1 1 0 0 1 0 -2h5a1 1 0 0 1 1 1m-11 -16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l.001 -4.051l.004 -.051a1.996 1.996 0 0 1 1.995 -1.898zm0 10a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l.001 -4.051l.004 -.051a1.996 1.996 0 0 1 1.995 -1.898z"
    })
    });
  }));
