import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAbc = themed(memo(function (props) {
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
      d: "M3 16v-6a2 2 0 1 1 4 0v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 13h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01",
      stroke: color
    })]
  });
}));
export { IconAbc };
