import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMist = themed(memo(function (props) {
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
      d: "M5 5h3m4 0h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 10h11m4 0h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 15h5m4 0h7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 20h9m4 0h3",
      stroke: color
    })]
  });
}));
export { IconMist };
