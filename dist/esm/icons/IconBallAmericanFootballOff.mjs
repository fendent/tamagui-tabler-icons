import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBallAmericanFootballOff = themed(memo(function (props) {
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
      d: "M15 9l-1 1m-2 2l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12l2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 21a5 5 0 0 0 -5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.813 6.802a12.96 12.96 0 0 0 -3.813 9.198a5 5 0 0 0 5 5a12.96 12.96 0 0 0 9.186 -3.801m1.789 -2.227a12.94 12.94 0 0 0 2.025 -6.972a5 5 0 0 0 -5 -5a12.94 12.94 0 0 0 -6.967 2.022",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3a5 5 0 0 0 5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBallAmericanFootballOff };
