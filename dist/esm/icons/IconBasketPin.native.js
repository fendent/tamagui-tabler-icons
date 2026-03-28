import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBasketPin = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 10l-2 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 10l2 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.161 .92",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.866 13.28a2 2 0 1 0 -1.866 2.72",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 18v.01",
      stroke: color
    })]
  });
}));
export { IconBasketPin };
