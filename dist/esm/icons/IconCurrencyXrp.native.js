import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrencyXrp = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 5l3.585 3.585a4.83 4.83 0 0 0 6.83 0l3.585 -3.585",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 19l3.585 -3.585a4.83 4.83 0 0 1 6.83 0l3.585 3.584",
      stroke: color
    })]
  });
}));
export { IconCurrencyXrp };
