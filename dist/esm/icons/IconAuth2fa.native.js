import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAuth2fa = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 16v-8h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12l3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 16v-6a2 2 0 0 1 4 0v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 13l4 0",
      stroke: color
    })]
  });
}));
export { IconAuth2fa };
