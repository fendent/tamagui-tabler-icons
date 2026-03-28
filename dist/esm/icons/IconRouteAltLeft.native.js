import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRouteAltLeft = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 3h-5v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 3h5v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 6.01v-.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 8.02v-.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 10v.01",
      stroke: color
    })]
  });
}));
export { IconRouteAltLeft };
