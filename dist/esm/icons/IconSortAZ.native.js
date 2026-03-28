import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSortAZ = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 8h4l-4 8h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 16v-6a2 2 0 1 1 4 0v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 13h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 12h2",
      stroke: color
    })]
  });
}));
export { IconSortAZ };
