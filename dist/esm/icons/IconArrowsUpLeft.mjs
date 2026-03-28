import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsUpLeft = themed(memo(function (props) {
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
      d: "M21 7l-4 -4l-4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 3v11a3 3 0 0 1 -3 3h-11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 13l-4 4l4 4",
      stroke: color
    })]
  });
}));
export { IconArrowsUpLeft };
