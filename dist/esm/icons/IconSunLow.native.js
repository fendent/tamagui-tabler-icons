import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSunLow = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 4v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 12h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 20v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.31 6.31l-.01 -.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.71 6.31l-.01 -.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.7 17.7l.01 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.3 17.7l.01 .01",
      stroke: color
    })]
  });
}));
export { IconSunLow };
