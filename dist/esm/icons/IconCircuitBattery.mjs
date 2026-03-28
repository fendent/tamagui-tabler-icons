import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCircuitBattery = themed(memo(function (props) {
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
      d: "M2 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 5v14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 9v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 5v14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 9v6",
      stroke: color
    })]
  });
}));
export { IconCircuitBattery };
