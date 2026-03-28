import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconBrandNeteaseMusic = themed(memo(function (props) {
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
      d: "M9 4c-2.93 1.346 -5 5.046 -5 8.492c0 4.508 4 7.508 8 7.508c4 0 8 -3 8 -7c0 -3.513 -3.5 -5.513 -6 -5.513c-2.5 0 -5 1.513 -5 4.513c0 2 1.5 3 3 3c1.5 0 3 -1 3 -3c0 -3.513 -2 -4.508 -2 -6.515c0 -3.504 3.5 -2.603 4 -1.502",
      stroke: color
    })
  });
}));
export { IconBrandNeteaseMusic };
