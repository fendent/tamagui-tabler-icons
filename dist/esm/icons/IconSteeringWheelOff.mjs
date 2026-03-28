import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSteeringWheelOff = themed(memo(function (props) {
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
      d: "M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.595 10.576a2 2 0 1 0 2.827 2.83",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 14v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12l-6.75 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.542 11.543l5.208 -1.543",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconSteeringWheelOff };
