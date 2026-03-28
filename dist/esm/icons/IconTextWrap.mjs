import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTextWrap = themed(memo(function (props) {
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
      d: "M4 6l16 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18l5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2",
      stroke: color
    })]
  });
}));
export { IconTextWrap };
