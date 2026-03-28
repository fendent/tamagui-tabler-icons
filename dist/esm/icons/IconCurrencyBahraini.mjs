import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyBahraini = themed(memo(function (props) {
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
      d: "M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 19.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 15.01v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869",
      stroke: color
    })]
  });
}));
export { IconCurrencyBahraini };
