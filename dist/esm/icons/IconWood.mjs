import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWood = themed(memo(function (props) {
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
      d: "M6 5.5a6 2.5 0 1 0 12 0a6 2.5 0 1 0 -12 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097 .108l-1.586 1.586v4c0 1.61 -2.54 2.925 -5.725 3l-.275 0c-3.314 0 -6 -1.343 -6 -3v-2l-1.586 -1.586a1.414 1.414 0 0 1 1.586 -2.287v-6.627",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12.5v1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 16v1",
      stroke: color
    })]
  });
}));
export { IconWood };
