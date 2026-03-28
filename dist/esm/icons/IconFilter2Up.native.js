import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFilter2Up = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 6h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 12h12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 18h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 22v-6m0 0l3 3m-3 -3l-3 3",
      stroke: color
    })]
  });
}));
export { IconFilter2Up };
