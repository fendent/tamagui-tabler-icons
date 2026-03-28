import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCongruentTo = themed(memo(function (props) {
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
      d: "M5 13h14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 17h14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 7.686c2.333 -2.624 4.667 -1.856 7 .064s4.667 2.688 7 .064",
      stroke: color
    })]
  });
}));
export { IconCongruentTo };
