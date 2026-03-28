import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWheelchair = themed(memo(function (props) {
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
      d: "M3 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 17a3 3 0 0 0 -3 -3h-3.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3h1a2 2 0 0 1 2 2v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 8h11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 8v6",
      stroke: color
    })]
  });
}));
export { IconWheelchair };
