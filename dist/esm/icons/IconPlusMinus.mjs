import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPlusMinus = themed(memo(function (props) {
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
      d: "M4 7h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 4v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18h-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 19l14 -14",
      stroke: color
    })]
  });
}));
export { IconPlusMinus };
