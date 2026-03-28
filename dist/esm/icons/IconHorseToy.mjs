import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHorseToy = themed(memo(function (props) {
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
      d: "M3.5 17.5c5.667 4.667 11.333 4.667 17 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 18.5l2 -9.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 20l2 -5h4l2 5",
      stroke: color
    })]
  });
}));
export { IconHorseToy };
