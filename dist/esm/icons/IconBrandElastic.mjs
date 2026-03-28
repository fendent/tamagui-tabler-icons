import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandElastic = themed(memo(function (props) {
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
      d: "M14 2a5 5 0 0 1 5 5c0 .712 -.232 1.387 -.5 2c1.894 .042 3.5 1.595 3.5 3.5c0 1.869 -1.656 3.4 -3.5 3.5c.333 .625 .5 1.125 .5 1.5a2.5 2.5 0 0 1 -2.5 2.5c-.787 0 -1.542 -.432 -2 -1c-.786 1.73 -2.476 3 -4.5 3a5 5 0 0 1 -4.583 -7a3.5 3.5 0 0 1 -.11 -6.992l.195 0a2.5 2.5 0 0 1 2 -4c.787 0 1.542 .432 2 1c.786 -1.73 2.476 -3 4.5 -3l-.002 -.008",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.5 9l-3 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 5l-1 4l1 2l5 2l4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.499 16l-3 -.5l-1 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 19l1 -3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.417 15l4.083 -4",
      stroke: color
    })]
  });
}));
export { IconBrandElastic };
