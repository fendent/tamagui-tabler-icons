import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCircleLetterQFilled = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: /* @__PURE__ */_jsx(Path, {
      d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m0 5a3 3 0 0 0 -3 3v4a3 3 0 0 0 4.168 2.764l.125 -.057a1 1 0 0 0 1.414 -1.414l.057 -.125a3 3 0 0 0 .236 -1.168v-4a3 3 0 0 0 -3 -3m1 7.001h-.059a.996 .996 0 0 0 -.941 1a1 1 0 0 1 -1 -1.001v-4a1 1 0 0 1 2 0z"
    })
  });
}));
export { IconCircleLetterQFilled };
