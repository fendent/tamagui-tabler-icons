import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAngle = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 19h-18l9 -15",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.615 15.171h.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.515 11.771h.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.715 8.671h.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.415 5.971h.015",
      stroke: color
    })]
  });
}));
export { IconAngle };
