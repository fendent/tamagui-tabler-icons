import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRippleDown = themed(memo(function (props) {
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
      d: "M3 7q 4.5 -3 9 0t 9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17q 4.5 -3 9 0q .213 .142 .427 .27",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12q 4.5 -3 9 0q 2.006 1.338 4.012 1.482",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 19l-3 3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconRippleDown };
