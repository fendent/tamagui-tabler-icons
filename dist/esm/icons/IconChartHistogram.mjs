import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChartHistogram = themed(memo(function (props) {
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
      d: "M3 3v18h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 13v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 11c6 0 5 -5 9 -5s3 5 9 5",
      stroke: color
    })]
  });
}));
export { IconChartHistogram };
