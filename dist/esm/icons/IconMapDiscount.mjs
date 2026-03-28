import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMapDiscount = themed(memo(function (props) {
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
      d: "M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v8.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 4v13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 7v5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 21l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16v.01",
      stroke: color
    })]
  });
}));
export { IconMapDiscount };
