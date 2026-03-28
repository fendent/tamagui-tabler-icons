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
var IconPlayCardFilled_exports = {};
__export(IconPlayCardFilled_exports, {
  IconPlayCardFilled: () => IconPlayCardFilled
});
module.exports = __toCommonJS(IconPlayCardFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconPlayCardFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M17 2a2.995 2.995 0 0 1 2.995 2.898q .005 .05 .005 .102v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-.99 15h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-3.21 -9.6a1 1 0 0 0 -1.6 0l-3 4a1 1 0 0 0 0 1.2l2.988 3.984l.012 .016q .007 .01 .017 .02a.5 .5 0 0 0 .077 .086l.016 .018l.018 .016q .025 .024 .052 .043l.025 .02a.5 .5 0 0 0 .084 .056l.056 .03q .016 .01 .033 .018l.043 .017a.4 .4 0 0 0 .074 .028a.9 .9 0 0 0 .305 .047h.047a1 1 0 0 0 .095 -.01a1 1 0 0 0 .163 -.037l.025 -.008l.049 -.02a.3 .3 0 0 0 .076 -.034a.5 .5 0 0 0 .08 -.046a1 1 0 0 0 .085 -.06a.5 .5 0 0 0 .086 -.078l.018 -.016l.016 -.018l.043 -.052l.017 -.02l.009 -.012l2.991 -3.988a1 1 0 0 0 0 -1.2zm-4.79 -2.4h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2"
    })
  });
}));
