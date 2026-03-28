import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconZoomMoney = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 21l-6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 13v1m0 -8v1",
      stroke: color
    })]
  });
}));
export { IconZoomMoney };
