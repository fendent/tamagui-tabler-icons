import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPlayFootball = themed(memo(function (props) {
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
      d: "M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17l5 1l.75 -1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 21v-4l-4 -3l1 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12v-3l5 -1l3 3l3 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1",
      stroke: color
    })]
  });
}));
export { IconPlayFootball };
