import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLetterCaseLower = themed(memo(function (props) {
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
      d: "M3 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12v7",
      stroke: color
    })]
  });
}));
export { IconLetterCaseLower };
