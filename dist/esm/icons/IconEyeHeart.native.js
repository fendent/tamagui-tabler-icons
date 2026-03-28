import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconEyeHeart = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13.905 11.39a2 2 0 1 0 -2.855 2.37",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.992 17.779c-2.722 -.621 -5.053 -2.547 -6.992 -5.779c2.4 -4 5.4 -6 9 -6c3.332 0 6.15 1.714 8.454 5.14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296",
      stroke: color
    })]
  });
}));
export { IconEyeHeart };
