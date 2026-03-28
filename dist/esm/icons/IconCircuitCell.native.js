import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCircuitCell = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M2 12h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 12h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 5v14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 9v6",
      stroke: color
    })]
  });
}));
export { IconCircuitCell };
