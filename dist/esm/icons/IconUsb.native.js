import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconUsb = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 17v-11.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 10v3l5 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14.5l5 -2v-2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 10h2v-2h-2l0 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 5.5h4l-2 -2.5l-2 2.5",
      stroke: color
    })]
  });
}));
export { IconUsb };
