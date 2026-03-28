import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChisel = themed(memo(function (props) {
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
      d: "M14 14l1.5 1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.347 15.575l2.08 2.079a1.96 1.96 0 0 1 -2.773 2.772l-2.08 -2.079a1.96 1.96 0 0 1 2.773 -2.772",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6l3 -3l7.414 7.414a2 2 0 0 1 .586 1.414v2.172h-2.172a2 2 0 0 1 -1.414 -.586l-7.414 -7.414",
      stroke: color
    })]
  });
}));
export { IconChisel };
