import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsDiagonalMinimize2 = themed(memo(function (props) {
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
      d: "M18 10h-4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 4l-6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 14h4v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 14l-6 6",
      stroke: color
    })]
  });
}));
export { IconArrowsDiagonalMinimize2 };
