import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconStorm = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236",
      stroke: color
    })]
  });
}));
export { IconStorm };
