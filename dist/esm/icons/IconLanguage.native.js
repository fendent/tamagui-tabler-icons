import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLanguage = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 6.371c0 4.418 -2.239 6.629 -5 6.629",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 6.371h7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 9c0 2.144 2.252 3.908 6 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 20l4 -9l4 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.1 18h-6.2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.694 3l.793 .582",
      stroke: color
    })]
  });
}));
export { IconLanguage };
