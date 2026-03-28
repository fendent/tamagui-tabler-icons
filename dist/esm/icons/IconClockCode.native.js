import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconClockCode = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20.931 13.111a9 9 0 1 0 -9.453 7.874",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 21l2 -2l-2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17l-2 2l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7v5l2 2",
      stroke: color
    })]
  });
}));
export { IconClockCode };
