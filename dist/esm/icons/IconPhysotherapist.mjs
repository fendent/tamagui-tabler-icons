import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPhysotherapist = themed(memo(function (props) {
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
      d: "M9 15l-1 -3l4 -2l4 1h3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 20h7l1 -4l4 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 20h3",
      stroke: color
    })]
  });
}));
export { IconPhysotherapist };
