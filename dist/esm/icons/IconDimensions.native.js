import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDimensions = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 5h11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7l2 -2l-2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 3l-2 2l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 10v11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 19l2 2l2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 12l-2 -2l-2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2l0 -7",
      stroke: color
    })]
  });
}));
export { IconDimensions };
