import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandLinqpad = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 21h3.5l2.5 -6l2.5 -1l2.5 7h4l1 -4.5l-2 -1l-7 -12l-6 -.5l1.5 4l2.5 .5l1 2.5l-7 8l1 3",
      stroke: color
    })
  });
}));
export { IconBrandLinqpad };
