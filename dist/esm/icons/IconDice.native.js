import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDice = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 15.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 15.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
      stroke: color
    })]
  });
}));
export { IconDice };
