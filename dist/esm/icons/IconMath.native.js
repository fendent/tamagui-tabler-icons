import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMath = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19 5h-7l-4 14l-3 -6h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 13l6 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 19l6 -6",
      stroke: color
    })]
  });
}));
export { IconMath };
