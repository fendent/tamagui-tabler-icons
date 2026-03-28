import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWreckingBall = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 19l-9 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 15l9 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12v-5h2a3 3 0 0 1 3 3v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 15v-2a1 1 0 0 1 1 -1h7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 11v-7l-6 7",
      stroke: color
    })]
  });
}));
export { IconWreckingBall };
