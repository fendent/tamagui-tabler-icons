import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrush = themed(memo(function (props) {
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
      d: "M3 21v-4a4 4 0 1 1 4 4h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 3a16 16 0 0 0 -12.8 10.2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 3a16 16 0 0 1 -10.2 12.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.6 9a9 9 0 0 1 4.4 4.4",
      stroke: color
    })]
  });
}));
export { IconBrush };
