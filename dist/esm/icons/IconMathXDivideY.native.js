import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMathXDivideY = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 3l6 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 9l6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 15l3 4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 15l-4.5 7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12h14",
      stroke: color
    })]
  });
}));
export { IconMathXDivideY };
