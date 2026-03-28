import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsDoubleSeNw = themed(memo(function (props) {
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
      d: "M3 10l11 11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 17v4h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 3h-4v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 14l-11 -11",
      stroke: color
    })]
  });
}));
export { IconArrowsDoubleSeNw };
