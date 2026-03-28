import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconNeedleThread = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */_jsx(Path, {
      d: "M3 21c-.667 -.667 3.262 -6.236 11.785 -16.709a3.5 3.5 0 1 1 5.078 4.791c-10.575 8.612 -16.196 12.585 -16.863 11.918",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.5 6.5l-1 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 7c-2.333 -2.667 -3.5 -4 -5 -4s-2 1 -2 2c0 4 8.161 8.406 6 11c-1.056 1.268 -3.363 1.285 -5.75 .808",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.739 15.425c-1.393 -.565 -3.739 -1.925 -3.739 -3.425",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.5 9.5l1.5 1.5",
      stroke: color
    })]
  });
}));
export { IconNeedleThread };
