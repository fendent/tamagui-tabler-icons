import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconJetpack = themed(memo(function (props) {
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
      d: "M10 6a3 3 0 1 0 -6 0v7h6v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 13h6v-7a3 3 0 0 0 -6 0v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 11h4",
      stroke: color
    })]
  });
}));
export { IconJetpack };
