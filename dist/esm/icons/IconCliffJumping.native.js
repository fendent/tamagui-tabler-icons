import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCliffJumping = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.5 18l2.5 2l2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 21l3 -3l-4 -2l-1 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.5 7.5l2 3l3.5 .5l3 -2l.5 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 21v-1l2 -3l.5 -2.5l1.5 -2.5l-1 -5l1 -3l-1 -1l-2 .5l-2 -.5",
      stroke: color
    })]
  });
}));
export { IconCliffJumping };
