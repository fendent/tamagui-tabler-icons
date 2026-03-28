import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconQuotes = themed(memo(function (props) {
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
      d: "M4 12c-1.333 -1.854 -1.333 -4.146 0 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12c-1.333 -1.854 -1.333 -4.146 0 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 18c1.333 -1.854 1.333 -4.146 0 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18c1.333 -1.854 1.333 -4.146 0 -6",
      stroke: color
    })]
  });
}));
export { IconQuotes };
