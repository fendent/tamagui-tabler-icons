import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBellRinging = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 17v1a3 3 0 0 0 6 0v-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 6.727a11.05 11.05 0 0 1 2.792 -3.727",
      stroke: color
    })]
  });
}));
export { IconBellRinging };
