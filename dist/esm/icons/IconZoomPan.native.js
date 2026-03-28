import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconZoomPan = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17l-2.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 4l2 -2l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 10l2 2l-2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 10l-2 2l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 20l2 2l2 -2",
      stroke: color
    })]
  });
}));
export { IconZoomPan };
