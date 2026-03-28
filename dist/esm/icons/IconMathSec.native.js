import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMathSec = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 8h-4v8h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12h2.5",
      stroke: color
    })]
  });
}));
export { IconMathSec };
