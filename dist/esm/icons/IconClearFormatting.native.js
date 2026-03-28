import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconClearFormatting = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 15l4 4m0 -4l-4 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 6v-1h11v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 19l4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 5l-4 14",
      stroke: color
    })]
  });
}));
export { IconClearFormatting };
