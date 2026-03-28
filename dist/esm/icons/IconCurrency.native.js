import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrency = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 4l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 4l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 20l-3 -3",
      stroke: color
    })]
  });
}));
export { IconCurrency };
