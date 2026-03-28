import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconClockUp = themed(memo(function (props) {
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
      d: "M20.983 12.548a9 9 0 1 0 -8.45 8.436",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 19l-3 -3l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7v5l2.5 2.5",
      stroke: color
    })]
  });
}));
export { IconClockUp };
