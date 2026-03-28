import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconShadowOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 12h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 15h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 18h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 9h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 6h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconShadowOff };
