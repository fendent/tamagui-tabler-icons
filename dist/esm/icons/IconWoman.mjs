import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWoman = themed(memo(function (props) {
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
      d: "M10 16v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 16v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16h8l-2 -7h-4l-2 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 11c1.667 -1.333 3.333 -2 5 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 11c-1.667 -1.333 -3.333 -2 -5 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconWoman };
