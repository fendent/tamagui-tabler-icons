import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyRupeeNepalese = themed(memo(function (props) {
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
      d: "M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707",
      stroke: color
    })]
  });
}));
export { IconCurrencyRupeeNepalese };
