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
var IconFidgetSpinnerFilled_exports = {};
__export(IconFidgetSpinnerFilled_exports, {
  IconFidgetSpinnerFilled: () => IconFidgetSpinnerFilled
});
module.exports = __toCommonJS(IconFidgetSpinnerFilled_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  IconFidgetSpinnerFilled = (0, import_helpers_icon.themed)(/* @__PURE__ */(0, import_react.memo)(function (props) {
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
      d: "M12 0a5 5 0 0 1 3.584 8.488l-.012 .012a5 5 0 0 1 1.33 2.517l.018 .101l.251 -.048q .15 -.025 .3 -.041l.304 -.024l.225 -.005a5 5 0 1 1 -4.89 6.046l-.032 -.164l-.24 .048a5 5 0 0 1 -.556 .062l-.282 .008q -.427 0 -.84 -.07l-.239 -.048l-.004 .025a5 5 0 0 1 -3.331 3.834l-.22 .068a5 5 0 1 1 -.461 -9.728l.173 .036l.019 -.102c.19 -.95 .653 -1.824 1.331 -2.516l-.05 -.052a5.02 5.02 0 0 1 -1.355 -2.978l-.018 -.244l-.005 -.225a5 5 0 0 1 5 -5m6 15a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m-12 0a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m6 -4.995c-1.1 0 -1.99 .891 -1.99 1.99v.02a1.99 1.99 0 0 0 3.98 0v-.02a1.99 1.99 0 0 0 -1.99 -1.99m0 -6.005a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1"
    })
    });
  }));
