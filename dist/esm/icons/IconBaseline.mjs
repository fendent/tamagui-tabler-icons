import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBaseline = themed(memo(function (props) {
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
      d: "M4 20h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16v-8a4 4 0 1 1 8 0v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 10h8",
      stroke: color
    })]
  });
}));
export { IconBaseline };
