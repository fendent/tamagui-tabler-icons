import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconEaseOutControlPoint = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 21s10 -16 18 -16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 5h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 5h-2",
      stroke: color
    })]
  });
}));
export { IconEaseOutControlPoint };
