import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconChessRook = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 16l1 -9h6l1 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 4l.5 3h11l.5 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 4v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 4v3",
      stroke: color
    })]
  });
}));
export { IconChessRook };
