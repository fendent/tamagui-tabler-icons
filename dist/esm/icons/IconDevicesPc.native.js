import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDevicesPc = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 5h6v14h-6l0 -14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 9h10v7h-10l0 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 19h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 16v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 13v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 16v.01",
      stroke: color
    })]
  });
}));
export { IconDevicesPc };
