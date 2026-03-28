import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDna2 = themed(memo(function (props) {
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
      d: "M17 3v1c-.01 3.352 -1.68 6.023 -5.008 8.014c-3.328 1.99 3.336 -2 .008 -.014c-3.328 1.99 -5 4.662 -5.008 8.014v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 21.014v-1c-.01 -3.352 -1.68 -6.023 -5.008 -8.014c-3.328 -1.99 3.336 2 .008 .014c-3.328 -1.991 -5 -4.662 -5.008 -8.014v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 4h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 20h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 8h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16h8",
      stroke: color
    })]
  });
}));
export { IconDna2 };
