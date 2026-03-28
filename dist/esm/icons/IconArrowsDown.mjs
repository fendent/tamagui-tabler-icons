import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsDown = themed(memo(function (props) {
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
      d: "M7 21l0 -18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18l-3 3l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18l3 3l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 21l0 -18",
      stroke: color
    })]
  });
}));
export { IconArrowsDown };
