import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGlobe = themed(memo(function (props) {
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
      d: "M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.75 15a8.015 8.015 0 1 0 9.25 -13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 21h8",
      stroke: color
    })]
  });
}));
export { IconGlobe };
