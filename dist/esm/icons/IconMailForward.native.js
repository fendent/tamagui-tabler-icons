import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMailForward = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 6l9 6l9 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 18h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 15l3 3l-3 3",
      stroke: color
    })]
  });
}));
export { IconMailForward };
