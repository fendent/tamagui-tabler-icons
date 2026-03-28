import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandThreejs = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 22l-5 -19l19 5.5l-14 13.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.573 17.58l-1.573 -6.58l6.13 2.179",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.527 4.893l1.473 6.107l-6.31 -1.564l4.837 -4.543",
      stroke: color
    })]
  });
}));
export { IconBrandThreejs };
