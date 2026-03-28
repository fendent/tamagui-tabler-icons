import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHomeDollar = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 21v-6a2 2 0 0 1 2 -2h2c.387 0 .748 .11 1.054 .3",
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
export { IconHomeDollar };
