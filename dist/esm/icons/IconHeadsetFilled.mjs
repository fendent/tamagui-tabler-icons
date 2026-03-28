import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconHeadsetFilled = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: /* @__PURE__ */jsx(Path, {
      d: "M12 2a9 9 0 0 1 9 9v6a3 3 0 0 1 -2.152 2.879c-.678 1.901 -3.538 3.121 -6.848 3.121a1 1 0 0 1 0 -2c1.889 0 3.482 -.482 4.334 -1.075a3 3 0 0 1 -2.334 -2.925l.001 -3.051l.004 -.051a2.995 2.995 0 0 1 2.995 -2.898h1c.351 0 .688 .06 1 .171v-.171a7 7 0 0 0 -13.996 -.24l-.004 .41c.313 -.11 .65 -.17 1 -.17h1a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3h-1a3 3 0 0 1 -3 -3v-6a9 9 0 0 1 9 -9"
    })
  });
}));
export { IconHeadsetFilled };
