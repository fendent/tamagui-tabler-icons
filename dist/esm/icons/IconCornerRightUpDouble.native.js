import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCornerRightUpDouble = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */_jsx(Path, {
      d: "M5 19h6a3 3 0 0 0 3 -3v-7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 13l4 -4l4 4m-8 -5l4 -4l4 4",
      stroke: color
    })]
  });
}));
export { IconCornerRightUpDouble };
