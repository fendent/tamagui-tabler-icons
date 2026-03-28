import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconReceiptBitcoin = themed(memo(function (props) {
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
      d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 7h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 11h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 6v10v-9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 6v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 15v1",
      stroke: color
    })]
  });
}));
export { IconReceiptBitcoin };
