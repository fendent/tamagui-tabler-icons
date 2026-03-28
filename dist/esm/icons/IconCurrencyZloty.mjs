import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyZloty = themed(memo(function (props) {
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
      d: "M12 18h-7l7 -7h-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 18v-13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14.5l6 -3.5",
      stroke: color
    })]
  });
}));
export { IconCurrencyZloty };
