import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSpaces = themed(memo(function (props) {
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
      d: "M6.045 9.777a6 6 0 1 0 5.951 .023",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.997 20.196a6 6 0 1 0 -2.948 -5.97",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.95 9.785q .05 -.386 .05 -.785a6 6 0 1 0 -3.056 5.23",
      stroke: color
    })]
  });
}));
export { IconSpaces };
