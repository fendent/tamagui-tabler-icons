import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTypography = themed(memo(function (props) {
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
      d: "M4 20l3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 20l7 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.9 15l6.9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.2 6.3l5.8 13.7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 20l6 -16l2 0l7 16",
      stroke: color
    })]
  });
}));
export { IconTypography };
