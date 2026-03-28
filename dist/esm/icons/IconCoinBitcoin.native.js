import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCoinBitcoin = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 7v10v-9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 7v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 16v1",
      stroke: color
    })]
  });
}));
export { IconCoinBitcoin };
