import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAdOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 15v-4a2 2 0 0 1 2 -2m2 2v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 13h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 9v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.115 12.131c.33 .149 .595 .412 .747 .74",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconAdOff };
