import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowLeftFromArc = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 12h12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 16l4 -4l-4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3a9 9 0 1 0 0 18",
      stroke: color
    })]
  });
}));
export { IconArrowLeftFromArc };
