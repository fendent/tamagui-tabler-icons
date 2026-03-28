import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMultiplier1x = themed(memo(function (props) {
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
      d: "M9 16v-8l-2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 16l4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 16l-4 -4",
      stroke: color
    })]
  });
}));
export { IconMultiplier1x };
