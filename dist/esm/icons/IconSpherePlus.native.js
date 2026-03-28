import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSpherePlus = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12c0 1.657 4.03 3 9 3c1.116 0 2.185 -.068 3.172 -.192m5.724 -2.35a1.1 1.1 0 0 0 .104 -.458",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.984 12.546a9 9 0 1 0 -8.442 8.438",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 19h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 16v6",
      stroke: color
    })]
  });
}));
export { IconSpherePlus };
