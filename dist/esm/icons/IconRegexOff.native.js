import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRegexOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 7.875l3 -1.687",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 7.875v3.375",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 7.875l-3 -1.687",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 7.875l3 1.688",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 4.5v3.375",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 7.875l-3 1.688",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconRegexOff };
