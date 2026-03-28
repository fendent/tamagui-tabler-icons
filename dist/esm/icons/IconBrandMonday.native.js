import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandMonday = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M18 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264 .447 -.75 .749 -1.305 .749a1.5 1.5 0 0 1 -1.271 -2.297l3.906 -6.827a1.5 1.5 0 0 1 1.365 -.876",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264 .447 -.75 .749 -1.305 .749a1.5 1.5 0 0 1 -1.271 -2.297l3.906 -6.827a1.5 1.5 0 0 1 1.365 -.876",
      stroke: color
    })]
  });
}));
export { IconBrandMonday };
