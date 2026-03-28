import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSquareRotatedOff = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */_jsx(Path, {
      d: "M16.964 16.952l-3.462 3.461c-.782 .783 -2.222 .783 -3 0l-6.911 -6.91c-.783 -.783 -.783 -2.223 0 -3l3.455 -3.456m2 -2l1.453 -1.452c.782 -.783 2.222 -.783 3 0l6.911 6.91c.783 .783 .783 2.223 0 3l-1.448 1.45",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconSquareRotatedOff };
