import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrencyBaht = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 6h5a3 3 0 0 1 3 3v.143a2.857 2.857 0 0 1 -2.857 2.857h-5.143",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12h5a3 3 0 0 1 3 3v.143a2.857 2.857 0 0 1 -2.857 2.857h-5.143",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 6v12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 4v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 18v2",
      stroke: color
    })]
  });
}));
export { IconCurrencyBaht };
