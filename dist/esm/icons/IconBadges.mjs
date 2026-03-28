import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBadges = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M17 17v-4l-5 3l-5 -3v4l5 3l5 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 8v-4l-5 3l-5 -3v4l5 3l5 -3",
      stroke: color
    })]
  });
}));
export { IconBadges };
