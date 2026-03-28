import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWashTumbleOff = themed(memo(function (props) {
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
      d: "M20.116 20.127a2.99 2.99 0 0 1 -2.116 .873h-12a3 3 0 0 1 -3 -3v-12c0 -.827 .335 -1.576 .877 -2.12m3.123 -.88h11a3 3 0 0 1 3 3v11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.744 13.74a6 6 0 0 0 -7.486 -7.482m-2.499 1.497a6 6 0 1 0 8.48 8.49",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconWashTumbleOff };
