import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCactusOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 9v1a3 3 0 0 0 3 3h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 8v5a3 3 0 0 1 -.129 .872m-2.014 2a3 3 0 0 1 -.857 .124h-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 21v-11m0 -4v-1a2 2 0 1 1 4 0v5m0 4v7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 21h10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconCactusOff };
