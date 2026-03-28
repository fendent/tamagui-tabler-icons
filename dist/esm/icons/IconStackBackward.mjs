import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconStackBackward = themed(memo(function (props) {
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
      d: "M14 12l6 -3l-8 -4l-8 4l6 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12l-6 3l8 4l8 -4l-6 -3l-2 1l-2 -1",
      stroke: color
    })]
  });
}));
export { IconStackBackward };
