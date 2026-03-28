import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconViewportNarrow = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12h7l-3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 15l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 12h-7l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 15l-3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1",
      stroke: color
    })]
  });
}));
export { IconViewportNarrow };
