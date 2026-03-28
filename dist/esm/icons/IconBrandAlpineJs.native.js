import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandAlpineJs = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 11.5l4.5 4.5h9l-9 -9l-4.5 4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5",
      stroke: color
    })]
  });
}));
export { IconBrandAlpineJs };
