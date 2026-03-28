import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingStadium = themed(memo(function (props) {
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
      d: "M4 12a8 2 0 1 0 16 0a8 2 0 1 0 -16 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 6h4v-3h-4v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 6h4v-3h-4v7",
      stroke: color
    })]
  });
}));
export { IconBuildingStadium };
