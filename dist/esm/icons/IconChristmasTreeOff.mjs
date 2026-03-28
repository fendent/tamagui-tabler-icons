import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChristmasTreeOff = themed(memo(function (props) {
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
      d: "M9.5 5.5l2.5 -2.5l4 4l-2 1l4 4l-1.5 .5m.5 4.5h-12l4 -4l-3 -1l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconChristmasTreeOff };
