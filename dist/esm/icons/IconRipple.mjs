import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRipple = themed(memo(function (props) {
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
      d: "M3 7c3 -2 6 -2 9 0s6 2 9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17c3 -2 6 -2 9 0s6 2 9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12c3 -2 6 -2 9 0s6 2 9 0",
      stroke: color
    })]
  });
}));
export { IconRipple };
