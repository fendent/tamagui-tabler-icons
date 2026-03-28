import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandSpotify = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 15c1.5 -1 4 -1 5 .5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 9c2 -1 6 -2 10 .5",
      stroke: color
    })]
  });
}));
export { IconBrandSpotify };
