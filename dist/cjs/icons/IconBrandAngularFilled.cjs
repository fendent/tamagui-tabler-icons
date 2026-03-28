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
var IconBrandAngularFilled_exports = {};
__export(IconBrandAngularFilled_exports, {
  IconBrandAngularFilled: () => IconBrandAngularFilled
});
module.exports = __toCommonJS(IconBrandAngularFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconBrandAngularFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M12.665 2.174l7.4 2.612a2 2 0 0 1 1.316 2.156l-1.323 9.703a2 2 0 0 1 -.99 1.468l-6.076 3.471a2 2 0 0 1 -1.984 0l-6.076 -3.47a2 2 0 0 1 -.96 -1.3l-.03 -.167l-1.322 -9.704a2 2 0 0 1 1.316 -2.156l7.4 -2.613a2 2 0 0 1 1.33 0m.271 4.475c-.324 -.865 -1.548 -.865 -1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111 .035a1 1 0 0 0 1.176 -.62l.506 -1.351h3.113l.508 1.352a1 1 0 0 0 1.176 .62l.111 -.035a1 1 0 0 0 .585 -1.287zm-.937 3.199l.807 2.151h-1.614z"
    })
  });
}));
