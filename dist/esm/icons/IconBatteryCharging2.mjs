import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBatteryCharging2 = themed(memo(function (props) {
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
      d: "M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 15h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 22v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 15v-2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 15v-2.5",
      stroke: color
    })]
  });
}));
export { IconBatteryCharging2 };
