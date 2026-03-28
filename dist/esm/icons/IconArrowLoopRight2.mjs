import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowLoopRight2 = themed(memo(function (props) {
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
      d: "M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 16l4 -4l-4 -4",
      stroke: color
    })]
  });
}));
export { IconArrowLoopRight2 };
