import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconGlassChampagne = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 21h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 16v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 5a4 2 0 1 0 8 0a4 2 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 5c0 6.075 1.79 11 4 11s4 -4.925 4 -11",
      stroke: color
    })]
  });
}));
export { IconGlassChampagne };
