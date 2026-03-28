import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyRenminbi = themed(memo(function (props) {
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
      d: "M15 9v8a2 2 0 1 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 9h-14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 5h-14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 9v4c0 2.5 -.667 4 -2 6",
      stroke: color
    })]
  });
}));
export { IconCurrencyRenminbi };
