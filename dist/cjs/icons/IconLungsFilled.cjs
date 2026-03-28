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
var IconLungsFilled_exports = {};
__export(IconLungsFilled_exports, {
  IconLungsFilled: () => IconLungsFilled
});
module.exports = __toCommonJS(IconLungsFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconLungsFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M12 3a1 1 0 0 1 1 1v5a2 2 0 0 0 1 1.732v-3.475c0 -1.242 .995 -2.257 2.233 -2.257c.372 0 .738 .094 1.122 .307l.18 .117c1.695 1.23 2.76 3.035 3.773 6.34q .674 2.204 .692 5.06c.016 2.195 -1.657 4.024 -3.843 4.168l-.237 .008c-2.17 0 -3.92 -1.787 -3.92 -3.98v-4.146a4 4 0 0 1 -1.893 -1.112l-.107 -.118l-.107 .118a4 4 0 0 1 -1.892 1.112l-.001 4.146c0 2.193 -1.75 3.98 -3.919 3.98l-.268 -.01c-2.155 -.142 -3.827 -1.971 -3.811 -4.165q .018 -2.858 .692 -5.06c1.011 -3.307 2.076 -5.112 3.822 -6.375l.188 -.117a2.2 2.2 0 0 1 1.064 -.273c1.237 0 2.232 1.015 2.232 2.257l.001 3.475a2 2 0 0 0 .999 -1.732v-5a1 1 0 0 1 1 -1"
    })
  });
}));
