import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSpray = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 7h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 9h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 5h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 3h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 7h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 11h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 7h1",
      stroke: color
    })]
  });
}));
export { IconSpray };
