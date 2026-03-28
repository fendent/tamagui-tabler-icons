import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHomeStats = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19 13v-1h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 22l3 -3l2 2l4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 17h3v3",
      stroke: color
    })]
  });
}));
export { IconHomeStats };
