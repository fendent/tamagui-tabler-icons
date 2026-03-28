import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconCapsuleHorizontal = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: /* @__PURE__ */jsx(Path, {
      d: "M3 12a6 6 0 0 1 6 -6h6a6 6 0 0 1 6 6a6 6 0 0 1 -6 6h-6a6 6 0 0 1 -6 -6",
      stroke: color
    })
  });
}));
export { IconCapsuleHorizontal };
