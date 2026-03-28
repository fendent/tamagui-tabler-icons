import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsUpRight = themed(memo(function (props) {
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
      d: "M17 21l4 -4l-4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 17h-11a3 3 0 0 1 -3 -3v-11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 7l-4 -4l-4 4",
      stroke: color
    })]
  });
}));
export { IconArrowsUpRight };
