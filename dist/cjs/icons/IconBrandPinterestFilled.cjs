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
var IconBrandPinterestFilled_exports = {};
__export(IconBrandPinterestFilled_exports, {
  IconBrandPinterestFilled: () => IconBrandPinterestFilled
});
module.exports = __toCommonJS(IconBrandPinterestFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBrandPinterestFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M17 3.34a10 10 0 0 1 -8.512 18.023l2.364 -5.315a3.5 3.5 0 0 0 2.398 .952c2.708 0 4.75 -2.089 4.75 -5a6 6 0 1 0 -11.64 2.041a1 1 0 1 0 1.88 -.682a4 4 0 1 1 7.76 -1.36c0 1.818 -1.156 3.001 -2.75 3.001c-.609 0 -1.153 -.361 -1.478 -1.022l1.142 -2.572a1 1 0 0 0 -1.828 -.812l-4.392 9.882a10 10 0 0 1 -4.694 -8.476l.005 -.324a10 10 0 0 1 14.995 -8.336"
    })
  });
}));
