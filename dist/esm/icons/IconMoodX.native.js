import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMoodX = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20.983 12.556a9 9 0 1 0 -8.433 8.427",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 10h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 10h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.5 15c.658 .64 1.56 1 2.5 1c.194 0 .386 -.015 .574 -.045",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21.5 21.5l-5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.5 21.5l5 -5",
      stroke: color
    })]
  });
}));
export { IconMoodX };
