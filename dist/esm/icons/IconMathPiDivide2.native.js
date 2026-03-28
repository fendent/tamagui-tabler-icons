import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMathPiDivide2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12h14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 9v-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 3v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 3h-6",
      stroke: color
    })]
  });
}));
export { IconMathPiDivide2 };
