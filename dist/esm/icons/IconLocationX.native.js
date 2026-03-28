import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLocationX = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13.5 21l-.224 -.448l-3.276 -6.552l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.622 10.03",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 22l-5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 22l5 -5",
      stroke: color
    })]
  });
}));
export { IconLocationX };
