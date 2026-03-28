import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBorderOuter = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 8l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 12l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 16l0 .01",
      stroke: color
    })]
  });
}));
export { IconBorderOuter };
