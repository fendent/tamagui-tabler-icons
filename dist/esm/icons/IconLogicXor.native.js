import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLogicXor = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M22 12h-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 9h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 15h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 19c1.778 -4.667 1.778 -9.333 0 -14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14",
      stroke: color
    })]
  });
}));
export { IconLogicXor };
