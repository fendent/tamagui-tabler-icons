import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFilter2Dollar = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 6h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 12h10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 18h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 15h-2m-2 6h2m0 0v1m0 -1h.5c.398 0 .779 -.158 1.061 -.439c.281 -.281 .439 -.663 .439 -1.061c0 -.398 -.158 -.779 -.439 -1.061c-.281 -.281 -.663 -.439 -1.061 -.439h-1c-.398 0 -.779 -.158 -1.061 -.439c-.281 -.281 -.439 -.663 -.439 -1.061c0 -.398 .158 -.779 .439 -1.061c.281 -.281 .663 -.439 1.061 -.439h.5m0 -1v1",
      stroke: color
    })]
  });
}));
export { IconFilter2Dollar };
