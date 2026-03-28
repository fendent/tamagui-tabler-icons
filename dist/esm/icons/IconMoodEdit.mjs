import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodEdit = themed(memo(function (props) {
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
      d: "M20.955 11.104a9 9 0 1 0 -9.895 9.847",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 15c.658 .672 1.56 1 2.5 1c.126 0 .251 -.006 .376 -.018",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39",
      stroke: color
    })]
  });
}));
export { IconMoodEdit };
