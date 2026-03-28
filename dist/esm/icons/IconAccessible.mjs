import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAccessible = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 7.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    })]
  });
}));
export { IconAccessible };
