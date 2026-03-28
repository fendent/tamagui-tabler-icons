import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlaceholder = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 20.415a8 8 0 1 0 3 -15.415h-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 8l-3 -3l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 17l4 -4l-4 -4l-4 4l4 4",
      stroke: color
    })]
  });
}));
export { IconPlaceholder };
