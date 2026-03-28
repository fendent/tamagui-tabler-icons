import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconParachute = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M22 12a10 10 0 1 0 -20 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 12l10 10l-3.5 -10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.5 12l-3.5 10l10 -10",
      stroke: color
    })]
  });
}));
export { IconParachute };
