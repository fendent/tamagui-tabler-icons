import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCpu2 = themed(memo(function (props) {
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
      d: "M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2",
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
    })]
  });
}));
export { IconCpu2 };
