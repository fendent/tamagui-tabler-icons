import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCactus = themed(memo(function (props) {
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
      d: "M6 9v1a3 3 0 0 0 3 3h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 8v5a3 3 0 0 1 -3 3h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 21v-16a2 2 0 1 1 4 0v16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 21h10",
      stroke: color
    })]
  });
}));
export { IconCactus };
