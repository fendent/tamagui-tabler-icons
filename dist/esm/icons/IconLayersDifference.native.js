import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLayersDifference = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 8l-2 0l0 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 14l0 2l2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 8l2 0l0 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 14l0 2l-2 0",
      stroke: color
    })]
  });
}));
export { IconLayersDifference };
