import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrencyZloty = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 18h-7l7 -7h-7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 18v-13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 14.5l6 -3.5",
      stroke: color
    })]
  });
}));
export { IconCurrencyZloty };
