import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTextSize = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 7v-2h13v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 5v14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 19h-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 13v-1h6v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 12v7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 19h2",
      stroke: color
    })]
  });
}));
export { IconTextSize };
