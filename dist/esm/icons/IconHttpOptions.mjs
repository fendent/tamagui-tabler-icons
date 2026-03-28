import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHttpOptions = themed(memo(function (props) {
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
      d: "M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12h2a2 2 0 1 0 0 -4h-2v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 8v8",
      stroke: color
    })]
  });
}));
export { IconHttpOptions };
