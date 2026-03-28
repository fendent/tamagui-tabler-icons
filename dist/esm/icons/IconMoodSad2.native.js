import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMoodSad2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.5 16.05a3.5 3.5 0 0 0 -5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 9.25c-.5 1 -2.5 1 -3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 9.25c-.5 1 -2.5 1 -3 0",
      stroke: color
    })]
  });
}));
export { IconMoodSad2 };
