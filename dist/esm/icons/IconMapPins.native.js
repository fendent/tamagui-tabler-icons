import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMapPins = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 7l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 15l0 .01",
      stroke: color
    })]
  });
}));
export { IconMapPins };
