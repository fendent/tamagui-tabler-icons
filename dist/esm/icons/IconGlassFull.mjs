import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGlassFull = themed(memo(function (props) {
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
      d: "M8 21l8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15l0 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0",
      stroke: color
    })]
  });
}));
export { IconGlassFull };
