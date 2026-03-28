import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCrane = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 21h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 21v-18l-6 6h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 3l10 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 9v4a2 2 0 1 1 -2 2",
      stroke: color
    })]
  });
}));
export { IconCrane };
