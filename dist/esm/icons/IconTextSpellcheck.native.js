import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTextSpellcheck = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 10h7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 18l3 3l7 -7",
      stroke: color
    })]
  });
}));
export { IconTextSpellcheck };
