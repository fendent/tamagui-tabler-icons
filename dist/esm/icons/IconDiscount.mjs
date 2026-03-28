import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDiscount = themed(memo(function (props) {
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
      d: "M9 15l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    })]
  });
}));
export { IconDiscount };
