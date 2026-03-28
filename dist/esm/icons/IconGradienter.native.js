import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconGradienter = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3.227 14c.917 4 4.497 7 8.773 7c4.277 0 7.858 -3 8.773 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.78 10a9 9 0 0 0 -8.78 -7a8.985 8.985 0 0 0 -8.782 7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconGradienter };
