import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCylinder = themed(memo(function (props) {
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
      d: "M5 6a7 3 0 1 0 14 0a7 3 0 1 0 -14 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12",
      stroke: color
    })]
  });
}));
export { IconCylinder };
