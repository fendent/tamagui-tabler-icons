import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconProgress = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10 20.777a8.942 8.942 0 0 1 -2.48 -.969",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 3.223a9.003 9.003 0 0 1 0 17.554",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356",
      stroke: color
    })]
  });
}));
export { IconProgress };
