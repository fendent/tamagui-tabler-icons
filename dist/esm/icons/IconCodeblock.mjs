import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCodeblock = themed(memo(function (props) {
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
      d: "M5 4l-2 2l2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4l2 2l-2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 8l1 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7",
      stroke: color
    })]
  });
}));
export { IconCodeblock };
