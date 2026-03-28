import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyLari = themed(memo(function (props) {
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
      d: "M18 13a6 6 0 1 0 -6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 19h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 5v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12v-7",
      stroke: color
    })]
  });
}));
export { IconCurrencyLari };
