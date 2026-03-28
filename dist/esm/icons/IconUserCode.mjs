import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconUserCode = themed(memo(function (props) {
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
      d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 21v-2a4 4 0 0 1 4 -4h3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 21l2 -2l-2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17l-2 2l2 2",
      stroke: color
    })]
  });
}));
export { IconUserCode };
