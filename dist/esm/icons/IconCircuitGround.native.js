import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCircuitGround = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 13v-8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 13h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 16h10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 19h4",
      stroke: color
    })]
  });
}));
export { IconCircuitGround };
