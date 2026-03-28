import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconList = themed(memo(function (props) {
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
      d: "M9 6l11 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12l11 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18l11 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 6l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 18l0 .01",
      stroke: color
    })]
  });
}));
export { IconList };
