import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceCameraPhone = themed(memo(function (props) {
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
      d: "M16 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 15v-1",
      stroke: color
    })]
  });
}));
export { IconDeviceCameraPhone };
