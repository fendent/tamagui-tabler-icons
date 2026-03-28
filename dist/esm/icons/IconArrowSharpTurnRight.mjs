import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowSharpTurnRight = themed(memo(function (props) {
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
      d: "M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 16h5v-5",
      stroke: color
    })]
  });
}));
export { IconArrowSharpTurnRight };
