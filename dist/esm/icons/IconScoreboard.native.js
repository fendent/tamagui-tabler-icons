import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconScoreboard = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 5v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 10v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 18v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 3v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 3v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5",
      stroke: color
    })]
  });
}));
export { IconScoreboard };
