import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconChecklist = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 19l2 2l4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 8h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 12h2",
      stroke: color
    })]
  });
}));
export { IconChecklist };
