import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlayHandball = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 21l3.5 -2l-4.5 -4l2 -4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 6l2 4l5 .5l4 2.5l2.5 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20l5 -1l1.5 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1",
      stroke: color
    })]
  });
}));
export { IconPlayHandball };
