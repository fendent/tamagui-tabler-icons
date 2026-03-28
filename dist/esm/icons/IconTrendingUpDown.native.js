import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTrendingUpDown = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M2 14l6 -6l4 4l9 -9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 3h6v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 21h6v-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 21l-6 -6",
      stroke: color
    })]
  });
}));
export { IconTrendingUpDown };
