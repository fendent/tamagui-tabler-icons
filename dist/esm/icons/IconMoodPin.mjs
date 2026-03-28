import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodPin = themed(memo(function (props) {
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
      d: "M21 12a9 9 0 1 0 -8.352 8.977",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 15c.658 .672 1.56 1 2.5 1c.102 0 .203 -.004 .304 -.012",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 18v.01",
      stroke: color
    })]
  });
}));
export { IconMoodPin };
