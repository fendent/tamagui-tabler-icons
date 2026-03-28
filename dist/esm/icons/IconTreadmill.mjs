import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTreadmill = themed(memo(function (props) {
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
      d: "M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 14l4 1l.5 -.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18v-3l-3 -2.923l.75 -5.077",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 10v-2l4 -1l2.5 2.5l2.5 .5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 21l1 -11l2 -1",
      stroke: color
    })]
  });
}));
export { IconTreadmill };
