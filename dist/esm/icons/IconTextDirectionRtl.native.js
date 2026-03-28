import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTextDirectionRtl = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 15v-11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 15v-11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 19h14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 21l-2 -2l2 -2",
      stroke: color
    })]
  });
}));
export { IconTextDirectionRtl };
