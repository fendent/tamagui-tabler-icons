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
var IconDumplingFilled_exports = {};
__export(IconDumplingFilled_exports, {
  IconDumplingFilled: () => IconDumplingFilled
});
module.exports = __toCommonJS(IconDumplingFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconDumplingFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M10.003 2.04a3.53 3.53 0 0 1 2.602 .62l.09 .07l.149 -.11a3.53 3.53 0 0 1 3.044 -.462l.207 .072a3.53 3.53 0 0 1 1.99 1.903l.014 .031l.045 -.004a3.53 3.53 0 0 1 2.624 .879l.153 .144l.358 .358c1.976 1.977 -.32 6.748 -4.655 11.083c-4.336 4.335 -9.106 6.632 -11.083 4.655l-.382 -.382l-.135 -.145a3.53 3.53 0 0 1 -.87 -2.556l.01 -.1l-.162 -.072a3.53 3.53 0 0 1 -1.838 -2.124l-.055 -.192a3.53 3.53 0 0 1 .56 -2.937l.062 -.079l-.07 -.092a3.53 3.53 0 0 1 -.644 -2.401l.025 -.2a3.53 3.53 0 0 1 1.707 -2.505l.046 -.026l-.005 -.14a3.53 3.53 0 0 1 .885 -2.345l.15 -.16l.159 -.149a3.53 3.53 0 0 1 2.346 -.884l.14 .004l.026 -.046a3.53 3.53 0 0 1 2.308 -1.67z"
    })
  });
}));
