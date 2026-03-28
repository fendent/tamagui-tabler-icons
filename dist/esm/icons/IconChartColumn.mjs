import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChartColumn = themed(memo(function (props) {
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
      d: "M4 20h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.5 20h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 16h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.5 16h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.5 12h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 8h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4h3",
      stroke: color
    })]
  });
}));
export { IconChartColumn };
