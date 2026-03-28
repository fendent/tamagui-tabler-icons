import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChalkboardTeacher = themed(memo(function (props) {
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
      d: "M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 14a2 2 0 1 0 4.001 -.001a2 2 0 0 0 -4.001 .001",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 19a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2",
      stroke: color
    })]
  });
}));
export { IconChalkboardTeacher };
