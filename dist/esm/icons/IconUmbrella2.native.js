import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconUmbrella2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5.343 7.343a8 8 0 1 1 11.314 11.314l-11.314 -11.314",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.828 13.34l-4.242 4.243a2 2 0 1 0 2.828 2.828",
      stroke: color
    })]
  });
}));
export { IconUmbrella2 };
