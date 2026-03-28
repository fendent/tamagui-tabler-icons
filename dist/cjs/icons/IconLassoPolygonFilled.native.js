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
var IconLassoPolygonFilled_exports = {};
__export(IconLassoPolygonFilled_exports, {
  IconLassoPolygonFilled: () => IconLassoPolygonFilled
});
module.exports = __toCommonJS(IconLassoPolygonFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconLassoPolygonFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M5.581 2.186l6.566 4.69l7.502 -2.812a1 1 0 0 1 1.326 .714l.019 .112l1 9a1 1 0 0 1 -.678 1.059l-9 3a1 1 0 0 1 -.553 .023l-4.434 -1.082a3 3 0 0 1 -1.287 .923c.095 .986 .374 1.9 .826 2.69a1 1 0 0 1 -1.736 .993c-.624 -1.09 -.99 -2.335 -1.098 -3.656a3 3 0 0 1 -2.034 -2.84l.005 -.176a3 3 0 0 1 .86 -1.932l-.818 -2.59a1 1 0 0 1 -.009 -.577l2 -7a1 1 0 0 1 1.543 -.539m-.009 2.451l-1.528 5.348l.642 2.031q .155 -.016 .314 -.016a3 3 0 0 1 3 2.995l3.957 .965l7.96 -2.654l-.769 -6.919l-6.797 2.55a1 1 0 0 1 -.827 -.058l-.105 -.065z"
    })
    });
  }));
