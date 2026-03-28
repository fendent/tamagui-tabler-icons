import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAlphabetLatin = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 7v10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 12a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3",
      stroke: color
    })]
  });
}));
export { IconAlphabetLatin };
