import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCircleOpenArrowUp = themed(memo(function (props) {
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
      d: "M15.998 20.066a9 9 0 1 0 -3.998 .934v-13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 12l-4 -4l-4 4",
      stroke: color
    })]
  });
}));
export { IconCircleOpenArrowUp };
