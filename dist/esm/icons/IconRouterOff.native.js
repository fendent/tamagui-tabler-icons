import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRouterOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 17v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.226 8.2a4 4 0 0 1 6.024 .55",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.445 5.407a8 8 0 0 1 12.055 1.093",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconRouterOff };
