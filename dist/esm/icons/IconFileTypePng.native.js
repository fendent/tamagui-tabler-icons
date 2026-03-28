import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFileTypePng = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 3v4a1 1 0 0 0 1 1h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 21v-6l3 6v-6",
      stroke: color
    })]
  });
}));
export { IconFileTypePng };
