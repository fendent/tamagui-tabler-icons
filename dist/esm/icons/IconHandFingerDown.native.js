import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHandFingerDown = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 12v8.5a1.5 1.5 0 0 0 3 0v-7.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 13.5v2a1.5 1.5 0 0 0 3 0v-2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 14.5a1.5 1.5 0 0 0 3 0v-1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 13.5a1.5 1.5 0 0 0 3 0v-4.5a6 6 0 0 0 -6 -6h-2h.208a6 6 0 0 0 -5.012 2.7l-.196 .3q -.468 .718 -3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734 .44 1.674 .325 2.28 -.28l1.47 -1.47",
      stroke: color
    })]
  });
}));
export { IconHandFingerDown };
