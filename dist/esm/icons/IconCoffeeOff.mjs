import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCoffeeOff = themed(memo(function (props) {
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
      d: "M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.73 -.565 1.783 -.923 3 -.99",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3c-.194 .14 -.364 .305 -.506 .49",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10h3v3m-.257 3.743a6 6 0 0 1 -5.743 4.257h-2a6 6 0 0 1 -6 -6v-5h7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.116 16.124a3 3 0 0 0 -3.118 -4.953",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconCoffeeOff };
