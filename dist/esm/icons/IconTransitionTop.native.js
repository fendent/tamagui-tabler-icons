import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTransitionTop = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 15v-8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 10l3 -3l3 3",
      stroke: color
    })]
  });
}));
export { IconTransitionTop };
