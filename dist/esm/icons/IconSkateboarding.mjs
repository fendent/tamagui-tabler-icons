import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSkateboarding = themed(memo(function (props) {
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
      d: "M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.5 15h3.5l.75 -1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 19v-5l-2.5 -3l2.5 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 8l3 -1h4l1 3h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1",
      stroke: color
    })]
  });
}));
export { IconSkateboarding };
