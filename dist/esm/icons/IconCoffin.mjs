import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCoffin = themed(memo(function (props) {
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
      d: "M7 3l-2 6l2 12h6l2 -12l-2 -6l-6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 7v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 9h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 21h4l2 -12l-2 -6h-4",
      stroke: color
    })]
  });
}));
export { IconCoffin };
