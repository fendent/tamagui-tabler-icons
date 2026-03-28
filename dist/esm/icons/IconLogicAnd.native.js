import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLogicAnd = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M22 12h-5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 9h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 15h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2",
      stroke: color
    })]
  });
}));
export { IconLogicAnd };
