import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSwords = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11l5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 13l6 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 5.5l-2 -2.5h-5v5l3 2.5",
      stroke: color
    })]
  });
}));
export { IconSwords };
