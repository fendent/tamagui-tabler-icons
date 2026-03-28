import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChartGridDots = themed(memo(function (props) {
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
      d: "M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 18h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 20v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 3v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 20v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 10v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12h13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 6h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 6h-13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 14v2",
      stroke: color
    })]
  });
}));
export { IconChartGridDots };
