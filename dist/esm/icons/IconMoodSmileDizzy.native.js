import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMoodSmileDizzy = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.5 15a3.5 3.5 0 0 1 -5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 9l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 9l-2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 9l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 9l-2 2",
      stroke: color
    })]
  });
}));
export { IconMoodSmileDizzy };
