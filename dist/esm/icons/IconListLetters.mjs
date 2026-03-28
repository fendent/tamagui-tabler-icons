import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconListLetters = themed(memo(function (props) {
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
      d: "M11 6h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 12h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 18h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 10v-4.5a1.5 1.5 0 0 1 3 0v4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6",
      stroke: color
    })]
  });
}));
export { IconListLetters };
