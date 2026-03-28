import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSortDescendingLetters = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 10h-4l4 -7h-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 15l3 3l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 6v12",
      stroke: color
    })]
  });
}));
export { IconSortDescendingLetters };
