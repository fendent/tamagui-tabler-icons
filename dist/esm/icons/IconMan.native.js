import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMan = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 16v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 16v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 9h6l-1 7h-4l-1 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 11c1.333 -1.333 2.667 -2 4 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 11c-1.333 -1.333 -2.667 -2 -4 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconMan };
