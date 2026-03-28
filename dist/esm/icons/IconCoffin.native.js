import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCoffin = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 3l-2 6l2 12h6l2 -12l-2 -6l-6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 7v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 9h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 21h4l2 -12l-2 -6h-4",
      stroke: color
    })]
  });
}));
export { IconCoffin };
