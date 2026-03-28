import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFilter2Discount = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 6h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 12h12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 18h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 16v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 21l5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 21v.01",
      stroke: color
    })]
  });
}));
export { IconFilter2Discount };
