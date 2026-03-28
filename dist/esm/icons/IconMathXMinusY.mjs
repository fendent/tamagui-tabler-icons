import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMathXMinusY = themed(memo(function (props) {
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
      d: "M2 9l6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 15l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 9l3 5.063",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 9l-4.8 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12h4",
      stroke: color
    })]
  });
}));
export { IconMathXMinusY };
