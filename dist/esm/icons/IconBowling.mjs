import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBowling = themed(memo(function (props) {
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
      d: "M7 11v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 10v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 14v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.059 6.07a8 8 0 1 0 .32 15.81",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.969 9h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.969 5c0 1.5 1 2 1 4c0 2.5 -2 4.5 -2 7c0 2.6 1.9 6 1.9 6h4.1s2 -3.4 2 -6c0 -2.5 -2 -4.5 -2 -7c0 -2 1 -2.5 1 -4a3 3 0 1 0 -6 0",
      stroke: color
    })]
  });
}));
export { IconBowling };
