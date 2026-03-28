import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandBinance = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 8l2 2l4 -4l4 4l2 -2l-6 -6l-6 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5l-6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 10l2 2l-2 2l-2 -2l2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 10l2 2l-2 2l-2 -2l2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 10l2 2l-2 2l-2 -2l2 -2",
      stroke: color
    })]
  });
}));
export { IconBrandBinance };
