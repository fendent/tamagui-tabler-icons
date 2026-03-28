import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCrystalBall = themed(memo(function (props) {
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
      d: "M6.73 17.018a8 8 0 1 1 10.54 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 7a3 3 0 0 0 -3 3",
      stroke: color
    })]
  });
}));
export { IconCrystalBall };
