import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconListCheck = themed(memo(function (props) {
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
      d: "M3.5 5.5l1.5 1.5l2.5 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.5 11.5l1.5 1.5l2.5 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.5 17.5l1.5 1.5l2.5 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 6l9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 12l9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 18l9 0",
      stroke: color
    })]
  });
}));
export { IconListCheck };
