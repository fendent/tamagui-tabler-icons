import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMeterCube = themed(memo(function (props) {
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
      d: "M17 5h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5",
      stroke: color
    })]
  });
}));
export { IconMeterCube };
