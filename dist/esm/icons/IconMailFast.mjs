import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMailFast = themed(memo(function (props) {
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
      d: "M3 7h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 11h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982",
      stroke: color
    })]
  });
}));
export { IconMailFast };
