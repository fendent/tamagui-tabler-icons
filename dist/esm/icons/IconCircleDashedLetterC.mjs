import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCircleDashedLetterC = themed(memo(function (props) {
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
      d: "M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.56 3.69a9 9 0 0 0 -2.92 1.95",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.69 8.56a9 9 0 0 0 -.69 3.44",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.69 15.44a9 9 0 0 0 1.95 2.92",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.56 20.31a9 9 0 0 0 3.44 .69",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.44 20.31a9 9 0 0 0 2.92 -1.95",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.31 15.44a9 9 0 0 0 .69 -3.44",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.31 8.56a9 9 0 0 0 -1.95 -2.92",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.44 3.69a9 9 0 0 0 -3.44 -.69",
      stroke: color
    })]
  });
}));
export { IconCircleDashedLetterC };
