import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTriangles = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9.974 21h8.052a.975 .975 0 0 0 .81 -1.517l-4.025 -6.048a.973 .973 0 0 0 -1.622 0l-4.025 6.048a.977 .977 0 0 0 .81 1.517",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4.98 16h14.04c.542 0 .98 -.443 .98 -.989a1 1 0 0 0 -.156 -.534l-7.02 -11.023a.974 .974 0 0 0 -1.648 0l-7.02 11.023a1 1 0 0 0 .294 1.366a.973 .973 0 0 0 .53 .157",
      stroke: color
    })]
  });
}));
export { IconTriangles };
