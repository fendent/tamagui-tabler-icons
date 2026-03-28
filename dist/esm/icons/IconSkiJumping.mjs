import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSkiJumping = themed(memo(function (props) {
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
      d: "M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17.5l-5 -4.5v-6l5 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 17.5l5 -4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 11l5 -4",
      stroke: color
    })]
  });
}));
export { IconSkiJumping };
