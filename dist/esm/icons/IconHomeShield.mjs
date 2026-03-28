import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHomeShield = themed(memo(function (props) {
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
      d: "M5 12h-2l9 -9l7.636 7.636",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12v7a2 2 0 0 0 2 2h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 21v-6a2 2 0 0 1 2 -2h1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5",
      stroke: color
    })]
  });
}));
export { IconHomeShield };
