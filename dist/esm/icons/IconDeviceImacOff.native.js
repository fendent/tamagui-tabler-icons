import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDeviceImacOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 13h10m4 0h4",
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
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconDeviceImacOff };
