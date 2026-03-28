import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLollipop = themed(memo(function (props) {
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
      d: "M7 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 10a3.5 3.5 0 0 0 -7 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10a3.5 3.5 0 0 1 -7 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 17a3.5 3.5 0 0 0 0 -7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 3a3.5 3.5 0 0 0 0 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21l6 -6",
      stroke: color
    })]
  });
}));
export { IconLollipop };
