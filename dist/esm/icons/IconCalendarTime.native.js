import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCalendarTime = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 3v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 3v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 11h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 16.496v1.504l1 1",
      stroke: color
    })]
  });
}));
export { IconCalendarTime };
