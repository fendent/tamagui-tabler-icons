import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSausage = themed(memo(function (props) {
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
      d: "M5.5 5.5a2.5 2.5 0 0 0 -2.5 2.5c0 7.18 5.82 13 13 13a2.5 2.5 0 1 0 0 -5a8 8 0 0 1 -8 -8a2.5 2.5 0 0 0 -2.5 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.195 5.519l-1.243 -1.989a1 1 0 0 1 .848 -1.53h1.392a1 1 0 0 1 .848 1.53l-1.245 1.99",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.482 18.225l1.989 -1.243a1 1 0 0 1 1.53 .848v1.392a1 1 0 0 1 -1.53 .848l-1.991 -1.245",
      stroke: color
    })]
  });
}));
export { IconSausage };
