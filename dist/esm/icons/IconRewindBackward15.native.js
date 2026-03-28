import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRewindBackward15 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 18a6 6 0 1 0 0 -12h-11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 14v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 9l-3 -3l3 -3",
      stroke: color
    })]
  });
}));
export { IconRewindBackward15 };
