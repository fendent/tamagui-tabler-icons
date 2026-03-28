import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMathFunctionOff = themed(memo(function (props) {
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
      d: "M14 10h1c.882 0 .986 .777 1.694 2.692",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 17c.864 0 1.727 -.663 2.495 -1.512m1.717 -2.302c.993 -1.45 2.39 -3.186 3.788 -3.186",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 19c0 1.5 .5 2 2 2s2 -4 3 -9c.237 -1.186 .446 -2.317 .647 -3.35m.727 -3.248c.423 -1.492 .91 -2.402 1.626 -2.402c1.5 0 2 .5 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconMathFunctionOff };
