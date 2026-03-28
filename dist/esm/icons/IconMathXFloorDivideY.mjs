import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMathXFloorDivideY = themed(memo(function (props) {
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
      d: "M1.5 19l18 -18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.5 22l18 -18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 15l3 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M23 15l-4.5 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M1 1l6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M1 7l6 -6",
      stroke: color
    })]
  });
}));
export { IconMathXFloorDivideY };
