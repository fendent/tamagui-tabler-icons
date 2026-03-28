import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconUvIndex = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 4v-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 16l2 5h1l2 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 16v3a2 2 0 1 0 4 0v-3",
      stroke: color
    })]
  });
}));
export { IconUvIndex };
