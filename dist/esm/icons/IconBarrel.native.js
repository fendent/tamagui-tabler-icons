import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBarrel = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7.278 4h9.444a2 2 0 0 1 1.841 1.22c.958 2.26 1.437 4.52 1.437 6.78c0 2.26 -.479 4.52 -1.437 6.78a2 2 0 0 1 -1.841 1.22h-9.444a2 2 0 0 1 -1.841 -1.22c-.958 -2.26 -1.437 -4.52 -1.437 -6.78c0 -2.26 .479 -4.52 1.437 -6.78a2 2 0 0 1 1.841 -1.22",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 4c.667 2.667 1 5.333 1 8s-.333 5.333 -1 8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 4c-.667 2.667 -1 5.333 -1 8s.333 5.333 1 8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4.5 16h15",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.5 8h-15",
      stroke: color
    })]
  });
}));
export { IconBarrel };
