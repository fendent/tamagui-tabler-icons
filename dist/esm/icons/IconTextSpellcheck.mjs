import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTextSpellcheck = themed(memo(function (props) {
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
      d: "M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 10h7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 18l3 3l7 -7",
      stroke: color
    })]
  });
}));
export { IconTextSpellcheck };
