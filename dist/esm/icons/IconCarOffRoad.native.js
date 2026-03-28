import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCarOffRoad = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 17h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 17a2 2 0 1 1 -4 0a2 2 0 0 1 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 17a2 2 0 1 1 -4 0a2 2 0 0 1 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 10l-2 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 17h2v-5a2 2 0 0 0 -2 -2h-5v2h-2.586a1 1 0 0 1 -.707 -.293l-1.121 -1.121a2 2 0 0 0 -1.414 -.586h-4.172a1 1 0 0 0 -1 1v6h2",
      stroke: color
    })]
  });
}));
export { IconCarOffRoad };
