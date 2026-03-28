import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconEyePause = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.022 17.945a9.308 9.308 0 0 1 -1.022 .055c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.195 .325 -.394 .636 -.596 .935",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 17v5",
      stroke: color
    })]
  });
}));
export { IconEyePause };
