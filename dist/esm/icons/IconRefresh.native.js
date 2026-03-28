import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRefresh = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",
      stroke: color
    })]
  });
}));
export { IconRefresh };
