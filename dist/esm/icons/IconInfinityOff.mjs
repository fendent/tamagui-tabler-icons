import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconInfinityOff = themed(memo(function (props) {
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
      d: "M8.165 8.174a4 4 0 0 0 -5.166 3.826a4 4 0 0 0 6.829 2.828a10 10 0 0 0 2.172 -2.828m1.677 -2.347a10 10 0 0 1 .495 -.481a4 4 0 1 1 5.129 6.1m-3.521 .537a4 4 0 0 1 -1.608 -.981a10 10 0 0 1 -2.172 -2.828",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconInfinityOff };
