import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCircuitDiodeZener = themed(memo(function (props) {
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
      d: "M22 12h-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 12h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 7l8 5l-8 5l0 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 7h2v10h2",
      stroke: color
    })]
  });
}));
export { IconCircuitDiodeZener };
