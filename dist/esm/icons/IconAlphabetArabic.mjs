import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAlphabetArabic = themed(memo(function (props) {
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
      d: "M10 6v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 14h8q -2.518 -3 -4 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 6v9.958c0 .963 0 1.444 -.293 1.743s-.764 .299 -1.707 .299h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 6v9.958c0 .963 0 1.444 -.293 1.743s-.764 .299 -1.707 .299h-1",
      stroke: color
    })]
  });
}));
export { IconAlphabetArabic };
