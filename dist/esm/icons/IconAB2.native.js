import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAB2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 7h-4",
      stroke: color
    })]
  });
}));
export { IconAB2 };
