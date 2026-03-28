import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrencyLyd = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11 15h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 5v10a2 2 0 0 1 -2 2h-2.764a2 2 0 0 1 -1.789 -1.106l-.447 -.894",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 8l2.773 4.687c.427 .697 .234 1.626 -.43 2.075a1.38 1.38 0 0 1 -.773 .238h-2.224a.93 .93 0 0 1 -.673 -.293l-.673 -.707",
      stroke: color
    })]
  });
}));
export { IconCurrencyLyd };
