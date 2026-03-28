import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconIceCream = themed(memo(function (props) {
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
      d: "M12 21.5v-4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 17h8v-10a4 4 0 1 0 -8 0v10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 10.5l8 -3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 14.5l8 -3.5",
      stroke: color
    })]
  });
}));
export { IconIceCream };
