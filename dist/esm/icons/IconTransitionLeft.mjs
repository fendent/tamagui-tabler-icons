import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTransitionLeft = themed(memo(function (props) {
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
      d: "M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 12h-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 9l-3 3l3 3",
      stroke: color
    })]
  });
}));
export { IconTransitionLeft };
