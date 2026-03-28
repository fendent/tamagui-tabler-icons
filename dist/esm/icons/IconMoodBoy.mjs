import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodBoy = themed(memo(function (props) {
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
      d: "M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 16a3.5 3.5 0 0 0 5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.5 2c1.5 1 2.5 3.5 2.5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 2c1.5 2 2 3.5 2 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12l.01 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 12l.01 0",
      stroke: color
    })]
  });
}));
export { IconMoodBoy };
