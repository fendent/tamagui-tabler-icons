import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowRightDashed = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 12h.5m3 0h1.5m3 0h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 18l6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 6l6 6",
      stroke: color
    })]
  });
}));
export { IconArrowRightDashed };
