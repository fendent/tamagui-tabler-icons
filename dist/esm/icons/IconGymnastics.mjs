import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGymnastics = themed(memo(function (props) {
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
      d: "M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 21l1 -9l7 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 11h6l5 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 8.5l4.5 -3.5",
      stroke: color
    })]
  });
}));
export { IconGymnastics };
