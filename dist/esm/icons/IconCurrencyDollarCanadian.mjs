import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyDollarCanadian = themed(memo(function (props) {
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
      d: "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 18h-1a6 6 0 1 1 0 -12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 6v-2",
      stroke: color
    })]
  });
}));
export { IconCurrencyDollarCanadian };
