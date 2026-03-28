import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsDiagonalMinimize = themed(memo(function (props) {
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
      d: "M6 10h4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4l6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 14h-4v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14l6 6",
      stroke: color
    })]
  });
}));
export { IconArrowsDiagonalMinimize };
