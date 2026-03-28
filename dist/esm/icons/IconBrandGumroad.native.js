import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandGumroad = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.5 13h2.5v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.024 9.382a4 4 0 1 0 -3.024 6.618c1.862 0 2.554 -1.278 3 -3",
      stroke: color
    })]
  });
}));
export { IconBrandGumroad };
