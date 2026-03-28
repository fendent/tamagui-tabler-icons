import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLayoutKanbanFilled = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */_jsx(Path, {
      d: "M10 3a1 1 0 0 1 0 2h-6a1 1 0 1 1 0 -2z"
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 3a1 1 0 0 1 0 2h-6a1 1 0 0 1 0 -2z"
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 7a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z"
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 7a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z"
    })]
  });
}));
export { IconLayoutKanbanFilled };
