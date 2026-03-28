import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconColumns3Filled = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 2h2a1 1 0 0 1 1 1v18a1 1 0 0 1 -1 1h-2a2 2 0 0 1 -2 -2v-16a2 2 0 0 1 2 -2"
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v18a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1"
    })]
  });
}));
export { IconColumns3Filled };
