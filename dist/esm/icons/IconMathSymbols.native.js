import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMathSymbols = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12l18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3l0 18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.5 4.5l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.5 4.5l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 4l0 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 6l4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 16l.01 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 20l.01 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 18l4 0",
      stroke: color
    })]
  });
}));
export { IconMathSymbols };
