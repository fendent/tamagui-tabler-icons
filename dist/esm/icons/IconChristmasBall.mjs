import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChristmasBall = themed(memo(function (props) {
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
      d: "M4 13a8 8 0 1 0 16 0a8 8 0 1 0 -16 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 5l1 -2l1 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.512 10.161c2.496 -1.105 4.992 -.825 7.488 .839c2.627 1.752 5.255 1.97 7.882 .653",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.315 15.252c2.561 -1.21 5.123 -.96 7.685 .748c2.293 1.528 4.585 1.889 6.878 1.081",
      stroke: color
    })]
  });
}));
export { IconChristmasBall };
