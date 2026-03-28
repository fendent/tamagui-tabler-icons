import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMathCtg = themed(memo(function (props) {
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
      d: "M10 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0",
      stroke: color
    })]
  });
}));
export { IconMathCtg };
