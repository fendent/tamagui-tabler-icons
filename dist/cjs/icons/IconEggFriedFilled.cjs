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
var IconEggFriedFilled_exports = {};
__export(IconEggFriedFilled_exports, {
  IconEggFriedFilled: () => IconEggFriedFilled
});
module.exports = __toCommonJS(IconEggFriedFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconEggFriedFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M14.001 1.996q .06 0 .117 .007l.155 .003a6 6 0 0 1 4.25 2.05l.176 .21a6 6 0 0 1 1.296 4.014l-.018 .244l.106 .06a4 4 0 0 1 1.904 3.087l.011 .204a4 4 0 0 1 -1.392 3.161l-.085 .069l.083 .16a4 4 0 0 1 .239 2.848l-.065 .204a4 4 0 0 1 -6.257 1.824l-.115 -.096l-.092 .1a6 6 0 0 1 -4.022 1.787l-.257 .006a6 6 0 0 1 -5.644 -8.04l.034 -.089l-.155 -.12a6 6 0 0 1 -1.662 -7.256l.105 -.211a6 6 0 0 1 7.246 -2.894l.188 .068l.073 -.06a6 6 0 0 1 3.505 -1.334zm-2.001 7.004a3 3 0 0 0 -2.996 2.85l-.004 .15a3 3 0 1 0 3 -3"
    })
  });
}));
