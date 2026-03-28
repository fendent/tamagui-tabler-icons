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
var IconBounceLeftFilled_exports = {};
__export(IconBounceLeftFilled_exports, {
  IconBounceLeftFilled: () => IconBounceLeftFilled
});
module.exports = __toCommonJS(IconBounceLeftFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBounceLeftFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_react_native_svg.Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M8.486 11.143a1 1 0 0 1 1.371 .343c1.045 1.74 1.83 3.443 2.392 5.237l.172 .581l.092 -.13c2.093 -2.921 4.48 -3.653 7.565 -2.7l.238 .077a1 1 0 1 1 -.632 1.898c-2.932 -.978 -4.73 -.122 -6.79 3.998c-.433 .866 -1.721 .673 -1.88 -.283c-.46 -2.76 -1.369 -5.145 -2.871 -7.65a1 1 0 0 1 .343 -1.371z"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M6 4a3 3 0 1 0 0 6a3 3 0 0 0 0 -6"
    })]
  });
}));
