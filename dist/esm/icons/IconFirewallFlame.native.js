import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFirewallFlame = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M15.5 16q 2.5 1.5 2.5 -1v-2s4 1.06 4 5c0 1.664 -.649 3.338 -2 4v-.25c0 -.957 -1.053 -1.75 -2 -1.75s-2 .793 -2 1.75v.25c-1.351 -.662 -2 -2 -2 -3.5s1.5 -2.5 1.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 3v13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 9h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 21h-1a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 15h7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 3v7",
      stroke: color
    })]
  });
}));
export { IconFirewallFlame };
