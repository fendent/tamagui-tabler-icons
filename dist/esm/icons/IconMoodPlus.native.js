import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMoodPlus = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20.985 12.528a9 9 0 1 0 -8.45 8.456",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 19h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 16v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 10h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 10h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1",
      stroke: color
    })]
  });
}));
export { IconMoodPlus };
