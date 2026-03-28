import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandMessenger = themed(memo(function (props) {
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
      d: "M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13l3 -2l2 2l3 -2",
      stroke: color
    })]
  });
}));
export { IconBrandMessenger };
