import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrencyKroneDanish = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 6v12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12c3.5 0 6 -3 6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12c3.5 0 6 3 6 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 10v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 10a4 4 0 0 0 -4 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 18.01v-.01",
      stroke: color
    })]
  });
}));
export { IconCurrencyKroneDanish };
