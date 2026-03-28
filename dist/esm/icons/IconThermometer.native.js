import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconThermometer = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 7l-1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 10l-1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 13l-1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 17l-3 3",
      stroke: color
    })]
  });
}));
export { IconThermometer };
