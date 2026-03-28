import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandCodepen = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 15l9 6l9 -6l-9 -6l-9 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 9l9 6l9 -6l-9 -6l-9 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 9l0 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 9l0 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3l0 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 15l0 6",
      stroke: color
    })]
  });
}));
export { IconBrandCodepen };
