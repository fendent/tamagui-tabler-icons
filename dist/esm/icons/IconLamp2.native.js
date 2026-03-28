import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLamp2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 21h9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 21l-7 -8l8.5 -5.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 14c-2.148 -2.148 -2.148 -5.852 0 -8c2.088 -2.088 5.842 -1.972 8 0l-8 8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.742 7.574l-1.156 -1.156a2 2 0 0 1 2.828 -2.829l1.144 1.144",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.5 12l.208 .274a2.527 2.527 0 0 0 3.556 0c.939 -.933 .98 -2.42 .122 -3.4l-.366 -.369",
      stroke: color
    })]
  });
}));
export { IconLamp2 };
