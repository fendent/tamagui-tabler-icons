import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBoom = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 9.662c2 2.338 2 4.338 0 6.338c3 .5 4.5 1 5 4c2 -3 6 -4 9 0c0 -3 1 -4 4 -4.004q -3 -2.995 0 -5.996c-3 0 -5 -2 -5 -5c-2 4 -5 3 -7.5 -1c-.5 3 -2.5 5 -5.5 5.662",
      stroke: color
    })
  });
}));
export { IconBoom };
