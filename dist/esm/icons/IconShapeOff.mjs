import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconShapeOff = themed(memo(function (props) {
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
      d: "M3.575 3.597a2 2 0 0 0 2.849 2.808",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.574 17.598a2 2 0 0 0 2.826 2.83",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 7v10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 5h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 19h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 7v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconShapeOff };
