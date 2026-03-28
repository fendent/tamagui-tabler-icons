import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMacroOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 15a6 6 0 0 0 11.47 2.467",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.53 15.53a6 6 0 0 0 -3.53 5.47",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21a6 6 0 0 0 -6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21v-10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.866 10.87a5.007 5.007 0 0 1 -3.734 -3.723m-.132 -4.147l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -2.604 4.389",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconMacroOff };
