import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBaguette = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5.628 11.283l5.644 -5.637c2.665 -2.663 5.924 -3.747 8.663 -1.205l.188 .181a2.987 2.987 0 0 1 0 4.228l-11.287 11.274a3 3 0 0 1 -4.089 .135l-.143 -.135c-2.728 -2.724 -1.704 -6.117 1.024 -8.841",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.5 7.5l1.5 3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.5 10.5l1.5 3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.5 4.5l1.5 3.5",
      stroke: color
    })]
  });
}));
export { IconBaguette };
