import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowFork = themed(memo(function (props) {
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
      d: "M16 3h5v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3h-5v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v.93",
      stroke: color
    })]
  });
}));
export { IconArrowFork };
