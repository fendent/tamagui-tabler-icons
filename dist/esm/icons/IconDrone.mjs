import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDrone = themed(memo(function (props) {
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
      d: "M10 10h4v4h-4l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 10l-3.5 -3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.96 6a3.5 3.5 0 1 0 -3.96 3.96",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10l3.5 -3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14l3.5 3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.04 18a3.5 3.5 0 1 0 3.96 -3.96",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 14l-3.5 3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 14.04a3.5 3.5 0 1 0 3.96 3.96",
      stroke: color
    })]
  });
}));
export { IconDrone };
