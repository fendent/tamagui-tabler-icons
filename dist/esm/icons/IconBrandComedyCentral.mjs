import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandComedyCentral = themed(memo(function (props) {
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
      d: "M5.343 17.657a8 8 0 1 0 0 -11.314",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.828 9.172a4 4 0 1 0 0 5.656",
      stroke: color
    })]
  });
}));
export { IconBrandComedyCentral };
