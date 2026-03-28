import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRouter = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 15a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 17l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 13l0 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.75 8.75a4 4 0 0 1 6.5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.5 6.5a8 8 0 0 1 13 0",
      stroke: color
    })]
  });
}));
export { IconRouter };
