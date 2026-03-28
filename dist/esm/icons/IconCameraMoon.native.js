import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCameraMoon = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11.5 20h-6.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.815 11.96a3.001 3.001 0 1 0 -3.398 3.983",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.62 22c-2 0 -3.62 -1.58 -3.62 -3.53c0 -1.727 1.273 -3.165 2.954 -3.47a3.4 3.4 0 0 0 -.24 1.264c0 1.95 1.621 3.53 3.62 3.53q .342 0 .666 -.06c-.521 1.326 -1.838 2.266 -3.38 2.266",
      stroke: color
    })]
  });
}));
export { IconCameraMoon };
