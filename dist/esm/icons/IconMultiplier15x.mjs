import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMultiplier15x = themed(memo(function (props) {
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
      d: "M4 16v-8l-2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16h2a2 2 0 1 0 0 -4h-2v-4h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 16v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 16l4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 16l-4 -4",
      stroke: color
    })]
  });
}));
export { IconMultiplier15x };
