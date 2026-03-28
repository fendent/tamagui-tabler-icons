import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTractor = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 15l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.5 17l6.5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 5h-1a1 1 0 0 0 -1 1v4",
      stroke: color
    })]
  });
}));
export { IconTractor };
