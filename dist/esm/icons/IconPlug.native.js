import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlug = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20l3.5 -3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 4l-3.5 3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 9l-3.5 3.5",
      stroke: color
    })]
  });
}));
export { IconPlug };
