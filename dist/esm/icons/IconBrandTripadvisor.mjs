import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandTripadvisor = themed(memo(function (props) {
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
      d: "M5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.5 15.5l1.5 2l1.5 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6.75c2 -.667 4 -.667 6 0",
      stroke: color
    })]
  });
}));
export { IconBrandTripadvisor };
