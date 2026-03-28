import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSwitch = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M15 4l4 0l0 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.75 9.25l4.25 -5.25",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 19l4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 19l4 0l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 5l14 14",
      stroke: color
    })]
  });
}));
export { IconSwitch };
