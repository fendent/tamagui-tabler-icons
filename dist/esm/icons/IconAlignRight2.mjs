import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAlignRight2 = themed(memo(function (props) {
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
      d: "M20 4v16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 6h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 18h10",
      stroke: color
    })]
  });
}));
export { IconAlignRight2 };
