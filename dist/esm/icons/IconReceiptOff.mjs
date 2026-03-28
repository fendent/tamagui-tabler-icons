import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconReceiptOff = themed(memo(function (props) {
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
      d: "M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 7l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 11l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 15l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 11l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconReceiptOff };
