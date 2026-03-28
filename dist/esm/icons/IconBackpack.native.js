import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBackpack = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 6v-1a2 2 0 1 1 4 0v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 10h2",
      stroke: color
    })]
  });
}));
export { IconBackpack };
