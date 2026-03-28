import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChartCovariate = themed(memo(function (props) {
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
      d: "M18 11h.009",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 15h.009",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6h.009",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 10h.009",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21l17 -17",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3v18h18",
      stroke: color
    })]
  });
}));
export { IconChartCovariate };
