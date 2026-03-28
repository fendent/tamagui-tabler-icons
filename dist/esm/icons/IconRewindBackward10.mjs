import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRewindBackward10 = themed(memo(function (props) {
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
      d: "M7 9l-3 -3l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 14v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0",
      stroke: color
    })]
  });
}));
export { IconRewindBackward10 };
