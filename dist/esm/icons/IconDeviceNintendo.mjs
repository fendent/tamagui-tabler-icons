import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceNintendo = themed(memo(function (props) {
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
      d: "M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.5 8.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    })]
  });
}));
export { IconDeviceNintendo };
