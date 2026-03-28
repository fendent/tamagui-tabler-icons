import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGenderMale = themed(memo(function (props) {
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
      d: "M5 14a5 5 0 1 0 10 0a5 5 0 1 0 -10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 5l-5.4 5.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 5h-5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 5v5",
      stroke: color
    })]
  });
}));
export { IconGenderMale };
