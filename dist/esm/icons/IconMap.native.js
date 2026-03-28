import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMap = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 4v13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 7v13",
      stroke: color
    })]
  });
}));
export { IconMap };
