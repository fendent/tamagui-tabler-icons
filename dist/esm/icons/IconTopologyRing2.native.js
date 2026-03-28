import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTopologyRing2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 18h10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 16l-5 -8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 8l-5 8",
      stroke: color
    })]
  });
}));
export { IconTopologyRing2 };
