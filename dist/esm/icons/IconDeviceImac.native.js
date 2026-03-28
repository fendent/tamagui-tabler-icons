import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDeviceImac = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 13h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 21h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 17l-.5 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 17l.5 4",
      stroke: color
    })]
  });
}));
export { IconDeviceImac };
