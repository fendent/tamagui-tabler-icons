import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDatabase = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 6v6a8 3 0 0 0 16 0v-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12v6a8 3 0 0 0 16 0v-6",
      stroke: color
    })]
  });
}));
export { IconDatabase };
