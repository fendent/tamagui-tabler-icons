import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDeviceSim = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 11h3v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 17v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 14v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 11v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 14v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 17v.01",
      stroke: color
    })]
  });
}));
export { IconDeviceSim };
