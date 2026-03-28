import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTextPlus = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19 10h-14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 6h14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 14h-9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 18h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 15v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 18h6",
      stroke: color
    })]
  });
}));
export { IconTextPlus };
