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
var IconBladeFilled_exports = {};
__export(IconBladeFilled_exports, {
  IconBladeFilled: () => IconBladeFilled
});
module.exports = __toCommonJS(IconBladeFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBladeFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M11.586 3a2 2 0 0 1 2.828 0l.586 .585l.586 -.585a2 2 0 0 1 2.7 -.117l.128 .117l2.586 2.586a2 2 0 0 1 0 2.828l-.586 .586l.586 .586a2 2 0 0 1 0 2.828l-8.586 8.586a2 2 0 0 1 -2.828 0l-.586 -.586l-.586 .586a2 2 0 0 1 -2.828 0l-2.586 -2.586a2 2 0 0 1 0 -2.828l.585 -.587l-.585 -.585a2 2 0 0 1 -.117 -2.7l.117 -.129zm3.027 4.21a1 1 0 0 0 -1.32 1.497l.292 .293l-1.068 1.067a2.003 2.003 0 0 0 -2.512 1.784l-.005 .149l.005 .15c.01 .125 .03 .248 .062 .367l-1.067 1.068l-.293 -.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l.292 .293l-.292 .293l-.083 .094a1 1 0 0 0 1.497 1.32l.293 -.292l.293 .292l.094 .083a1 1 0 0 0 1.32 -1.497l-.292 -.293l1.069 -1.067a2.003 2.003 0 0 0 2.449 -2.45l1.067 -1.068l.293 .292l.094 .083a1 1 0 0 0 1.32 -1.497l-.292 -.293l.292 -.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-.293 .292l-.293 -.292z"
    })
  });
}));
