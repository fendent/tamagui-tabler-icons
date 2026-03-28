import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconUserDown = themed(memo(function (props) {
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
      d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 21v-2a4 4 0 0 1 4 -4h4c.342 0 .674 .043 .99 .124",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 19l-3 3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconUserDown };
