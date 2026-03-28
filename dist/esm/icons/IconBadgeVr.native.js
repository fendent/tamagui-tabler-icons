import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBadgeVr = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 9l2 6l2 -6",
      stroke: color
    })]
  });
}));
export { IconBadgeVr };
