import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTopologyStar = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.5 7.5l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.5 16.5l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.5 13.5l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.5 7.5l-3 3",
      stroke: color
    })]
  });
}));
export { IconTopologyStar };
