import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTrafficConeOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 20h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.4 10h.6m4 0h.6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.8 15h7.2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 20l3.5 -10.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconTrafficConeOff };
