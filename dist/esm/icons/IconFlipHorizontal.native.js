import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFlipHorizontal = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12l18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 16l10 0l-10 5l0 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 8l10 0l-10 -5l0 5",
      stroke: color
    })]
  });
}));
export { IconFlipHorizontal };
