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
var IconUfoFilled_exports = {};
__export(IconUfoFilled_exports, {
  IconUfoFilled: () => IconUfoFilled
});
module.exports = __toCommonJS(IconUfoFilled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconUfoFilled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M12 3c3.067 0 5.6 2.29 5.957 5.246c3.067 .903 5.043 2.476 5.043 4.478c0 2.3 -2.653 4.053 -6.427 4.833l1.26 1.888a1 1 0 1 1 -1.665 1.11l-1.78 -2.67c-.77 .076 -1.57 .115 -2.388 .115c-.966 0 -1.905 -.055 -2.801 -.16l-1.305 2.607a1 1 0 0 1 -1.788 -.894l1.028 -2.06c-3.618 -.807 -6.134 -2.529 -6.134 -4.768c0 -1.999 1.981 -3.58 5.044 -4.483c.36 -2.955 2.89 -5.242 5.956 -5.242m.01 10l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993m-5 -1l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993m10 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993m-5.01 -7c-2.11 0 -3.835 1.618 -3.989 3.667a1 1 0 0 1 .057 .4c.104 .087 .348 .251 .768 .419c.806 .322 1.94 .514 3.164 .514s2.358 -.192 3.164 -.514c.445 -.178 .693 -.352 .789 -.435l-.003 -.051q 0 -.113 .029 -.229l.014 -.046c-.125 -2.076 -1.864 -3.725 -3.993 -3.725"
    })
  });
}));
