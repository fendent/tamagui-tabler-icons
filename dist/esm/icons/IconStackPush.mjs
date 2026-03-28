import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconStackPush = themed(memo(function (props) {
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
      d: "M6 10l-2 1l8 4l8 -4l-2 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 15l8 4l8 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 8l-3 3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconStackPush };
