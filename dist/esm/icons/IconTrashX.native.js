import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTrashX = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 7h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12l4 4m0 -4l-4 4",
      stroke: color
    })]
  });
}));
export { IconTrashX };
