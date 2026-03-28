import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandKotlin = themed(memo(function (props) {
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
      d: "M20 20h-16v-16h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20l16 -16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12l8 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l8 8",
      stroke: color
    })]
  });
}));
export { IconBrandKotlin };
