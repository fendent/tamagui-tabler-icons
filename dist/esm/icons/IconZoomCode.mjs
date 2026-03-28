import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconZoomCode = themed(memo(function (props) {
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
      d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21l-6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 8l-2 2l2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8l2 2l-2 2",
      stroke: color
    })]
  });
}));
export { IconZoomCode };
