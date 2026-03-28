import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBinaryTree = themed(memo(function (props) {
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
      d: "M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.058 18.306l2.88 -4.606",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.061 10.303l2.877 -4.604",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.065 13.705l2.876 4.6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.063 5.7l2.881 4.61",
      stroke: color
    })]
  });
}));
export { IconBinaryTree };
