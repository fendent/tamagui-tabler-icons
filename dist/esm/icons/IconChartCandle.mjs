import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChartCandle = themed(memo(function (props) {
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
      d: "M4 7a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 4l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 11l0 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4l0 10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 19l0 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 4l0 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 11l0 9",
      stroke: color
    })]
  });
}));
export { IconChartCandle };
