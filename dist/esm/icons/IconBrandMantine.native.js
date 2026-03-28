import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandMantine = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 9h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 15h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12h.01",
      stroke: color
    })]
  });
}));
export { IconBrandMantine };
