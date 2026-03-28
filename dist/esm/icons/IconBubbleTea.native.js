import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBubbleTea = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 9h14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 9l4 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.01 14h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.02 18h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.02 16h.01",
      stroke: color
    })]
  });
}));
export { IconBubbleTea };
