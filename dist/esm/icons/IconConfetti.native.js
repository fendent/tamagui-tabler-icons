import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconConfetti = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 5h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 4v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.5 4l-.5 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 5h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 4v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 9l-1 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 13l2 -.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 19h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 18v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39",
      stroke: color
    })]
  });
}));
export { IconConfetti };
