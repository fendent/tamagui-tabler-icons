import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRobot = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 2v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 12v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 12v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 16l4 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 14l4 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 18h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 8v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 8v.01",
      stroke: color
    })]
  });
}));
export { IconRobot };
