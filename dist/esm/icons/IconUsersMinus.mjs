import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconUsersMinus = themed(memo(function (props) {
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
      d: "M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21v-2a4 4 0 0 1 4 -4h4c.948 0 1.818 .33 2.504 .88",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3.13a4 4 0 0 1 0 7.75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 19h6",
      stroke: color
    })]
  });
}));
export { IconUsersMinus };
