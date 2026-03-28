import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconKerning = themed(memo(function (props) {
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
      d: "M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 9l3 6l3 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 20l6 -16",
      stroke: color
    })]
  });
}));
export { IconKerning };
