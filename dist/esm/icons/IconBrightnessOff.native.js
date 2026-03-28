import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrightnessOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 3v5m0 4v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.5 8.5l4.15 -4.15",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14l1.025 -.983m2.065 -1.981l4.28 -4.106",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 19.6l3.79 -3.79m2 -2l3.054 -3.054",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBrightnessOff };
