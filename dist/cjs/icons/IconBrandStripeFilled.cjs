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
var IconBrandStripeFilled_exports = {};
__export(IconBrandStripeFilled_exports, {
  IconBrandStripeFilled: () => IconBrandStripeFilled
});
module.exports = __toCommonJS(IconBrandStripeFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBrandStripeFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M12.5 2c2.45 0 4.543 .44 5.928 1.096a1 1 0 0 1 .564 1.028l-.5 4a1 1 0 0 1 -1.429 .776c-1.047 -.509 -2.618 -.823 -4.168 -.823q -.206 .001 -.332 .026l.028 .024l.07 .047c.314 .207 .832 .437 1.672 .746c3.824 1.351 5.667 3.24 5.667 6.58c0 2.13 -.758 3.732 -2.295 4.924c-1.293 1.023 -3.422 1.576 -5.705 1.576c-2.4 0 -4.72 -.644 -6.486 -1.626a1 1 0 0 1 -.506 -.998l.5 -4a1 1 0 0 1 1.494 -.741c1.292 .75 3.64 1.365 4.998 1.365c.39 0 .704 -.147 .87 -.295l.035 -.035l-.09 -.035c-.167 -.06 -1.583 -.493 -2.153 -.694c-3.626 -1.304 -5.662 -3.609 -5.662 -6.941c0 -1.887 .882 -3.563 2.37 -4.777c1.22 -.987 2.517 -1.223 5.13 -1.223"
    })
  });
}));
