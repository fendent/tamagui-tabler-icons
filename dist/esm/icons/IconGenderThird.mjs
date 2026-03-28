import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGenderThird = themed(memo(function (props) {
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
      d: "M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 12h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12l-5 -4v8l5 -4",
      stroke: color
    })]
  });
}));
export { IconGenderThird };
