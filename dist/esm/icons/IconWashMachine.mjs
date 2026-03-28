import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWashMachine = themed(memo(function (props) {
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
      d: "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 6h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 6h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 6h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0",
      stroke: color
    })]
  });
}));
export { IconWashMachine };
