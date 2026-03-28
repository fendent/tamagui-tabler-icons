import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPhotoX = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M15 8h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 21h-7a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 22l-5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 22l5 -5",
      stroke: color
    })]
  });
}));
export { IconPhotoX };
