import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDetailsOff = themed(memo(function (props) {
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
      d: "M5 19h14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.986 16.984a2 2 0 0 0 -.146 -.734l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.821 1.417m-1.469 2.534l-4.81 8.299a2 2 0 0 0 1.75 2.75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v5m0 4v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconDetailsOff };
