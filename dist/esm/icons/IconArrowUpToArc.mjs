import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowUpToArc = themed(memo(function (props) {
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
      d: "M12 21v-12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13l4 -4l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12a9 9 0 0 0 -18 0",
      stroke: color
    })]
  });
}));
export { IconArrowUpToArc };
