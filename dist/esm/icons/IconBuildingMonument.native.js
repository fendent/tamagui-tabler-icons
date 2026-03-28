import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBuildingMonument = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 18l2 -13l2 -2l2 2l2 13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 21v-3h14v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 21l18 0",
      stroke: color
    })]
  });
}));
export { IconBuildingMonument };
