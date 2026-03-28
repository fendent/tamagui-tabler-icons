import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandD3 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 4h1.8c3.976 0 7.2 3.582 7.2 8s-3.224 8 -7.2 8h-1.8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 4h5.472c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.472 12h-2.472",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.472 12h-2.352",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.472 12c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4h-5.472",
      stroke: color
    })]
  });
}));
export { IconBrandD3 };
