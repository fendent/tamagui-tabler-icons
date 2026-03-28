import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandSublimeText = themed(memo(function (props) {
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
      d: "M19 8l-14 4.5v-5.5l14 -4.5l0 5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 17l-14 4.5v-5.5l14 -4.5l0 5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 11.5l-14 -4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12.5l14 4.5",
      stroke: color
    })]
  });
}));
export { IconBrandSublimeText };
