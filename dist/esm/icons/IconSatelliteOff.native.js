import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSatelliteOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7.707 3.707l5.586 5.586m-1.293 2.707l-1.293 1.293a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414l1.293 -1.293",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 10l-3 3l3 3l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 6l3 -3l3 3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12l1.5 1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.5 17c.69 0 1.316 -.28 1.769 -.733",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 21c1.654 0 3.151 -.67 4.237 -1.752m1.507 -2.507a6 6 0 0 0 .256 -1.741",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconSatelliteOff };
