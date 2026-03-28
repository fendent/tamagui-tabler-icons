import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTrees = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 5l3 3l-2 1l4 4l-3 1l4 4h-9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 21l0 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 13l-2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12l2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 21v-13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4l-.176 -.005",
      stroke: color
    })]
  });
}));
export { IconTrees };
