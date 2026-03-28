import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGenderIntergender = themed(memo(function (props) {
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
      d: "M13.5 11.5l6.5 6.5v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 13.5l6.5 6.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 20l2 -2",
      stroke: color
    })]
  });
}));
export { IconGenderIntergender };
