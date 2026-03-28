import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandAppleNews = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 14l6 6h-6l0 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 10l-6 -6h6l0 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 4v4l12 12h4v-4l-12 -12l-4 0",
      stroke: color
    })]
  });
}));
export { IconBrandAppleNews };
