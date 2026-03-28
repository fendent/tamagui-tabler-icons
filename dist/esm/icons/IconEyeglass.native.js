import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconEyeglass = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 4h-2l-3 10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 4h2l3 10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 16l4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5",
      stroke: color
    })]
  });
}));
export { IconEyeglass };
