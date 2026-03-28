import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLifebuoy = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 15l3.35 3.35",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 15l-3.35 3.35",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.65 5.65l3.35 3.35",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.35 5.65l-3.35 3.35",
      stroke: color
    })]
  });
}));
export { IconLifebuoy };
