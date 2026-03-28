import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconGlassCocktail = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 21h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 15v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 5a7 2 0 1 0 14 0a7 2 0 1 0 -14 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 5v.388c0 .432 .126 .853 .362 1.206l5 7.509c.633 .951 1.88 1.183 2.785 .517c.191 -.141 .358 -.316 .491 -.517l5 -7.509c.236 -.353 .362 -.774 .362 -1.206v-.388",
      stroke: color
    })]
  });
}));
export { IconGlassCocktail };
