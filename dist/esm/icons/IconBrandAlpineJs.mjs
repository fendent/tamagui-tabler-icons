import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandAlpineJs = themed(memo(function (props) {
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
      d: "M3 11.5l4.5 4.5h9l-9 -9l-4.5 4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5",
      stroke: color
    })]
  });
}));
export { IconBrandAlpineJs };
