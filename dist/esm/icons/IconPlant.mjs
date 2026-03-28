import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPlant = themed(memo(function (props) {
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
      d: "M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15l0 -6",
      stroke: color
    })]
  });
}));
export { IconPlant };
