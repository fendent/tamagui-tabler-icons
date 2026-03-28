import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRazorElectric = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 3v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 3v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 12v6a3 3 0 0 0 6 0v-6h-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 5h8l-1 4h-6l-1 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 17v1",
      stroke: color
    })]
  });
}));
export { IconRazorElectric };
