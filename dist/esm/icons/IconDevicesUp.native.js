import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDevicesUp = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 16.5v-7.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 22v-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 19l-3 -3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 9h2",
      stroke: color
    })]
  });
}));
export { IconDevicesUp };
