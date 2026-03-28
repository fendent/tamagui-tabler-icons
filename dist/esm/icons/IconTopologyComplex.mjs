import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTopologyComplex = themed(memo(function (props) {
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
      d: "M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 7.5l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 16v-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 6h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 18h-8",
      stroke: color
    })]
  });
}));
export { IconTopologyComplex };
