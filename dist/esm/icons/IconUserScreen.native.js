import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconUserScreen = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2",
      stroke: color
    })]
  });
}));
export { IconUserScreen };
