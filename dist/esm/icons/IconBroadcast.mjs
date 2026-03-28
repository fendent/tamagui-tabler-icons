import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBroadcast = themed(memo(function (props) {
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
      d: "M18.364 19.364a9 9 0 1 0 -12.728 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.536 16.536a5 5 0 1 0 -7.072 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 13a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    })]
  });
}));
export { IconBroadcast };
