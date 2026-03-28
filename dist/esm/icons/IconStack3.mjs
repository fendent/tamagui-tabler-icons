import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconStack3 = themed(memo(function (props) {
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
      d: "M12 2l-8 4l8 4l8 -4l-8 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 10l8 4l8 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18l8 4l8 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 14l8 4l8 -4",
      stroke: color
    })]
  });
}));
export { IconStack3 };
