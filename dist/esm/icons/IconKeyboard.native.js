import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconKeyboard = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 10l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 10l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 10l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 10l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 14l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 14l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 14l4 .01",
      stroke: color
    })]
  });
}));
export { IconKeyboard };
