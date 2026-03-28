import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandOnlyfans = themed(memo(function (props) {
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
      d: "M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 16c2.5 0 6.42 -1.467 7 -4h-6c3 -1 6.44 -3.533 7 -6h-4c-3.03 0 -3.764 -.196 -5 1.5",
      stroke: color
    })]
  });
}));
export { IconBrandOnlyfans };
