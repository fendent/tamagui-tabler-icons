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
var IconBrandTopbuzz_exports = {};
__export(IconBrandTopbuzz_exports, {
  IconBrandTopbuzz: () => IconBrandTopbuzz
});
module.exports = __toCommonJS(IconBrandTopbuzz_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBrandTopbuzz = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M4.417 8.655a.524 .524 0 0 1 -.405 -.622l.986 -4.617a.524 .524 0 0 1 .626 -.404l14.958 3.162c.285 .06 .467 .339 .406 .622l-.987 4.618a.524 .524 0 0 1 -.625 .404l-4.345 -.92c-.198 -.04 -.315 .024 -.353 .197l-2.028 9.49a.527 .527 0 0 1 -.625 .404l-4.642 -.982a.527 .527 0 0 1 -.406 -.622l2.028 -9.493c.037 -.17 -.031 -.274 -.204 -.31l-4.384 -.927",
      stroke: color
    })
  });
}));
