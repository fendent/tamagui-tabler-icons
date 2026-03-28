import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArcheryArrow = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 7v3h3l3 -3h-3v-3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 10l-9 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 15v4h4",
      stroke: color
    })]
  });
}));
export { IconArcheryArrow };
