import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPdf = themed(memo(function (props) {
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
      d: "M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h2a2 2 0 1 0 0 -4h-2v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 8h-4v8",
      stroke: color
    })]
  });
}));
export { IconPdf };
