import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandZhihu = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 6h6v12h-2l-2 2l-1 -2h-1l0 -12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12h6.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.5 6h-5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 6v7c0 4.5 -2 5.5 -4 7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 18l-3 -5",
      stroke: color
    })]
  });
}));
export { IconBrandZhihu };
