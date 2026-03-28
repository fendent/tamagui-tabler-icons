import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCherry = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 13c.366 -2 1.866 -3.873 4.5 -5.6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0",
      stroke: color
    })]
  });
}));
export { IconCherry };
