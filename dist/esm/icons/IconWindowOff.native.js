import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWindowOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6.166 6.19a6.903 6.903 0 0 0 -1.166 3.81v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-1m0 -4v-5c0 -3.728 -3.134 -7 -7 -7a6.86 6.86 0 0 0 -3.804 1.158",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 13h8m4 0h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v5m0 4v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconWindowOff };
