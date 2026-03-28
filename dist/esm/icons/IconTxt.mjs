import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTxt = themed(memo(function (props) {
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
      d: "M3 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 8l4 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16l4 -8",
      stroke: color
    })]
  });
}));
export { IconTxt };
