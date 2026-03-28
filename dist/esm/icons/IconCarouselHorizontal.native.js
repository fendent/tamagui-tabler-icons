import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCarouselHorizontal = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 6a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1l0 -12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 17h-1a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 17h1a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-1",
      stroke: color
    })]
  });
}));
export { IconCarouselHorizontal };
