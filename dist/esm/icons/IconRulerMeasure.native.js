import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRulerMeasure = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 12v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 12v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 12v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 12v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 5h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 3v4",
      stroke: color
    })]
  });
}));
export { IconRulerMeasure };
