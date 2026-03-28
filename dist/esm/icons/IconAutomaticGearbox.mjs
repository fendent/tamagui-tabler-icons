import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAutomaticGearbox = themed(memo(function (props) {
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
      d: "M17 17v4h1a2 2 0 1 0 0 -4h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 11h4",
      stroke: color
    })]
  });
}));
export { IconAutomaticGearbox };
