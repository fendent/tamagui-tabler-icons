import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWorldStar = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 12a9 9 0 1 0 -9.968 8.948",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.6 9h16.8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.6 15h6.4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.5 3a17.001 17.001 0 0 0 -1.886 13.802",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.5 3a16.982 16.982 0 0 1 2.549 8.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138",
      stroke: color
    })]
  });
}));
export { IconWorldStar };
