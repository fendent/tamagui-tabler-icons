import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodHeart = themed(memo(function (props) {
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
      d: "M21 12a9 9 0 1 0 -8.012 8.946",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 15a3.59 3.59 0 0 0 2.774 .99",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.994 21.5l2.518 -2.58a1.74 1.74 0 0 0 .004 -2.413a1.627 1.627 0 0 0 -2.346 -.005l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 -.004a1.74 1.74 0 0 0 -.004 2.412l2.51 2.59",
      stroke: color
    })]
  });
}));
export { IconMoodHeart };
