import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconYoga = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20h4l1.5 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 20l-1 -5h-5l1 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 10l4 -1l4 -1l4 1.5l4 1.5",
      stroke: color
    })]
  });
}));
export { IconYoga };
