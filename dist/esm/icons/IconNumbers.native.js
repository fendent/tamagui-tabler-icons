import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconNumbers = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 10v-7l-2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.5 10h3",
      stroke: color
    })]
  });
}));
export { IconNumbers };
