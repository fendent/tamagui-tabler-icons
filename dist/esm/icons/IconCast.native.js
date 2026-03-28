import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCast = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 19l.01 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 19a4 4 0 0 0 -4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 19a8 8 0 0 0 -8 -8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2",
      stroke: color
    })]
  });
}));
export { IconCast };
