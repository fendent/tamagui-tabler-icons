import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSuperscript = themed(memo(function (props) {
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
      d: "M5 7l8 10m-8 0l8 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2",
      stroke: color
    })]
  });
}));
export { IconSuperscript };
