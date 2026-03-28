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
var IconCarCraneFilled_exports = {};
__export(IconCarCraneFilled_exports, {
  IconCarCraneFilled: () => IconCarCraneFilled
});
module.exports = __toCommonJS(IconCarCraneFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconCarCraneFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M3.06 5.66l.035 -.085l.07 -.125l.033 -.048l.063 -.075l.064 -.065l.098 -.079l.106 -.065l.067 -.033l.048 -.02l.139 -.041l18.053 -3.01a1 1 0 0 1 1.164 .986v2a1 1 0 0 1 -2 0v-.82l-13.802 2.3l1.25 .626a1 1 0 0 1 .552 .894l-.001 3h2.001v-4a1 1 0 0 1 1 -1h4a6 6 0 0 1 6 6v5a1 1 0 0 1 -1 1h-1.17a3.001 3.001 0 0 1 -5.66 0h-6.34a3.001 3.001 0 0 1 -5.83 -1v-5a1 1 0 0 1 1 -1v-4.99a1 1 0 0 1 .06 -.35m1.94 10.34a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m12 0a1 1 0 1 0 .992 1.124l.008 -.132l-.007 -.109a1 1 0 0 0 -.993 -.883m-.652 -7.985l.895 2.985h2.63l-.042 -.155a4 4 0 0 0 -3.223 -2.8z"
    })
  });
}));
