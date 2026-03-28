import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconShieldCancel = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12.277 20.925c-.092 .026 -.184 .051 -.277 .075a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .145 6.232",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 21l4 -4",
      stroke: color
    })]
  });
}));
export { IconShieldCancel };
