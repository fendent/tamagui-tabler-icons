import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSortDescendingLetters = themed(memo(function (props) {
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
      d: "M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 10h-4l4 -7h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 15l3 3l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 6v12",
      stroke: color
    })]
  });
}));
export { IconSortDescendingLetters };
