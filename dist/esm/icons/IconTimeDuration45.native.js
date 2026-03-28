import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTimeDuration45 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 9v2a1 1 0 0 0 1 1h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 9v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.5 4.2v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4.2 7.5v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 12a9 9 0 1 0 9 -9",
      stroke: color
    })]
  });
}));
export { IconTimeDuration45 };
