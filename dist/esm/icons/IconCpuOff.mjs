import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCpuOff = themed(memo(function (props) {
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
      d: "M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 9h2v2m0 4h-6v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 10h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 14h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 10h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 14h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 21v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 21v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconCpuOff };
