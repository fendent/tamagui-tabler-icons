import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRadar = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 9a5 5 0 1 0 -7 7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.486 9a9 9 0 1 0 -11.482 11.495",
      stroke: color
    })]
  });
}));
export { IconRadar };
