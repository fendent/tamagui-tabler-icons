import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMagnetOff = themed(memo(function (props) {
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
      d: "M7 3a2 2 0 0 1 2 2m0 4v4a3 3 0 0 0 5.552 1.578m.448 -3.578v-6a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a7.99 7.99 0 0 1 -.424 2.577m-1.463 2.584a8 8 0 0 1 -14.113 -5.161v-8c0 -.297 .065 -.58 .181 -.833",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconMagnetOff };
