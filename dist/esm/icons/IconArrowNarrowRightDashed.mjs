import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowNarrowRightDashed = themed(memo(function (props) {
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
      d: "M5 12h.5m3 0h1.5m3 0h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 16l4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 8l4 4",
      stroke: color
    })]
  });
}));
export { IconArrowNarrowRightDashed };
