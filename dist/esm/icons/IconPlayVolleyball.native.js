import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlayVolleyball = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.5 10a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 16l5 1l.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2",
      stroke: color
    })]
  });
}));
export { IconPlayVolleyball };
