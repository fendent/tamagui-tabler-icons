import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconToolsKitchen3 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 12v9",
      stroke: color
    })]
  });
}));
export { IconToolsKitchen3 };
