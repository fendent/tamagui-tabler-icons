import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowAutofitContent = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 4l-3 3l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 4l3 3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 16a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 7h-7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 7h-7",
      stroke: color
    })]
  });
}));
export { IconArrowAutofitContent };
