import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWindmill = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9",
      stroke: color
    })]
  });
}));
export { IconWindmill };
