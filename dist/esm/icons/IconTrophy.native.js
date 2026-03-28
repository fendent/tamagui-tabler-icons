import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTrophy = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 21l8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 17l0 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 4l10 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 4v8a5 5 0 0 1 -10 0v-8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconTrophy };
