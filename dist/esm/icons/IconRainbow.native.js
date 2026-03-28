import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRainbow = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M22 17c0 -5.523 -4.477 -10 -10 -10c-5.523 0 -10 4.477 -10 10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 17a6 6 0 1 0 -12 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 17a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconRainbow };
