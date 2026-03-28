import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRocket = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    })]
  });
}));
export { IconRocket };
