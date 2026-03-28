import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMathXDivideY = themed(memo(function (props) {
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
      d: "M9 3l6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 9l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 15l3 4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15l-4.5 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12h14",
      stroke: color
    })]
  });
}));
export { IconMathXDivideY };
