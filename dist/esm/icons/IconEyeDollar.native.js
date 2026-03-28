import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconEyeDollar = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.193 17.924c-.39 .05 -.788 .076 -1.193 .076c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.005 0 5.592 1.394 7.761 4.181",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 21v1m0 -8v1",
      stroke: color
    })]
  });
}));
export { IconEyeDollar };
