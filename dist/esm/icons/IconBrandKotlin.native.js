import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandKotlin = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20 20h-16v-16h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20l16 -16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12l8 -8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12l8 8",
      stroke: color
    })]
  });
}));
export { IconBrandKotlin };
