import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGrave = themed(memo(function (props) {
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
      d: "M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16v-5h-4v-4h4v-4h4v4h4v4h-4v5",
      stroke: color
    })]
  });
}));
export { IconGrave };
