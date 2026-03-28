import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconGeometry = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 5v-2",
      stroke: color
    })]
  });
}));
export { IconGeometry };
