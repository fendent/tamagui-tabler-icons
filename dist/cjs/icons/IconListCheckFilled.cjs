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
var IconListCheckFilled_exports = {};
__export(IconListCheckFilled_exports, {
  IconListCheckFilled: () => IconListCheckFilled
});
module.exports = __toCommonJS(IconListCheckFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconListCheckFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
  const {
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
      d: "M8.207 3.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M8.207 9.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M8.207 15.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M21 6a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M21 12a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M21 18a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1"
    })]
  });
}));
