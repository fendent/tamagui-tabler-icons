import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBellSchool = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 10a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 10v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    })]
  });
}));
export { IconBellSchool };
