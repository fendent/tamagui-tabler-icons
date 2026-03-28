import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLocationCode = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11.505 17.01l-1.505 -3.01l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.677 10.184",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 21l2 -2l-2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17l-2 2l2 2",
      stroke: color
    })]
  });
}));
export { IconLocationCode };
