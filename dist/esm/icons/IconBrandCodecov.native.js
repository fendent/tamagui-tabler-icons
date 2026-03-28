import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandCodecov = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: /* @__PURE__ */_jsx(Path, {
      d: "M9.695 12.985a5.972 5.972 0 0 0 -3.295 -.985c-1.257 0 -2.436 .339 -3.4 1a9 9 0 1 1 18 0c-.966 -.664 -2.14 -1 -3.4 -1a6 6 0 0 0 -5.605 8.144",
      stroke: color
    })
  });
}));
export { IconBrandCodecov };
