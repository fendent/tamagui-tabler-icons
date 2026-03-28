import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFileTextShield = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 3v4a.997 .997 0 0 0 1 1h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 9h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12.994l3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 16.997l2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 15.994c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5",
      stroke: color
    })]
  });
}));
export { IconFileTextShield };
