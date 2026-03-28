import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFlagShare = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13.13 14.833a5.002 5.002 0 0 1 -1.13 -.833a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 21v-7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 22l5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 21.5v-4.5h-4.5",
      stroke: color
    })]
  });
}));
export { IconFlagShare };
