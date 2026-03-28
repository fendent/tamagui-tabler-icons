import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowsUpRight = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 21l4 -4l-4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 17h-11a3 3 0 0 1 -3 -3v-11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 7l-4 -4l-4 4",
      stroke: color
    })]
  });
}));
export { IconArrowsUpRight };
