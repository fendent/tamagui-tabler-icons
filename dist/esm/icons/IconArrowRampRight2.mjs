import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowRampRight2 = themed(memo(function (props) {
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
      d: "M6 3v8.707",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 14l4 -4l-4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 21c0 -6.075 4.925 -11 11 -11h3",
      stroke: color
    })]
  });
}));
export { IconArrowRampRight2 };
