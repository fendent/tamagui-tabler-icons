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
var IconBrandHackerrank_exports = {};
__export(IconBrandHackerrank_exports, {
  IconBrandHackerrank: () => IconBrandHackerrank
});
module.exports = __toCommonJS(IconBrandHackerrank_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBrandHackerrank = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_react_native_svg.Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M19.484 5.667c-1.146 -.904 -3.35 -2.394 -6.497 -3.429c-.484 -.159 -.725 -.238 -1.04 -.238c-.314 0 -.556 .08 -1.04 .238c-3.147 1.035 -5.35 2.525 -6.496 3.43c-.402 .317 -.604 .476 -.797 .816c-.194 .341 -.233 .62 -.309 1.178a33 33 0 0 0 -.305 4.338c0 1.742 .165 3.317 .305 4.338c.076 .558 .115 .837 .309 1.178c.193 .34 .395 .5 .797 .817c1.146 .904 3.35 2.394 6.497 3.429c.483 .159 .725 .238 1.04 .238c.314 0 .555 -.08 1.04 -.238c3.146 -1.035 5.35 -2.525 6.496 -3.43c.402 -.317 .603 -.476 .797 -.816c.194 -.341 .232 -.62 .309 -1.178c.14 -1.021 .305 -2.596 .305 -4.338s-.165 -3.317 -.305 -4.338c-.077 -.558 -.115 -.837 -.309 -1.178s-.395 -.5 -.797 -.817",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M9 8v7",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M9 12h6",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M16 16h-2l1 1l1 -1",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M8 8h2l-1 -1l-1 1",
      stroke: color
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M15 9v7",
      stroke: color
    })]
  });
}));
