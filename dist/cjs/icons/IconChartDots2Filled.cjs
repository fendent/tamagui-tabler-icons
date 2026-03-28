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
var IconChartDots2Filled_exports = {};
__export(IconChartDots2Filled_exports, {
  IconChartDots2Filled: () => IconChartDots2Filled
});
module.exports = __toCommonJS(IconChartDots2Filled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconChartDots2Filled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
  const {
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
      d: "M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1m18.97 .757a1 1 0 0 1 -.727 1.213l-5.256 1.314a3 3 0 0 1 -.55 1.465l1.768 2.358a3.003 3.003 0 0 1 3.795 2.893a3 3 0 0 1 -5.436 1.751l-3.57 1.428a3 3 0 0 1 -5.994 -.179l.005 -.176a3 3 0 0 1 5.43 -1.576l3.57 -1.428l.015 -.17c.06 -.518 .253 -.996 .542 -1.4l-1.767 -2.357a3.003 3.003 0 0 1 -3.795 -2.893l.005 -.176a3 3 0 0 1 5.497 -1.48l5.255 -1.314a1 1 0 0 1 1.213 .727"
    })
  });
}));
