import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCupOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 8h-3v3h6m4 0h4v-3h-7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.5 11l-.323 2.154m-.525 3.497l-.652 4.349h-8l-1.5 -10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 8v-1c0 -.296 .064 -.577 .18 -.83m2.82 -1.17h7a2 2 0 0 1 2 2v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 5v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconCupOff };
