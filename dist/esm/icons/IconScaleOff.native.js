import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconScaleOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 20h10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.452 5.425l2.548 -.425l6 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v5m0 4v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconScaleOff };
