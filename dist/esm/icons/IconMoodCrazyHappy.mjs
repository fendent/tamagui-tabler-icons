import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodCrazyHappy = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8.5l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 11.5l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 8.5l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 11.5l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 15a3.5 3.5 0 0 0 5 0",
      stroke: color
    })]
  });
}));
export { IconMoodCrazyHappy };
