import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconViewportWide = themed(memo(function (props) {
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
      d: "M10 12h-7l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 15l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12h7l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 15l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1",
      stroke: color
    })]
  });
}));
export { IconViewportWide };
