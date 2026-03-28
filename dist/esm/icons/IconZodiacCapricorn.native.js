import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconZodiacCapricorn = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 4a3 3 0 0 1 3 3v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    })]
  });
}));
export { IconZodiacCapricorn };
