import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAdCircle = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 13h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1",
      stroke: color
    })]
  });
}));
export { IconAdCircle };
