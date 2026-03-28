import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAugmentedReality2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5l0 -4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 14.5v4.5l4 2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17l4 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 4h2",
      stroke: color
    })]
  });
}));
export { IconAugmentedReality2 };
