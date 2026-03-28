import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFence = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 12v4h16v-4l-16 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6",
      stroke: color
    })]
  });
}));
export { IconFence };
