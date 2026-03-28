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
var IconBrandSketchFilled_exports = {};
__export(IconBrandSketchFilled_exports, {
  IconBrandSketchFilled: () => IconBrandSketchFilled
});
module.exports = __toCommonJS(IconBrandSketchFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBrandSketchFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M7.554 3.004h8.929a2 2 0 0 1 1.647 .873l3.536 5.193a2.006 2.006 0 0 1 -.173 2.48l-8 8.79a2.007 2.007 0 0 1 -2.97 0l-8 -8.789a1 1 0 0 1 -.13 -.175l-.012 -.026l-.051 -.072a2.01 2.01 0 0 1 -.056 -2.063l.09 -.146l3.541 -5.193c.372 -.544 .987 -.87 1.649 -.872"
    })
  });
}));
