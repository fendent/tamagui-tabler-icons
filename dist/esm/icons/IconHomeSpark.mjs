import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHomeSpark = themed(memo(function (props) {
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
      d: "M5 12h-2l9 -9l9 9h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12v7a2 2 0 0 0 2 2h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5",
      stroke: color
    })]
  });
}));
export { IconHomeSpark };
