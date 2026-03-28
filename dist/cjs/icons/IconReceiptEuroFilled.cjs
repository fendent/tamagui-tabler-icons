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
var IconReceiptEuroFilled_exports = {};
__export(IconReceiptEuroFilled_exports, {
  IconReceiptEuroFilled: () => IconReceiptEuroFilled
});
module.exports = __toCommonJS(IconReceiptEuroFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconReceiptEuroFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M17 2a3 3 0 0 1 3 3v16a1 1 0 0 1 -1.555 .832l-2.318 -1.545l-1.42 1.42a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.421 -1.42l-2.317 1.545a1 1 0 0 1 -1.55 -.72l-.005 -.112v-16a3 3 0 0 1 3 -3zm-3.875 4c-2.046 0 -3.668 1.746 -4.043 4h-.082a1 1 0 0 0 0 2h.082c.376 2.254 1.997 4 4.043 4c1.106 0 2.053 -.465 2.707 -1.445a1 1 0 1 0 -1.664 -1.11c-.267 .401 -.58 .555 -1.043 .555c-.882 0 -1.7 -.814 -2.002 -1.999l1.877 -.001a1 1 0 0 0 0 -2h-1.877c.301 -1.186 1.12 -2 2.002 -2c.462 0 .776 .154 1.043 .555a1 1 0 0 0 1.664 -1.11c-.654 -.98 -1.6 -1.445 -2.707 -1.445"
    })
  });
}));
