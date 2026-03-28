import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGrid3x3 = themed(memo(function (props) {
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
      d: "M3 8h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 16h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3v18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3v18",
      stroke: color
    })]
  });
}));
export { IconGrid3x3 };
