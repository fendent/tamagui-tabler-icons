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
var IconSquareF3Filled_exports = {};
__export(IconSquareF3Filled_exports, {
  IconSquareF3Filled: () => IconSquareF3Filled
});
module.exports = __toCommonJS(IconSquareF3Filled_exports);
var import_react = require("react"),
  import_react_native_svg = require("react-native-svg"),
  import_helpers_icon = require("@tamagui/helpers-icon"),
  import_jsx_runtime = require("react/jsx-runtime");
const IconSquareF3Filled = (0, import_helpers_icon.themed)((0, import_react.memo)(function (props) {
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
      d: "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-3.833 6h-1l-.144 .007a1.5 1.5 0 0 0 -1.356 1.493a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .727 -.457l.02 -.036h.636l.09 .008a.5 .5 0 0 1 0 .984l-.09 .008h-.5l-.133 .007c-1.156 .124 -1.156 1.862 0 1.986l.133 .007h.5l.09 .008a.5 .5 0 0 1 .41 .492l-.008 .09a.5 .5 0 0 1 -.492 .41h-.635l-.02 -.036a1 1 0 0 0 -1.845 .536a1.5 1.5 0 0 0 1.5 1.5h1l.164 -.005a2.5 2.5 0 0 0 2.336 -2.495l-.005 -.164a2.487 2.487 0 0 0 -.477 -1.312l-.019 -.024l.126 -.183a2.5 2.5 0 0 0 -2.125 -3.817zm-4.5 0h-2l-.117 .007a1 1 0 0 0 -.883 .993v6l.007 .117a1 1 0 0 0 .993 .883l.117 -.007a1 1 0 0 0 .883 -.993v-2h1l.117 -.007a1 1 0 0 0 -.117 -1.993h-1v-1h1l.117 -.007a1 1 0 0 0 -.117 -1.993z"
    })
  });
}));
