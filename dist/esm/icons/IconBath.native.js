import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBath = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 12v-7a2 2 0 0 1 2 -2h3v2.25",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 21l1 -1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 21l-1 -1.5",
      stroke: color
    })]
  });
}));
export { IconBath };
