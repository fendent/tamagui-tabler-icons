import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTransitionBottom = themed(memo(function (props) {
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
      d: "M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 9v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 14l3 3l3 -3",
      stroke: color
    })]
  });
}));
export { IconTransitionBottom };
