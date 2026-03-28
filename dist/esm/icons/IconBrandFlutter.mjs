import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandFlutter = themed(memo(function (props) {
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
      d: "M7 14l-3 -3l8 -8h6l-11 11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 21l-5 -5l5 -5h5l-5 5l5 5l-5 0",
      stroke: color
    })]
  });
}));
export { IconBrandFlutter };
