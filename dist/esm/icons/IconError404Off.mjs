import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconError404Off = themed(memo(function (props) {
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
      d: "M3 8v3a1 1 0 0 0 1 1h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 8v3a1 1 0 0 0 1 1h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 10v4a2 2 0 1 0 4 0m0 -4a2 2 0 0 0 -2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconError404Off };
