import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMoodSmileBeam = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 10c-.5 -1 -2.5 -1 -3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 10c-.5 -1 -2.5 -1 -3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.5 15a3.5 3.5 0 0 1 -5 0",
      stroke: color
    })]
  });
}));
export { IconMoodSmileBeam };
