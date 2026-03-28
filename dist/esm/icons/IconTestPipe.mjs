import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTestPipe = themed(memo(function (props) {
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
      d: "M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 13h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 3l6 6",
      stroke: color
    })]
  });
}));
export { IconTestPipe };
