import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAugmentedReality = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 8v-2a2 2 0 0 1 2 -2h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 16v2a2 2 0 0 0 2 2h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 4h2a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 20h2a2 2 0 0 0 2 -2v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12.5l4 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5l-4 2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 10v4.5l4 2.5",
      stroke: color
    })]
  });
}));
export { IconAugmentedReality };
