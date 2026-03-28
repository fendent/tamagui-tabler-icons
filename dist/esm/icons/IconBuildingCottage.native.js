import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBuildingCottage = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 21l18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5",
      stroke: color
    })]
  });
}));
export { IconBuildingCottage };
