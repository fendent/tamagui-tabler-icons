import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandAppstore = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 14h5m2.9 0h2.1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805",
      stroke: color
    })]
  });
}));
export { IconBrandAppstore };
