import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTools = themed(memo(function (props) {
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
      d: "M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 5.5l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8l-5 -5l-4 4l5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8l-1.5 1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 12l5 5l-4 4l-5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 17l-1.5 1.5",
      stroke: color
    })]
  });
}));
export { IconTools };
