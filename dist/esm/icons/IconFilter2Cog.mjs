import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFilter2Cog = themed(memo(function (props) {
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
      d: "M4 6h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.001 21c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586m0 4c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586m0 4v1.5m0 -5.5v-1.5m3.031 1.75l-1.299 .75m-3.463 2l-1.3 .75m0 -3.5l1.3 .75m3.463 2l1.3 .75",
      stroke: color
    })]
  });
}));
export { IconFilter2Cog };
