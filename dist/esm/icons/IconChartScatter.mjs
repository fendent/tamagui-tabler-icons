import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChartScatter = themed(memo(function (props) {
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
      d: "M8 15.015v.015",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16.015v.015",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 7.03v.015",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 11.03v.015",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 11.03v.015",
      stroke: color
    })]
  });
}));
export { IconChartScatter };
