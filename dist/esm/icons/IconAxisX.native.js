import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAxisX = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 13v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 9v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 5v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 20l3 -3l-3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 17h16",
      stroke: color
    })]
  });
}));
export { IconAxisX };
