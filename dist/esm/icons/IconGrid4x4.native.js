import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconGrid4x4 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 6h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 12h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 18h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 3v18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 3v18",
      stroke: color
    })]
  });
}));
export { IconGrid4x4 };
