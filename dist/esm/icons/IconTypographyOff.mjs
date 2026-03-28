import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTypographyOff = themed(memo(function (props) {
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
      d: "M4 20h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 20h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.9 15h6.9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 13l3 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 20l4.09 -10.906",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.181 6.183l.819 -2.183h2l3.904 8.924",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconTypographyOff };
