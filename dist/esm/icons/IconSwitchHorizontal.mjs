import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSwitchHorizontal = themed(memo(function (props) {
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
      d: "M16 3l4 4l-4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 7l10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13l-4 4l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 17l9 0",
      stroke: color
    })]
  });
}));
export { IconSwitchHorizontal };
