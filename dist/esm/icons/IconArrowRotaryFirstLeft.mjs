import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowRotaryFirstLeft = themed(memo(function (props) {
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
      d: "M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 10v10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.5 9.5l-8.5 8.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 18h-5v-5",
      stroke: color
    })]
  });
}));
export { IconArrowRotaryFirstLeft };
