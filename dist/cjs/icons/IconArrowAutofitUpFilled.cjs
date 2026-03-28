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
var IconArrowAutofitUpFilled_exports = {};
__export(IconArrowAutofitUpFilled_exports, {
  IconArrowAutofitUpFilled: () => IconArrowAutofitUpFilled
});
module.exports = __toCommonJS(IconArrowAutofitUpFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconArrowAutofitUpFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M14 21a1 1 0 0 0 1 -1v-11.001h-.092a3 3 0 0 1 -2.03 -5.12a.515 .515 0 0 0 -.363 -.879h-6.515a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3z"
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_native_svg.Path, {
      d: "M18 21a1 1 0 0 0 1 -1v-14.584l1.293 1.291a1 1 0 0 0 1.32 .083l.094 -.083a1 1 0 0 0 0 -1.414l-3 -3a1 1 0 0 0 -.112 -.097l-.11 -.071l-.114 -.054l-.105 -.035l-.149 -.03l-.117 -.006l-.075 .003l-.126 .017l-.111 .03l-.111 .044l-.098 .052l-.096 .067l-.09 .08l-3 3a1 1 0 1 0 1.414 1.414l1.293 -1.293v14.586a1 1 0 0 0 1 1"
    })]
  });
}));
