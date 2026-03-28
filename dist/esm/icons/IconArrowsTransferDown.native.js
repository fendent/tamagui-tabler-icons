import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowsTransferDown = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 3v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 18l-3 3l-3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 21v-18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 6l-3 -3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 21v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 15v-2",
      stroke: color
    })]
  });
}));
export { IconArrowsTransferDown };
