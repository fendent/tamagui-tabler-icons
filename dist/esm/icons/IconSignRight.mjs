import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSignRight = themed(memo(function (props) {
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
      d: "M8 21h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 21v-10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 6v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 6h10l2 2.5l-2 2.5h-10l0 -5",
      stroke: color
    })]
  });
}));
export { IconSignRight };
