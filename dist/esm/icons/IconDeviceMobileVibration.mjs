import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceMobileVibration = themed(memo(function (props) {
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
      d: "M3 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 17l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 6l-2 3l2 3l-2 3l2 3",
      stroke: color
    })]
  });
}));
export { IconDeviceMobileVibration };
