import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyDollarAustralian = themed(memo(function (props) {
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
      d: "M3 18l3.279 -11.476a.75 .75 0 0 1 1.442 0l3.279 11.476",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 6v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.5 14h5",
      stroke: color
    })]
  });
}));
export { IconCurrencyDollarAustralian };
