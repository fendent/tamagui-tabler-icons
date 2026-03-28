import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPinned = themed(memo(function (props) {
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
      d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16l0 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4l8 0",
      stroke: color
    })]
  });
}));
export { IconPinned };
