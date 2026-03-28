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
var IconBrandZalando_exports = {};
__export(IconBrandZalando_exports, {
  IconBrandZalando: () => IconBrandZalando
});
module.exports = __toCommonJS(IconBrandZalando_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBrandZalando = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M7.531 21c-.65 0 -1 -.15 -1.196 -.27c-.266 -.157 -.753 -.563 -1.197 -1.747a20.583 20.583 0 0 1 -1.137 -6.983c.015 -2.745 .436 -5.07 1.137 -6.975c.444 -1.2 .93 -1.605 1.197 -1.763c.192 -.103 .545 -.262 1.195 -.262c.244 0 .532 .022 .871 .075a19.093 19.093 0 0 1 6.425 2.475h.007a19.572 19.572 0 0 1 5.287 4.508c.783 .99 .879 1.627 .879 1.942c0 .315 -.096 .953 -.879 1.943a19.571 19.571 0 0 1 -5.287 4.5h-.007a19.041 19.041 0 0 1 -6.425 2.474a5.01 5.01 0 0 1 -.871 .083",
      stroke: color
    })
  });
}));
