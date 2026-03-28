import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrencyYen = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 19v-7l-5 -7m10 0l-5 7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 17l8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 13l8 0",
      stroke: color
    })]
  });
}));
export { IconCurrencyYen };
