import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAlignBoxBottomCenter = themed(memo(function (props) {
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
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 15v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 11v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 13v4",
      stroke: color
    })]
  });
}));
export { IconAlignBoxBottomCenter };
