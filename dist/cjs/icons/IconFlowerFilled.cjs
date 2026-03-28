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
var IconFlowerFilled_exports = {};
__export(IconFlowerFilled_exports, {
  IconFlowerFilled: () => IconFlowerFilled
});
module.exports = __toCommonJS(IconFlowerFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconFlowerFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M12 1a4 4 0 0 1 4 4l-.002 .055l.03 -.018a3.97 3.97 0 0 1 2.79 -.455l.237 .056a3.97 3.97 0 0 1 2.412 1.865a4.01 4.01 0 0 1 -1.455 5.461l-.068 .036l.071 .039a4.01 4.01 0 0 1 1.555 5.27l-.101 .186a3.97 3.97 0 0 1 -5.441 1.468l-.03 -.02l.002 .057a4 4 0 0 1 -3.8 3.995l-.2 .005a4 4 0 0 1 -4 -4l.001 -.056l-.029 .019a3.97 3.97 0 0 1 -2.79 .456l-.236 -.056a3.97 3.97 0 0 1 -2.413 -1.865a4.01 4.01 0 0 1 1.453 -5.46l.07 -.038l-.071 -.038a4.01 4.01 0 0 1 -1.555 -5.27l.1 -.187a3.97 3.97 0 0 1 5.444 -1.468l.026 .018v-.055a4 4 0 0 1 3.8 -3.995zm0 8a3 3 0 1 0 0 6a3 3 0 0 0 0 -6"
    })
  });
}));
