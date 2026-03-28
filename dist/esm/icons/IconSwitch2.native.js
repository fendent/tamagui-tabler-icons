import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSwitch2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 4l3 3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 7h5l7 10h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 20l3 -3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconSwitch2 };
