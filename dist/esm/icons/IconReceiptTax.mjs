import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconReceiptTax = themed(memo(function (props) {
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
      d: "M9 14l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 13.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2",
      stroke: color
    })]
  });
}));
export { IconReceiptTax };
