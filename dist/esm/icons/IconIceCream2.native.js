import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconIceCream2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17.657 11a6 6 0 1 0 -11.315 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.342 11l5.658 11l5.657 -11l-11.315 0",
      stroke: color
    })]
  });
}));
export { IconIceCream2 };
