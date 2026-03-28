import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconListTree = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 6h11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 18h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 6v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 18v.01",
      stroke: color
    })]
  });
}));
export { IconListTree };
