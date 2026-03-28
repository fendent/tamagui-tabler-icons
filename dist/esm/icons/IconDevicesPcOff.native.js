import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDevicesPcOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 9v10h-6v-14h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 9h9v7h-2m-4 0h-4v-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 19h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 17v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 13v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 16v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconDevicesPcOff };
