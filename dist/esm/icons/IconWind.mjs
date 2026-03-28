import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWind = themed(memo(function (props) {
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
      d: "M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24",
      stroke: color
    })]
  });
}));
export { IconWind };
