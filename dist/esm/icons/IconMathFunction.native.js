import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMathFunction = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 12l6 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 18l6 -6",
      stroke: color
    })]
  });
}));
export { IconMathFunction };
