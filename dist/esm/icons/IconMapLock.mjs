import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMapLock = themed(memo(function (props) {
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
      d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.004 21.216a2 2 0 0 1 -2.417 -.316l-4.244 -4.243a8 8 0 0 1 11.314 -11.314a7.93 7.93 0 0 1 2.343 5.657",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 19a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 18v-1.5a1.5 1.5 0 1 1 3 0v1.5",
      stroke: color
    })]
  });
}));
export { IconMapLock };
