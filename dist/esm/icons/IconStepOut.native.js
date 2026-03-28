import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconStepOut = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 3l0 12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 7l-4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 7l4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    })]
  });
}));
export { IconStepOut };
