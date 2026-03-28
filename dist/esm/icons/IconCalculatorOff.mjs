import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCalculatorOff = themed(memo(function (props) {
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
      d: "M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-14c0 -.295 .064 -.575 .178 -.827m2.822 -1.173h11a2 2 0 0 1 2 2v11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 14v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 14v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 17v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 17v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconCalculatorOff };
