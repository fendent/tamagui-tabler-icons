import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBug = themed(memo(function (props) {
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
      d: "M9 9v-1a3 3 0 0 1 6 0v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 13l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 13l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20l0 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 19l3.35 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 19l-3.35 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 7l3.75 2.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 7l-3.75 2.4",
      stroke: color
    })]
  });
}));
export { IconBug };
