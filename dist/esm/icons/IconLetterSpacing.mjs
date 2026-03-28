import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLetterSpacing = themed(memo(function (props) {
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
      d: "M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 4l3 8l3 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 18h14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20l2 -2l-2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 16l-2 2l2 2",
      stroke: color
    })]
  });
}));
export { IconLetterSpacing };
