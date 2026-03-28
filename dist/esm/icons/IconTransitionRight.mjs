import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTransitionRight = themed(memo(function (props) {
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
      d: "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 15l3 -3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconTransitionRight };
