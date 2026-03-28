import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAlphabetRunes = themed(memo(function (props) {
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
      d: "M17 18v-12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 6l4 4l4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 18l-7 -8l4 -4l4 4l-7 8",
      stroke: color
    })]
  });
}));
export { IconAlphabetRunes };
