import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceScreen = themed(memo(function (props) {
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
      d: "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 7l-6 10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 14l-1.75 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.75 7l-1.75 3",
      stroke: color
    })]
  });
}));
export { IconDeviceScreen };
