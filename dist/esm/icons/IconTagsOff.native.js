import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTagsOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16.296 12.296l-5.71 -5.71",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 6h-1a2 2 0 0 0 -2 2v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.278 -3.278",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 19l.496 -.496",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.384 16.367a4.822 4.822 0 0 0 -.792 -5.775l-4.592 -4.592",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 10h-.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconTagsOff };
