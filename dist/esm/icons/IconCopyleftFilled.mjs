import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconCopyleftFilled = themed(memo(function (props) {
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
      d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2.117 5.889a4.016 4.016 0 0 0 -5.543 -.23a1 1 0 0 0 1.32 1.502a2.016 2.016 0 0 1 2.783 .116a1.993 1.993 0 0 1 0 2.766a2.016 2.016 0 0 1 -2.783 .116a1 1 0 0 0 -1.32 1.501a4.016 4.016 0 0 0 5.543 -.23a3.993 3.993 0 0 0 0 -5.542z"
    })
  });
}));
export { IconCopyleftFilled };
