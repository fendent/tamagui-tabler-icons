import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTexture = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 18l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 3l-8 8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 3l-13 13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 3l-18 18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 8l-13 13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 13l-8 8",
      stroke: color
    })]
  });
}));
export { IconTexture };
