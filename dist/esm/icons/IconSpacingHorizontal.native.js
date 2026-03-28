import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSpacingHorizontal = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 8v8",
      stroke: color
    })]
  });
}));
export { IconSpacingHorizontal };
