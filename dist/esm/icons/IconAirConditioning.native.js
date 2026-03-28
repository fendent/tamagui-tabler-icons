import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAirConditioning = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 16a3 3 0 0 1 -3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 16a3 3 0 0 0 3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 16v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3",
      stroke: color
    })]
  });
}));
export { IconAirConditioning };
