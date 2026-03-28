import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAlarmAverage = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 4l-2.75 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 4l2.75 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 13h1l2 3l2 -6l2 3h1",
      stroke: color
    })]
  });
}));
export { IconAlarmAverage };
