import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSatellite = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 10l-3 3l3 3l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 6l3 -3l3 3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12l1.5 1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.5 17a2.5 2.5 0 0 0 2.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 21a6 6 0 0 0 6 -6",
      stroke: color
    })]
  });
}));
export { IconSatellite };
