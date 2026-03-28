import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTrendingUpDown = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M2 14l6 -6l4 4l9 -9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 3h6v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 21h6v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21l-6 -6",
      stroke: color
    })]
  });
}));
export { IconTrendingUpDown };
