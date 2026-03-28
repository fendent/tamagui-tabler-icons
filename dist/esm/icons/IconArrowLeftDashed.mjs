import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowLeftDashed = themed(memo(function (props) {
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
      d: "M5 12h6m3 0h1.5m3 0h.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12l6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12l6 -6",
      stroke: color
    })]
  });
}));
export { IconArrowLeftDashed };
