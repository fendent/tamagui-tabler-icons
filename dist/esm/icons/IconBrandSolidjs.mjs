import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandSolidjs = themed(memo(function (props) {
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
      d: "M2 17.5c4.667 3 8 4.5 10 4.5c2.5 0 4 -1.5 4 -3.5s-1.5 -3.5 -4 -3.5c-2 0 -5.333 .833 -10 2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 13.5c4.667 -1.667 8 -2.5 10 -2.5c2.5 0 4 1.5 4 3.5c0 .738 -.204 1.408 -.588 1.96l-2.883 3.825",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 6.5c-4 -3 -8 -4.5 -10 -4.5c-2.04 0 -2.618 .463 -3.419 1.545",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 17.5l3 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 6.5l-3 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.581 3.545l-2.953 3.711",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.416 12.662c-1.51 -.476 -2.416 -1.479 -2.416 -3.162c0 -2.5 1.5 -3.5 4 -3.5c1.688 0 5.087 1.068 8.198 3.204a114.76 114.76 0 0 1 1.802 1.296l-2.302 .785",
      stroke: color
    })]
  });
}));
export { IconBrandSolidjs };
