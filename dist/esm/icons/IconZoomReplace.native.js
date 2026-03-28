import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconZoomReplace = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 21l-6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.291 8a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 4v4h-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.705 12a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 16v-4h4",
      stroke: color
    })]
  });
}));
export { IconZoomReplace };
