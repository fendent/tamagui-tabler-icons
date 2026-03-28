import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFilter2Edit = themed(memo(function (props) {
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
      d: "M4 6h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12h11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.42 15.61c.195 -.195 .426 -.35 .681 -.455c.255 -.106 .528 -.16 .804 -.16c.276 0 .549 .054 .804 .16c.255 .106 .486 .26 .681 .455c.195 .195 .35 .427 .455 .681c.106 .255 .16 .528 .16 .804c0 .276 -.054 .549 -.16 .804c-.105 .255 -.26 .486 -.455 .681l-3.39 3.42h-3v-3l3.42 -3.39",
      stroke: color
    })]
  });
}));
export { IconFilter2Edit };
