import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDoorEnter = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 12v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 21h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 7h-7m3 -3l-3 3l3 3",
      stroke: color
    })]
  });
}));
export { IconDoorEnter };
