import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconKarate = themed(memo(function (props) {
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
      d: "M17 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 9l4.5 1l3 2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 21v-8l3 -5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4.5l4 2l4 1l4 3.5l-2 3.5",
      stroke: color
    })]
  });
}));
export { IconKarate };
