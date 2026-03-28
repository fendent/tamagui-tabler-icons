import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconEmergencyBed = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 6h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 4v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12v2l-2.5 2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.5 16.5l-2.5 -2.5",
      stroke: color
    })]
  });
}));
export { IconEmergencyBed };
