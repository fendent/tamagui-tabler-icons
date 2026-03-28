import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowLeftRhombus = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 12h-13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 9l-3 3l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5",
      stroke: color
    })]
  });
}));
export { IconArrowLeftRhombus };
