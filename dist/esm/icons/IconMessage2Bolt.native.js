import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMessage2Bolt = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 9h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 13h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 20l-1 1l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 16l-2 3h4l-2 3",
      stroke: color
    })]
  });
}));
export { IconMessage2Bolt };
