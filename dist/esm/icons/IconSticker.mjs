import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSticker = themed(memo(function (props) {
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
      d: "M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12a8 8 0 1 1 -8 -8",
      stroke: color
    })]
  });
}));
export { IconSticker };
