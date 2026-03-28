import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconIcons = themed(memo(function (props) {
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
      d: "M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2.5 21h8l-4 -7l-4 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 3l7 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10l7 -7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14h7v7h-7l0 -7",
      stroke: color
    })]
  });
}));
export { IconIcons };
