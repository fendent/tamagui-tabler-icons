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
var IconTrolleyFilled_exports = {};
__export(IconTrolleyFilled_exports, {
  IconTrolleyFilled: () => IconTrolleyFilled
});
module.exports = __toCommonJS(IconTrolleyFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconTrolleyFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M20.555 4.168a1 1 0 0 1 .277 1.387l-2.621 3.932l1.236 .619a1 1 0 0 1 -.894 1.788l-1.46 -.73l-3.876 5.815a3 3 0 1 1 -5.217 2.021l.005 -.176q .008 -.135 .027 -.267l-2.587 -1.725a1 1 0 0 1 1.11 -1.664l2.424 1.615a2.99 2.99 0 0 1 2.464 -.75l7.725 -11.588a1 1 0 0 1 1.387 -.277m-10.567 -.399l.14 .082l3.307 2.104a2.3 2.3 0 0 1 .7 3.185l-3.094 4.81a2.3 2.3 0 0 1 -3.17 .698l-3.306 -2.104a2.3 2.3 0 0 1 -.7 -3.185l3.094 -4.81a2.3 2.3 0 0 1 3.029 -.78"
    })
    });
  }));
