import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowsSplit = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 17h-8l-3.5 -5h-6.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 7h-8l-3.495 5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 10l3 -3l-3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 20l3 -3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconArrowsSplit };
