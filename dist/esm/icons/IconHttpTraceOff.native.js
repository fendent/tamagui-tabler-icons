import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHttpTraceOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 8h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 8v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12h2m2 -2a2 2 0 0 0 -2 -2m-2 2v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 16l-3 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 13v-3a2 2 0 1 1 4 0v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 13h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconHttpTraceOff };
