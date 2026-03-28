import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconConfucius = themed(memo(function (props) {
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
      d: "M9 19l3 2v-18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 10l8 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18l8 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18l-8 -8l8 -4",
      stroke: color
    })]
  });
}));
export { IconConfucius };
