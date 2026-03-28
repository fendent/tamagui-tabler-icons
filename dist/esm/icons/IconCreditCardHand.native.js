import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCreditCardHand = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */_jsx(Path, {
      d: "M2 4h9.914a3 3 0 0 1 1.92 .695l5.166 4.305",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.15 9h8.85a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-13a2 2 0 0 1 -2 -2v-8.7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 8l7.2 4.7a1.803 1.803 0 0 0 2 -3l-4.2 -2.7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 16h17",
      stroke: color
    })]
  });
}));
export { IconCreditCardHand };
