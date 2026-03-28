import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRating18Plus = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 15v-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.5 12h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 10.5v3",
      stroke: color
    })]
  });
}));
export { IconRating18Plus };
