import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBasketPause = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 10l-2 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 10l2 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 20h-5.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.478 2.725",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 17v5",
      stroke: color
    })]
  });
}));
export { IconBasketPause };
