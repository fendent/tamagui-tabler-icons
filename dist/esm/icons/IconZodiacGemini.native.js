import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconZodiacGemini = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 3a21 21 0 0 0 18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 21a21 21 0 0 1 18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 4.5l0 15",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 4.5l0 15",
      stroke: color
    })]
  });
}));
export { IconZodiacGemini };
