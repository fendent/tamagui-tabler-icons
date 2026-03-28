import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandVscode = themed(memo(function (props) {
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
      d: "M16 3v18l4 -2.5v-13l-4 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16.5l-11 -10l-2 1l13 13.5",
      stroke: color
    })]
  });
}));
export { IconBrandVscode };
