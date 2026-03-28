import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHandStop = themed(memo(function (props) {
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
      d: "M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 5.5a1.5 1.5 0 0 1 3 0v6.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47",
      stroke: color
    })]
  });
}));
export { IconHandStop };
