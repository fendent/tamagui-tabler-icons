import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDragDrop = themed(memo(function (props) {
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
      d: "M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 13l9 3l-4 2l-2 4l-3 -9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 3l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 3l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 3l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 7l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 11l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 15l0 .01",
      stroke: color
    })]
  });
}));
export { IconDragDrop };
