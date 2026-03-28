import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRotateClockwise2 = themed(memo(function (props) {
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
      d: "M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.63 7.16l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.06 11l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.63 15.1l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.16 18.37l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 19.94l0 .01",
      stroke: color
    })]
  });
}));
export { IconRotateClockwise2 };
