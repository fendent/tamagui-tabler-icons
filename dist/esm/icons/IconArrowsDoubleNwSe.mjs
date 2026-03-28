import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsDoubleNwSe = themed(memo(function (props) {
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
      d: "M14 21l-11 -11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 14v-4h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 14h4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 3l11 11",
      stroke: color
    })]
  });
}));
export { IconArrowsDoubleNwSe };
