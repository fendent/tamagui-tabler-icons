import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBlind = themed(memo(function (props) {
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
      d: "M9 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 21l3 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 21l-2 -4l-3 -3l1 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12l2 -3l4 -1l6 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.5 14l3.5 7",
      stroke: color
    })]
  });
}));
export { IconBlind };
