import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCat = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 16h5l-4 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 16h-5l4 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 11v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 11v.01",
      stroke: color
    })]
  });
}));
export { IconCat };
