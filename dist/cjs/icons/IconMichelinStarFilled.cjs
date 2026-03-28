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
var IconMichelinStarFilled_exports = {};
__export(IconMichelinStarFilled_exports, {
  IconMichelinStarFilled: () => IconMichelinStarFilled
});
module.exports = __toCommonJS(IconMichelinStarFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconMichelinStarFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M11.81 2c2.018 0 3.478 1.232 3.874 3.129l.016 .089l.172 -.057c.34 -.104 .684 -.16 1.055 -.175l.227 -.005c2.09 0 3.925 1.93 3.925 4.094c0 1.095 -.51 2.087 -1.364 2.835l-.118 .098l.06 .048c.88 .737 1.36 1.605 1.416 2.656l.006 .213c0 2.24 -1.739 4.094 -3.925 4.094c-.445 0 -.923 -.084 -1.374 -.233l-.043 .193c-.395 1.736 -1.806 2.933 -3.662 3.016l-.208 .005c-2.018 0 -3.477 -1.232 -3.873 -3.13l-.03 -.161l-.011 .006a4.1 4.1 0 0 1 -1.26 .243l-.226 .005c-2.09 0 -3.925 -1.93 -3.925 -4.094c0 -1.096 .51 -2.087 1.378 -2.84l.073 -.062l-.03 -.023c-.88 -.737 -1.359 -1.605 -1.415 -2.656l-.006 -.213c0 -2.239 1.74 -4.094 3.925 -4.094c.44 0 .92 .098 1.391 .27l.036 .013l.008 -.048c.331 -1.84 1.776 -3.125 3.7 -3.211z"
    })
  });
}));
