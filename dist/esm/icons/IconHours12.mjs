import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHours12 = themed(memo(function (props) {
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
      d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 13c.468 3.6 3.384 6.546 7 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 21v-6",
      stroke: color
    })]
  });
}));
export { IconHours12 };
