import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconEmphasis = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 5h-8v10h8m-1 -5h-7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 20l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 20l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 20l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 20l0 .01",
      stroke: color
    })]
  });
}));
export { IconEmphasis };
