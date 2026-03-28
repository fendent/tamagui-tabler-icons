import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSquareRotatedOff = themed(memo(function (props) {
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
      d: "M16.964 16.952l-3.462 3.461c-.782 .783 -2.222 .783 -3 0l-6.911 -6.91c-.783 -.783 -.783 -2.223 0 -3l3.455 -3.456m2 -2l1.453 -1.452c.782 -.783 2.222 -.783 3 0l6.911 6.91c.783 .783 .783 2.223 0 3l-1.448 1.45",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconSquareRotatedOff };
