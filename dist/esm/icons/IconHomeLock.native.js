import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHomeLock = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 12h-2l9 -9l8 8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12v7a2 2 0 0 0 2 2h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 21v-6a2 2 0 0 1 2 -2h2c.688 0 1.294 .347 1.654 .875",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 19a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 18v-1.5a1.5 1.5 0 1 1 3 0v1.5",
      stroke: color
    })]
  });
}));
export { IconHomeLock };
