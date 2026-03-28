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
var IconScaleFilled_exports = {};
__export(IconScaleFilled_exports, {
  IconScaleFilled: () => IconScaleFilled
});
module.exports = __toCommonJS(IconScaleFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconScaleFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M12 2a1 1 0 0 1 1 1v1.152l5.159 .86a.98 .98 0 0 1 .636 .38l.041 .059l.058 .102l3.024 6.05l.035 .094l.025 .096l.016 .1l.005 .12l-.003 .061a3.996 3.996 0 0 1 -3.996 3.926a4 4 0 0 1 -4 -4a1 1 0 0 1 .106 -.447l2.393 -4.79l-3.499 -.583v12.82h4a1 1 0 0 1 0 2h-10a1 1 0 0 1 0 -2h4v-12.82l-3.5 .583l2.418 4.84l.035 .094l.025 .096l.016 .1l.005 .12l-.003 .061a3.996 3.996 0 0 1 -3.996 3.926a4 4 0 0 1 -4 -4a1 1 0 0 1 .106 -.447l3.034 -6.065l.039 -.061l.025 -.034a.98 .98 0 0 1 .636 -.38l5.16 -.862v-1.151a1 1 0 0 1 1 -1"
    })
  });
}));
