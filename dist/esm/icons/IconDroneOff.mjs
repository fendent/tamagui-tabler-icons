import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDroneOff = themed(memo(function (props) {
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
      d: "M14 14h-4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 10l-3.5 -3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10l3.5 -3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14l3.5 3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 14l-3.5 3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 14.035a3.5 3.5 0 1 0 3.966 3.965",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconDroneOff };
