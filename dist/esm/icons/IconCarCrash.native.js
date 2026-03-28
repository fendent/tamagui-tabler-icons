import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCarCrash = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 8v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 12h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.5 15.5l1.5 1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.5 8.5l1.5 -1.5",
      stroke: color
    })]
  });
}));
export { IconCarCrash };
