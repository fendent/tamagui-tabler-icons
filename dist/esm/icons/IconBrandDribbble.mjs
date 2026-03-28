import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandDribbble = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 3.6c5 6 7 10.5 7.5 16.2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.1 10.75c5 0 9.814 -.38 15.314 -5",
      stroke: color
    })]
  });
}));
export { IconBrandDribbble };
