import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGlass = themed(memo(function (props) {
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
      d: "M8 21h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 5a5 2 0 1 0 10 0a5 2 0 1 0 -10 0",
      stroke: color
    })]
  });
}));
export { IconGlass };
