import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlayCardJ = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 6h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 18h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 9h4v4a2 2 0 1 1 -4 0",
      stroke: color
    })]
  });
}));
export { IconPlayCardJ };
