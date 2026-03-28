import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRobotFace = themed(memo(function (props) {
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
      d: "M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 16c1 .667 2 1 3 1s2 -.333 3 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 7l-1 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 7l1 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 12v-1",
      stroke: color
    })]
  });
}));
export { IconRobotFace };
