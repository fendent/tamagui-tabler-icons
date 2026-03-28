import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRun = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 17l5 1l.75 -1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 21l0 -4l-4 -3l1 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 12l0 -3l5 -1l3 3l3 1",
      stroke: color
    })]
  });
}));
export { IconRun };
