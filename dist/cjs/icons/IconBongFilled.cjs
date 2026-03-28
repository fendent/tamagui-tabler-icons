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
var IconBongFilled_exports = {};
__export(IconBongFilled_exports, {
  IconBongFilled: () => IconBongFilled
});
module.exports = __toCommonJS(IconBongFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBongFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M14 2a1 1 0 0 1 0 2v5.587l2.293 -2.294a1 1 0 0 1 1.32 -.083l.094 .083l2 2a1 1 0 0 1 0 1.414l-3.116 3.115l.086 .233c.311 .907 .396 1.865 .263 2.794l-.062 .36l-.012 .052a6 6 0 0 1 -1.121 2.41l-.16 .199a6 6 0 0 1 -10.396 -2.378l-.068 -.288l-.009 -.046a6 6 0 0 1 2.833 -6.324l.055 -.031v-6.803a1 1 0 1 1 0 -2zm-2 2h-2v7.416a1 1 0 0 1 -.483 .856l-.117 .06a4 4 0 0 0 -2.4 3.668h8a4 4 0 0 0 -.486 -1.914a1 1 0 0 1 .17 -1.185l2.902 -2.901l-.586 -.586l-2.9 2.902a1 1 0 0 1 -1.067 .226l-.12 -.056a4 4 0 0 0 -.316 -.155a1 1 0 0 1 -.597 -.915z"
    })
  });
}));
