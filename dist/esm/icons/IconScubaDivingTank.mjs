import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconScubaDivingTank = themed(memo(function (props) {
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
      d: "M8 11a4 4 0 1 1 8 0v5h-8l0 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 4h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 4a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    })]
  });
}));
export { IconScubaDivingTank };
