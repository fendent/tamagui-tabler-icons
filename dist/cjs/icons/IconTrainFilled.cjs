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
var IconTrainFilled_exports = {};
__export(IconTrainFilled_exports, {
  IconTrainFilled: () => IconTrainFilled
});
module.exports = __toCommonJS(IconTrainFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconTrainFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M11 5c6.634 0 10.853 3.11 10.996 7.754l.004 .246a3 3 0 0 1 -3 3h-16a1 1 0 0 1 -1 -1v-9a1 1 0 0 1 1 -1zm-4 2h-3v3h3zm4 0h-2v3h3v-2.974a19 19 0 0 0 -1 -.026m3.001 .257l-.001 2.743h5.04c-.979 -1.337 -2.689 -2.306 -5.039 -2.743m6.999 10.743a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2z"
    })
  });
}));
