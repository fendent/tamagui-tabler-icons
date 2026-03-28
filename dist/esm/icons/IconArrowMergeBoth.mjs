import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowMergeBoth = themed(memo(function (props) {
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
      d: "M16 8l-4 -4l-4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20v-16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 18c-4 -1.333 -6 -4.667 -6 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 18c4 -1.333 6 -4.667 6 -10",
      stroke: color
    })]
  });
}));
export { IconArrowMergeBoth };
