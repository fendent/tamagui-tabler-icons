import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsShuffle2 = themed(memo(function (props) {
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
      d: "M18 4l3 3l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 20l3 -3l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5",
      stroke: color
    })]
  });
}));
export { IconArrowsShuffle2 };
