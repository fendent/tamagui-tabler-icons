import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrain = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.5 16a3.5 3.5 0 0 0 0 -7h-.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.5 16a3.5 3.5 0 0 1 0 -7h.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10",
      stroke: color
    })]
  });
}));
export { IconBrain };
