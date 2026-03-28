import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTornado = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 4l-18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 16l-6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 20l4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 8l14 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12l12 0",
      stroke: color
    })]
  });
}));
export { IconTornado };
