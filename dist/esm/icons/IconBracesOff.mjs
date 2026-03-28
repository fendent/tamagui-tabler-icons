import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBracesOff = themed(memo(function (props) {
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
      d: "M5.176 5.177c-.113 .251 -.176 .53 -.176 .823v3c0 1.657 -.895 3 -2 3c1.105 0 2 1.343 2 3v3a2 2 0 0 0 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 4a2 2 0 0 1 2 2v3c0 1.657 .895 3 2 3c-1.105 0 -2 1.343 -2 3m-.176 3.821a2 2 0 0 1 -1.824 1.179",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBracesOff };
