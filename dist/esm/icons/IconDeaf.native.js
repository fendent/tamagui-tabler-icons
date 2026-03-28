import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDeaf = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 10a3 3 0 1 1 5 2.2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 13l4 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 13l-4 4",
      stroke: color
    })]
  });
}));
export { IconDeaf };
