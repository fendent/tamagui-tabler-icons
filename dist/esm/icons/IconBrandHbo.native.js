import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandHbo = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M2 16v-8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 8v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 12h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    })]
  });
}));
export { IconBrandHbo };
