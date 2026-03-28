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
var IconSaladFilled_exports = {};
__export(IconSaladFilled_exports, {
  IconSaladFilled: () => IconSaladFilled
});
module.exports = __toCommonJS(IconSaladFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconSaladFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M9.53 3.152l3.742 2.339q 1.492 -.491 3.472 -.491h2.256a1 1 0 0 1 1 1l-.001 1.336l-.05 .895l-.042 .585c-.037 .457 -.08 .84 -.134 1.185l.227 -.001a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2h.078a14 14 0 0 1 -.078 -1v-1a1 1 0 0 1 1 -1h1.755c.138 0 .287 .034 .44 .092l.835 -3.335a1 1 0 0 1 1.5 -.605m-2.193 5.847l-1.335 .001l.027 .42q .025 .292 .064 .58h.942q .078 -.533 .302 -1.001m10.663 -1.999h-1.256c-1.712 0 -3.003 .31 -3.922 .88a3.5 3.5 0 0 1 1.143 2.12h3.774c.127 -.615 .194 -1.4 .261 -2.714zm-7.5 2a1.5 1.5 0 0 0 -1.414 1h2.828a1.5 1.5 0 0 0 -.845 -.888l-.166 -.056a1.5 1.5 0 0 0 -.403 -.056m-.864 -3.424l-.415 1.665a3.5 3.5 0 0 1 1.502 -.234a6 6 0 0 1 .497 -.442z"
    })
  });
}));
