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
var IconEaseOutControlPointFilled_exports = {};
__export(IconEaseOutControlPointFilled_exports, {
  IconEaseOutControlPointFilled: () => IconEaseOutControlPointFilled
});
module.exports = __toCommonJS(IconEaseOutControlPointFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconEaseOutControlPointFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M21 4a1 1 0 0 1 0 2c-1.097 0 -2.317 .361 -3.64 1.068c-2.373 1.265 -4.958 3.562 -7.607 6.59a68 68 0 0 0 -4.25 5.42a69 69 0 0 0 -1.003 1.456l-.455 .69q -.132 .204 -.196 .306a1 1 0 1 1 -1.696 -1.06l.286 -.445l.173 -.264a73 73 0 0 1 1.26 -1.839a70 70 0 0 1 4.376 -5.58c2.795 -3.195 5.544 -5.638 8.171 -7.04c1.592 -.848 3.122 -1.302 4.581 -1.302m-16 -2c1.306 0 2.418 .835 2.83 2h1.17a1 1 0 1 1 0 2h-1.171a3.001 3.001 0 1 1 -2.829 -4"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M14 4a1 1 0 0 1 0 2h-2a1 1 0 0 1 0 -2z"
    })]
    });
  }));
