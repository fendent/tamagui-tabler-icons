import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBellPause = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 17v1a3 3 0 0 0 4.022 2.821",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 17v5",
      stroke: color
    })]
  });
}));
export { IconBellPause };
