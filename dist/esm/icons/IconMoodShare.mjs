import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodShare = themed(memo(function (props) {
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
      d: "M20.942 13.018a9 9 0 1 0 -8.942 7.982",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 15c.658 .672 1.56 1 2.5 1c.213 0 .424 -.017 .63 -.05",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 22l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21.5v-4.5h-4.5",
      stroke: color
    })]
  });
}));
export { IconMoodShare };
