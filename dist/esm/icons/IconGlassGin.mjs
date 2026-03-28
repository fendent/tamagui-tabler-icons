import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGlassGin = themed(memo(function (props) {
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
      d: "M8 21h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.5 5a6.5 2 0 1 0 13 0a6.5 2 0 1 0 -13 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.75 4.5c-.612 .75 -.75 2 -.75 3.5a7 7 0 0 0 14 0c0 -1.5 -.094 -2.75 -.75 -3.5",
      stroke: color
    })]
  });
}));
export { IconGlassGin };
