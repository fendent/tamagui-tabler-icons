import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTrekking = themed(memo(function (props) {
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
      d: "M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 21l2 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 21v-4l-3 -3l1 -6l3 4l3 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 14l-1.827 -1.218a2 2 0 0 1 -.831 -2.15l.28 -1.117a2 2 0 0 1 1.939 -1.515h1.439l4 1l3 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12v9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20h2",
      stroke: color
    })]
  });
}));
export { IconTrekking };
