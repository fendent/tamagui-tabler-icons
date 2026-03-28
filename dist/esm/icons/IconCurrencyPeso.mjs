import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyPeso = themed(memo(function (props) {
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
      d: "M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 8h-12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 11h-12",
      stroke: color
    })]
  });
}));
export { IconCurrencyPeso };
