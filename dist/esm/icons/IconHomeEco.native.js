import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHomeEco = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 22s0 -2 3 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3",
      stroke: color
    })]
  });
}));
export { IconHomeEco };
