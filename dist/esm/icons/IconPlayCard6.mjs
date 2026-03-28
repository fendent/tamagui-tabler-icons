import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPlayCard6 = themed(memo(function (props) {
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
      d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 6h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 18h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 9h-3a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-3",
      stroke: color
    })]
  });
}));
export { IconPlayCard6 };
