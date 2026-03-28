import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandVlc = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13.79 4.337l3.101 9.305c.33 .985 -.113 2.07 -1.02 2.499a9.148 9.148 0 0 1 -7.742 0c-.907 -.428 -1.35 -1.514 -1.02 -2.499l3.1 -9.305c.267 -.8 .985 -1.337 1.791 -1.337c.807 0 1.525 .537 1.79 1.337",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 14h-1.429a2 2 0 0 0 -1.923 1.45l-.571 2a2 2 0 0 0 1.923 2.55h13.998a2 2 0 0 0 1.923 -2.55l-.572 -2a2 2 0 0 0 -1.923 -1.45h-1.426",
      stroke: color
    })]
  });
}));
export { IconBrandVlc };
