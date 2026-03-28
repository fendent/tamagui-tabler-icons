import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrencyPaanga = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 20v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 6v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 6h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 6v12",
      stroke: color
    })]
  });
}));
export { IconCurrencyPaanga };
