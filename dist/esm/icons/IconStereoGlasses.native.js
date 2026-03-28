import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconStereoGlasses = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 3h-2l-3 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 3h2l3 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 16h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 16h1",
      stroke: color
    })]
  });
}));
export { IconStereoGlasses };
