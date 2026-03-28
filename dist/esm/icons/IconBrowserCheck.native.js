import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrowserCheck = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 8h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 4v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.5 14.5l1.5 1.5l3 -3",
      stroke: color
    })]
  });
}));
export { IconBrowserCheck };
