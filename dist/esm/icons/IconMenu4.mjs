import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMenu4 = themed(memo(function (props) {
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
      d: "M7 6h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 12h13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 18h10",
      stroke: color
    })]
  });
}));
export { IconMenu4 };
