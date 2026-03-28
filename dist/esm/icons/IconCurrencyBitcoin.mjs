import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyBitcoin = themed(memo(function (props) {
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
      d: "M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 6l0 12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12l6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 3l0 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 3l0 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18l0 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 18l0 3",
      stroke: color
    })]
  });
}));
export { IconCurrencyBitcoin };
