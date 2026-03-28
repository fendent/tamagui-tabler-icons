import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTagPlus = themed(memo(function (props) {
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
      d: "M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21.002 13c0 -.617 -.235 -1.233 -.706 -1.704l-7.71 -7.71c-.375 -.375 -.884 -.586 -1.414 -.586h-5.172c-1.657 0 -3 1.343 -3 3v5.172c0 .53 .211 1.039 .586 1.414l7.71 7.71c.471 .47 1.087 .706 1.704 .706",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 19h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16v6",
      stroke: color
    })]
  });
}));
export { IconTagPlus };
