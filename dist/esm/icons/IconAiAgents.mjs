import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAiAgents = themed(memo(function (props) {
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
      d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 5a1 1 0 1 0 -2 0a1 1 0 0 0 2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    })]
  });
}));
export { IconAiAgents };
