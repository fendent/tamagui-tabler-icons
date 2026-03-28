import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChartInfographic = themed(memo(function (props) {
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
      d: "M3 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 3v4h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 17l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 14l0 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 13l0 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12l0 9",
      stroke: color
    })]
  });
}));
export { IconChartInfographic };
