import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconStack3 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 2l-8 4l8 4l8 -4l-8 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 10l8 4l8 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 18l8 4l8 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 14l8 4l8 -4",
      stroke: color
    })]
  });
}));
export { IconStack3 };
