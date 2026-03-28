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
var IconToolsKitchen2Filled_exports = {};
__export(IconToolsKitchen2Filled_exports, {
  IconToolsKitchen2Filled: () => IconToolsKitchen2Filled
});
module.exports = __toCommonJS(IconToolsKitchen2Filled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconToolsKitchen2Filled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M18.94 2.002l.1 -.001l.096 .008l.095 .018l.094 .027l.092 .037l.086 .045l.08 .052l.076 .06l.076 .074l.06 .072l.03 .04l.051 .084l.043 .088l.034 .091l.025 .094l.02 .15l.002 18.059a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1v-1h-4a1 1 0 0 1 -1 -.994c-.033 -5.323 .97 -8.482 5.005 -12.434l.317 -.307l.072 -.06l.04 -.03l.084 -.051l.088 -.043l.091 -.034l.094 -.025zm-7.94 .998a1 1 0 0 1 1 1v3a4 4 0 0 1 -3 3.874v10.126a1 1 0 0 1 -2 0v-10.126a4 4 0 0 1 -3 -3.874v-3a1 1 0 1 1 2 0v3a2 2 0 0 0 1 1.732v-4.732a1 1 0 1 1 2 0l.001 4.732a2 2 0 0 0 .999 -1.732v-3a1 1 0 0 1 1 -1"
    })
  });
}));
